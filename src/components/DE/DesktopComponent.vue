<script setup lang="ts">
import AppIcon from '@/components/Desktop/AppIcon.vue'
import type { AppIconInfo, AppInfo } from '@/types';
import { ref, type Ref, defineEmits } from 'vue';

const icons: Ref<AppIconInfo[]> = ref<AppIconInfo[]>([
    {
        number: 1,
        name: 'Minecraft',
        icon: 'minecraft.png',
        selected: false,
        appToRun: {
            name: 'Minecraft',
            icon: 'minecraft.png',
            pid: 0
        }
    },
    {
        number: 2,
        name: 'Firefox',
        icon: 'firefox.png',
        selected: false,
        appToRun: {
            name: 'Firefox',
            icon: 'firefox.png',
            pid: 0
        }
    },
    {
        number: 3,
        name: 'À propos.html',
        icon: 'text-html.svg',
        selected: false,
        appToRun: {
            name: 'À propos',
            icon: 'text-html.svg',
            pid: 0
        }
    },
    {
        number: 4,
        name: 'projets',
        icon: 'default-folder.svg',
        selected: false,
        appToRun: {
            name: 'projets',
            icon: 'default-folder.svg',
            pid: 0
        }
    }

]);

const selectApp = (appNumber: number) => {
    for (let i = 0; i < icons.value.length; i++) {
        if (icons.value[i].number == appNumber) {
            icons.value[i].selected = true;
        } else {
            icons.value[i].selected = false;
        }
    }
}

const emit = defineEmits([
    'openApp'
]);

</script>

<template>
    <div class="icons-wrapper">
        <AppIcon 
        class="icon" 
        v-for="app in icons" 
        :name="app.name" 
        :icon="app.icon" 
        :selected="app.selected" 
        :key="app.number" 
        @select-app="selectApp(app.number)"
        @open-app="$emit('openApp', app.appToRun)"
        :style="{ '--delay': (app.number - 1) * 0.1 + 's' }"
        />
    </div>
</template>

<style scoped>
    .icons-wrapper {
        width: 100vw;
        height: 100vh;
        background: url('@/assets/wallpaper2.png') no-repeat center center fixed;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        
    }

    .icon {
        opacity: 0;
        animation: appear .4s forwards;
        animation-delay: var(--delay);
    }
    @keyframes appear {
        0% {
            opacity: 0;
        }

        99% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>