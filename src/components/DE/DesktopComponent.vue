<script setup lang="ts">
import AppIcon from '@/components/Desktop/DesktopAppIcon.vue'
import { AppWindowState, type AppIconInfo, type AppInfo } from '@/types';
import { FSDirectory, FSFile, FileSystemExplorer } from '@/filesystem';
import { ref, type Ref } from 'vue';

const fs = new FileSystemExplorer();
fs.cd('home/user/Desktop');    

const files = (fs.getWorkingDirectory() as FSDirectory).getChildren();

const icons: Ref<AppIconInfo[]> = ref<AppIconInfo[]>(
    files.map(f => {
        if(f instanceof FSDirectory) {
            return {
                name: f.getName(),
                icon: 'default-folder.svg',
                selected: false,
                app: {
                    name: 'Dolphin File Manager',
                    icon: 'default-folder.svg',
                    pid: 0,
                    windowState: AppWindowState.NORMAL,
                    args : {
                        path: fs.pwd() + f.getName()
                    }
                }
            }
        } else {
            return {
                name: f.getName(),
                icon: (f as FSFile).getIconPath(),
                selected: false,
                app: {
                    name: 'Firefox',
                    icon: 'firefox.png',
                    pid: 0,
                    windowState: AppWindowState.NORMAL,
                    args : {
                        path: fs.pwd() + f.getName()
                    }
                }
            }
        };
    })
);

const selectApp = (icon: AppIconInfo) => {
    icons.value.forEach(i => i.selected = false);
    icon.selected = true;
}

const emit = defineEmits([
    'openApp'
]);

const openApp = (app: AppInfo) => {
    emit('openApp', app);
}

</script>

<template>
    <div class="icons-wrapper">
        <AppIcon class="icon" v-for="(icon, index) in icons" :info="icon"
            :key="icon.name" @select-app="selectApp(icon)" @open-app="openApp"
            :style="{ '--delay': (index - 1) * 0.1 + 's' }" />
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