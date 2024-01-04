<script setup lang="ts">
import type { AppInfo, AppIconInfo } from '@/types';
import TaskBarAppIconComponent from '@/components/TaskBar/TaskBarAppIconComponent.vue';
import { onMounted, ref } from 'vue';

const menuOpen = ref(false);

const appsInStartMenu = ref<AppIconInfo[]>([
    {
        selected: false,
        name: 'Firefox',
        icon: 'firefox.png',
        app: {
            name: 'Firefox',
            icon: 'firefox.png',
            windowState: 0,
            pid: 0,
            args: {
                path: 'https://duckduckgo.com'
            }
        }
    },
    {
        selected: false,
        name: 'Dolphin File Manager',
        icon: 'default-folder.svg',
        app: {
            name: 'Dolphin File Manager',
            icon: 'default-folder.svg',
            windowState: 0,
            pid: 0,
            args: {
                path: 'home/user/Desktop'
            }
        }
    }
]);

defineProps({
    apps : {
        type: Array as () => AppInfo[],
        required: true
    }
});

const emit = defineEmits([
    'open-app',
    'close-app',
    'maximize',
    'minimize'
]);

const openApp = (app: AppInfo) => {
    emit('open-app', app);
}

const closeApp = (app: AppInfo) => {
    emit('close-app', app);
}

const maximize = (app: AppInfo) => {
    emit('maximize', app);
}

const minimize = (app: AppInfo) => {
    emit('minimize', app);
}

const toggleStartMenu = () => {
    menuOpen.value = !menuOpen.value;
}

onMounted(() => {
    document.addEventListener('click', (e) => {
        if (e.target != document.querySelector('.startButton')
        && e.target != document.querySelector('.startButton img')) {
            menuOpen.value = false;
        }
    })
})

</script>

<template>
    <div class="taskBar">
        <div class="startButton" @click="toggleStartMenu">
            <img src="@/assets/start.png" alt="Start Button" draggable="false"/>
        </div>
        <div class="startMenu" :class="{ 'active': menuOpen }">
            <div class="startMenuHeader">
                <img src="@/assets/start.png" alt="Start Button" draggable="false"/>
                <p>Start</p>
            </div>
            <div v-for="app in appsInStartMenu" class="startMenuItem" @click="openApp(app.app)" :key="app.name">
                <img :src="'icons/' + app.app.icon" :alt="app.app.name" draggable="false"/>
                <p>{{ app.name }}</p>
            </div>
        </div>

        <div class="tasks">
            <TaskBarAppIconComponent v-for="app in apps" :app="app" :key="app.pid" @minimize="minimize" @maximize="maximize" @close="closeApp" @open-app="openApp" />
        </div>
        
    </div>
</template>

<style scoped>
    .taskBar {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 50px;
        background: linear-gradient(to bottom, #65a8ff 0%, #446da3 100%);
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        animation: appear .9s;
        z-index: 50000;
    }

    .tasks {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-left: 10px;
        gap: 5px;
    }


    .startButton {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        cursor: pointer;
        transition: all .2s;
    }

    .startButton img {
        width: 45px;
        height: 45px;
        transition: all .2s;
    }

    .startButton:hover img {
        filter: drop-shadow(0px 0px 5px #fff);
    }

    .startMenu {
        position: absolute;
        bottom: 50px;
        left: 0;
        width: 300px;
        height: 500px;
        background: #ffffff;
        border-radius: 5px;
        box-shadow: 0px 0px 5px #000;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        z-index: 2;
    }

    .startMenu.active {
        display: flex;
    }

    .startMenuHeader {
        width: 100%;
        height: 30px;
        background-color: #446da3;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        user-select: none;
    }

    .startMenuHeader img {
        width: 20px;
        height: 20px;
        margin-left: 5px;
        margin-right: 5px;
    }

    .startMenuHeader p {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        margin-left: 5px;
        margin-right: 5px;
    }

    .startMenuItem {
        width: 100%;
        height: 50px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        user-select: none;
        cursor: pointer;
        transition: all .2s;
    }

    .startMenuItem:hover {
        background-color: #446da3;
    }

    .startMenuItem img {
        width: 30px;
        height: 30px;
        margin-left: 5px;
        margin-right: 5px;
    }

    .startMenuItem p {
        color: #000;
        font-size: 14px;
        font-weight: bold;
        margin-left: 5px;
        margin-right: 5px;
    }

</style>