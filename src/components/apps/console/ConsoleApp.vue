<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import type { CommandLog, Command, App } from '@/types'
import { FSExplorer } from '@/core/filesystem'
import { useWindowStore } from '@/core/stores/windows'

const fs = new FSExplorer()
const windows = useWindowStore()
const command = ref('')
const commandLog: Ref<CommandLog[]> = ref<CommandLog[]>([])
let hasCleared = false
let commandLogIndex = 0

const pwdCommand = () => {
  return fs.pwd()
}

const mkdirCommand = (args: string[]) => {
  return fs.mkdir(args[1])
}

const lsCommand = () => {
  const files = fs.ls()
  let output = ''
  for (const element of files) {
    output += element + '\n'
  }
  return output
}

const cdCommand = (args: string[]) => {
  if (args.length < 2) return 'cd: missing operand'

  fs.cd(args[1])
  return ''
}

const helpCommand = () => {
  let output = ''
  for (const element of availableCommands) {
    output += element.name + ' - ' + element.description + '\n'
  }
  return output
}

const clearCommand = () => {
  commandLog.value = []
  hasCleared = true
  return ''
}

const psCommand = () => {
  let output = ''
  for (const element of windows.windows) {
    output += element.id + ' ' + element.app.name + '\n'
  }
  return output
}

const killCommand = (args: string[]) => {
  if (args.length < 2) return 'kill: missing operand'

  let id = parseInt(args[1])
  windows.killWithId(id)
  return ''
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
    name: 'pwd',
    description: 'Affiche le répertoire actuel.',
    callback: pwdCommand
  },
  {
    name: 'mkdir',
    description: 'Crée un répertoire.',
    callback: mkdirCommand
  },
  {
    name: 'ls',
    description: 'Liste les fichiers et répertoires.',
    callback: lsCommand
  },
  {
    name: 'cd',
    description: 'Change le répertoire actuel.',
    callback: cdCommand
  },
  {
    name: 'ps',
    description: 'Liste les processus en cours.',
    callback: psCommand
  },
  {
    name: 'kill',
    description: 'Tue un processus avec son ID.',
    callback: killCommand
  }
]

const handleCommand = () => {
  let newLog: CommandLog = {
    command: command.value,
    output: '',
    number: commandLog.value.length + 1
  }

  let args = command.value.split(' ')
  let commandFound = false
  for (const element of availableCommands) {
    if (element.name == args[0]) {
      newLog.output = element.callback(args)
      commandLog.value.push(newLog)
      commandFound = true
      break
    }
  }

  if (!commandFound) {
    newLog.output = 'Command not found.'
    commandLog.value.push(newLog)
  }

  commandLogIndex = commandLog.value.length
  command.value = ''

  const el = document.querySelector('#inputline')
  el?.scrollIntoView()
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key == 'ArrowUp') {
    if (commandLogIndex > 0) {
      commandLogIndex--
      command.value = commandLog.value[commandLogIndex].command
    }
  } else if (e.key == 'ArrowDown') {
    if (commandLogIndex < commandLog.value.length) {
      commandLogIndex++
      if (commandLogIndex == commandLog.value.length) command.value = ''
      else command.value = commandLog.value[commandLogIndex].command
    }
  } else if (e.key == 'Tab') {
    e.preventDefault()
    handleTab()
  }
}

const handleTab = () => {
  let args = command.value.split(' ')
  if (args.length == 1) {
    let matches: string[] = []
    for (const element of availableCommands) {
      if (element.name.startsWith(args[0])) {
        matches.push(element.name)
      }
    }
    if (matches.length == 1) {
      command.value = matches[0]
    } else if (matches.length > 1) {
      let output = ''
      for (const element of matches) {
        output += element + ' '
      }
      commandLog.value.push({
        command: command.value,
        output: output,
        number: commandLog.value.length + 1
      })
    }
  } else if (args[0] == 'cd') {
    handleCDAutoComplete(args)
  }
}

const handleCDAutoComplete = (args: string[]) => {
  let matches: string[] = []
  for (const element of fs.ls()) {
    if (element.startsWith(args[1])) {
      matches.push(element)
    }
  }
  if (matches.length == 1) {
    command.value = 'cd ' + matches[0]
  } else if (matches.length > 1) {
    let output = ''
    for (const element of matches) {
      output += element + ' '
    }
    commandLog.value.push({
      command: command.value,
      output: output,
      number: commandLog.value.length + 1
    })
  }
}

onMounted(() => {
  document.getElementById('inputline')?.focus()

  window.addEventListener('keydown', handleKeyDown)

  window.addEventListener('click', () => {
    if (document.getSelection()?.toString() != '') return

    document.getElementById('inputline')?.focus()
  })
})
</script>

<template>
  <div class="console-app">
    <div class="log">
      <div class="welcome" v-if="!hasCleared">
        Bienvenue sur SharkOS! Pour commencer, tapez 'help'.
      </div>
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
  </div>
</template>

<style scoped>
.console-app {
  overflow: scroll;
  width: 100%;
  height: 100%;
  background-color: #000000d2;
}

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
}

input {
  width: 100%;
  color: #80b7ff;
  background-color: transparent;
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
  color: #fff;
  font-size: 1.5rem;
  font-family: monospace;
  border: none;
  outline: none;
  white-space: pre-wrap;
}

.welcome {
  color: #95ff80;
}
</style>
