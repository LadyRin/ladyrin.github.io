<script setup lang="ts">
import AppIcon from '@/components/Desktop/AppIcon.vue'
import type { AppIconInfo } from '@/types';
import { ref, type Ref } from 'vue';

const icons: Ref<AppIconInfo[]> = ref<AppIconInfo[]>([
    {
        number: 1,
        name: 'Minecraft',
        icon: 'minecraft.png',
        selected: false
    },
    {
        number: 2,
        name: 'Firefox',
        icon: 'firefox.png',
        selected: false
    },
    {
        number: 3,
        name: 'À propos.html',
        icon: 'text-html.svg',
        selected: false
    },
    {
        number: 4,
        name: 'projets',
        icon: 'default-folder.svg',
        selected: false
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
        :style="{ '--delay': (app.number - 1) * 0.1 + 's' }"
        />
    </div>
    <div class="taskBar">
        <div class="startButton">
            <img src="@/assets/start.png" alt="Start Button" draggable="false"/>
        </div>
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

    .taskBar {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 50px;
        background: linear-gradient(to bottom, #65a8ff 0%, #446da3 100%);
        border-top: #446da3 3px solid;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        animation: appear .9s;
    }


    .startButton img {
        width: 45px;
        height: 45px;
        margin-left: 10px;
        user-select: none;
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