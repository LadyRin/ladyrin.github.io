<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import type { CommandLog, Command } from '@/types';
import { useRouter } from 'vue-router';

const command = ref('');
const commandLog: Ref<CommandLog[]> = ref<CommandLog[]>([]);
let hasCleared = false;
let commandLogIndex = 0;

const router = useRouter();

const helpCommand = () => {
    let output = '';
    for (let i = 0; i < availableCommands.length; i++) {
        output += availableCommands[i].name + ' - ' + availableCommands[i].description + '\n';
    }
    return output;
}

const clearCommand = () => {
    commandLog.value = [];
    hasCleared = true;
    return '';
}

const startDECommand = () => {
    setTimeout(() => {
        router.push('/desktop');
    }, 700);
    return 'Démarrage de la session graphique...';
}

const availableCommands: Command[] = [
    {
        name: 'help',
        description: 'Liste les commandes disponibles.',
        callback: helpCommand
    },
    {
        name: 'clear',
        description: 'Efface le terminal.',
        callback: clearCommand
    },
    {
        name: 'start-desktop-environment',
        description: 'Démarre l\'environnement de bureau.',
        callback: startDECommand
    }
];

const handleCommand = () => {
    let newLog: CommandLog = {
        command: command.value,
        output: '',
        number: commandLog.value.length + 1
    };

    let args = command.value.split(' ');
    let commandFound = false;
    for (let i = 0; i < availableCommands.length; i++) {
        if (availableCommands[i].name == args[0]) {
            newLog.output = availableCommands[i].callback(args);
            commandLog.value.push(newLog);
            commandFound = true;
            break;
        }
    }

    if (!commandFound) {
        newLog.output = 'Command not found.';
        commandLog.value.push(newLog);
    }
    
    commandLogIndex = commandLog.value.length;
    command.value = '';

    const el = document.querySelector('#inputline');
    el?.scrollIntoView();
}

const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'ArrowUp') {
        if (commandLogIndex > 0) {
            commandLogIndex--;
            command.value = commandLog.value[commandLogIndex].command;
        }
    } else if (e.key == 'ArrowDown') {
        if (commandLogIndex < commandLog.value.length) {
            commandLogIndex++;
            if (commandLogIndex == commandLog.value.length)
                command.value = '';
            else
                command.value = commandLog.value[commandLogIndex].command;
        }
    } else if (e.key == 'Tab') {
        e.preventDefault();
        handleTab();

    }
}

const handleTab = () => {
    let args = command.value.split(' ');
    if (args.length == 1) {
        let matches: string[] = [];
        for (let i = 0; i < availableCommands.length; i++) {
            if (availableCommands[i].name.startsWith(args[0])) {
                matches.push(availableCommands[i].name);
            }
        }
        if (matches.length == 1) {
            command.value = matches[0];
        } else if (matches.length > 1) {
            let output = '';
            for (let i = 0; i < matches.length; i++) {
                output += matches[i] + ' ';
            }
            commandLog.value.push({
                command: command.value,
                output: output,
                number: commandLog.value.length + 1
            });
        }
    }
}
        


onMounted(() => {
    document.getElementById('inputline')?.focus();

    window.addEventListener('keydown', handleKeyDown);
    
    window.addEventListener('click', () => {

        if(document.getSelection()?.toString() != '')
            return;

        document.getElementById('inputline')?.focus();
    });
});
</script>


<template>
    <div class="log">

        <div class="welcome" v-if="!hasCleared">Bienvenue sur SharkOS! Pour commencer, tapez 'help'.</div>


        <div v-for="log in commandLog" :key="log.number">
            <div>
                <span class="userinfo">user@sharkos$&NonBreakingSpace;</span>
                <span class="command"> {{ log.command }} </span>
            </div>
            <div class="output">{{ log.output }}</div>
        </div>
    </div>
    <div class="wrapper">
        <label for="inputline">user@sharkos$&NonBreakingSpace;</label>
        <input id="inputline" type="text" @keyup.enter="handleCommand" v-model="command" />
    </div>
</template>


<style scoped>
.wrapper {
    display: flex;
    flex-direction: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
}

.wrapper label {
    font-size: 1.5rem;
    font-family: monospace;
    color: #80b7ff;
    background-color: #000;
}

input {
    width: 100%;
    background-color: #000;
    color: #80b7ff;
    font-size: 1.5rem;
    font-family: monospace;
    border: none;
    outline: none;
}

.output {
    padding-left: 1rem;
}

.userinfo {
    color: #80b7ff;
}

.log {
    width: 100%;
    background-color: #000;
    color: #fff;
    font-size: 1.5rem;
    font-family: monospace;
    border: none;
    outline: none;
    overflow-y:hidden;
    white-space: pre-wrap;
}

.welcome {
    color: #95ff80;
}
</style>
