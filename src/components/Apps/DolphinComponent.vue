<script setup lang="ts">
import { FSDirectory, FSFile, type FileSystemComponent, FileSystemExplorer } from '@/filesystem';
import { type AppIconInfo, type AppInfo, AppWindowState } from '@/types';
import { computed, ref } from 'vue';
import DesktopAppIcon from '@/components/Desktop/DesktopAppIcon.vue';

const props = defineProps({
    path: {
        type: String,
        required: true
    }
});

const fs = new FileSystemExplorer();
fs.cd(props.path);

const fscomponents = ref<FileSystemComponent[]>((fs.getWorkingDirectory() as FSDirectory).getChildren());

const icons = computed(() => {
    return fscomponents.value.map(f => {
        if (f instanceof FSDirectory) {
            return {
                name: f.getName(),
                icon: 'default-folder.svg',
                selected: false,
                app: {
                    name: 'Dolphin File Manager',
                    icon: 'default-folder.svg',
                    pid: 0,
                    windowState: AppWindowState.NORMAL,
                    args: {
                        path: fs.pwd() + '/' + f.getName()
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
                    args: {
                        path: fs.pwd() + f.getName()
                    }
                }
            }
        };
    });
});


const selectApp = (icon: AppIconInfo) => {
    icons.value.forEach(i => i.selected = false);
    icon.selected = true;
}

const cd = (path: string) => {
    console.log(path);
    fs.cd(path);
    fscomponents.value = (fs.getWorkingDirectory() as FSDirectory).getChildren();
    pathToDisplay.value = fs.getPathToWorkingDirectory();
}

const emit = defineEmits([
    'openApp'
]);

const openApp = (app: AppInfo) => {
    if (app.name == 'Dolphin File Manager') {
        cd(app.args.path);
    } else {
        emit('openApp', app);
    }
}

const pathToDisplay = ref<string[]>(fs.getPathToWorkingDirectory());

</script>

<template>
    <div class="dolphin-file-manager">
        <div class="header">
            <div class="arrows">
                <button id="previous">
                    &lt;
                </button>
                <button id="next">
                    &gt;
                </button>
            </div>

            <div>
                <div class="path">
                    <span v-for="(part, index) in pathToDisplay" :key="index" @click="cd(pathToDisplay.slice(0, index + 1).join('/'))">
                        {{ part }}&nbsp;&gt;
                    </span>
                    <span>
                        {{ (fs.getWorkingDirectory() as FSDirectory).getName() }}
                    </span>
                </div>
            </div>


        </div>

        <div class="content" :class="{ 'empty': icons.length == 0 }">
            <p v-if="icons.length == 0">
                This folder is empty
            </p>
            <DesktopAppIcon class="icon" v-else v-for="icon in icons" :key="icon.name" :info="icon" @openApp="openApp"
                @selectApp="selectApp(icon)" />
        </div>

    </div>
</template>

<style scoped>
.dolphin-file-manager {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #3e3342
}

.header {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #282a33;
    border-bottom: 1px solid rgb(42, 56, 70);
}

.path span {
    padding: 2px;
    color: #fff;
    text-shadow: #000 0px 0px 5px;
    transition: all .1s;
    user-select: none;
}

.path span:hover {
    background-color: #374e70;
    cursor: pointer;
}

.header .parent-folder {
    width: 35px;
    height: 35px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    text-shadow: #000 0px 0px 5px;
    border-radius: 5px;
    background-color: #00000025;
    transition: all .2s;
}

.header .parent-folder:hover {
    background-color: #00000050;
}

.header .path {
    width: calc(100% - 40px);
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
}

.header .path p {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
    text-shadow: #000 0px 0px 5px;
}

.content {
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    background: #282931;
    padding: 8px;
    overflow-y: auto;

    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 8px;



}

.content.empty {
    justify-content: stretch;
    align-items: stretch;
}

.content p {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
}
</style>