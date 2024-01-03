<script setup lang="ts">
import DesktopComponent from '@/components/DE/DesktopComponent.vue'
import WindowManagerComponent from '@/components/DE/WindowManagerComponent.vue'
import TaskBarComponent from '@/components/DE/TaskBarComponent.vue'
import { ref } from 'vue'
import { AppWindowState, type AppInfo } from '@/types';
let PID = 0;
let waiting = ref(false);

const apps = ref<AppInfo[]>([]);

const handleCloseApp = (pid: number) => {
    apps.value = apps.value.filter((app) => app.pid != pid);
}

const handleOpenApp = (app: AppInfo) => {
    waiting.value = true;

    setTimeout(() => {
        apps.value.push({
            ...app,
            pid: PID++
        });
        waiting.value = false;
    }, 500);
}

const handleMaximizeApp = (app: AppInfo) => {
    app.windowState = app.windowState == AppWindowState.MAXIMIZED ? AppWindowState.NORMAL : AppWindowState.MAXIMIZED;
}

const handleMinimizeApp = (app: AppInfo) => {
    app.windowState = app.windowState == AppWindowState.MINIMIZED ? AppWindowState.NORMAL : AppWindowState.MINIMIZED;
}

</script>

<template>
    <main :class="{ 'waiting': waiting }">
        <WindowManagerComponent :apps="apps" @close-app="handleCloseApp" @maximize="handleMaximizeApp" @minimize="handleMinimizeApp"/>
        <TaskBarComponent :apps="apps" @minimize="handleMinimizeApp" @open-app="handleOpenApp" @close-app="handleCloseApp" @maximize="handleMaximizeApp"/>
        <DesktopComponent @open-app="handleOpenApp"/>
    </main>
</template>

<style scoped>
main.waiting {
    cursor: wait;
}
</style>
