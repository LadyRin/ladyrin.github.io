<script setup lang="ts">
import { watch, computed } from 'vue'
import WindowComponent from '@/components/Apps/WindowComponent.vue'
import type { AppInfo } from '@/types';

const props = defineProps({
    apps: {
        type: Array as () => AppInfo[],
        required: true
    }
});

const emit = defineEmits([
    'closeApp',
    'maximize',
    'minimize'
]);

const maximize = (app: AppInfo) => {
    emit('maximize', app);
}

const minimize = (app: AppInfo) => {
    emit('minimize', app);
}

watch(() => props.apps, (apps) => {
    const zIndicesCopy = new Map<number, number>();
    
    apps.forEach((app, index) => {
        zIndicesCopy.set(app.pid, zIndices.get(app.pid) ?? index+1);
    });

    zIndices = zIndicesCopy;

});

const nextWindowPosition = () => {
    const numberOfWindows = props.apps.length;
    const x = 100 + numberOfWindows * 20;
    const y = 100 + numberOfWindows * 20;

    return { x, y };
};

let zIndices = new Map<number, number>();

const placeOnTop = (pid: number) => {
    const appsCopy = props.apps;
    appsCopy.sort((a, b) => {
        return zIndices.get(a.pid)! - zIndices.get(b.pid)! + (a.pid == pid ? 10000 : 0);
    }).forEach((app, index) => {
        zIndices.set(app.pid, index+1);
    });
}

</script>

<template>
    <div class="window-manager">
        <WindowComponent v-for="window in apps" 
        :app="window"
        :z-index="zIndices.get(window.pid)" 
        :key="window.pid" @place-on-top="placeOnTop(window.pid)"
        :appear-at="nextWindowPosition()"
        @close="$emit('closeApp', window.pid)"
        @maximize="maximize"
        @minimize="minimize"
        >
            <p>Hello World</p>
        </WindowComponent>
    </div>
</template>

<style scoped>
</style>