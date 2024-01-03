<script setup lang="ts">
import DesktopComponent from '@/components/DE/DesktopComponent.vue'
import WindowManagerComponent from '@/components/DE/WindowManagerComponent.vue'
import TaskBarComponent from '@/components/DE/TaskBarComponent.vue'
import { defineProps, ref, defineEmits } from 'vue'
import type { AppInfo } from '@/types';
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

</script>

<template>
    <main :class="{ 'waiting': waiting }">
        <WindowManagerComponent :apps="apps" @close-app="handleCloseApp" />
        <TaskBarComponent :apps="apps" />
        <DesktopComponent @open-app="handleOpenApp" />
    </main>
</template>

<style scoped>
main.waiting {
    cursor: wait;
}
</style>
