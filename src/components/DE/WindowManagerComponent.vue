<script setup lang="ts">
import { watch } from 'vue'
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
]);

watch(() => props.apps, (apps) => {
    const zIndicesCopy = new Map<number, number>();
    
    apps.forEach((app, index) => {
        zIndicesCopy.set(app.pid, zIndices.get(app.pid) ?? index+1);
    });

    zIndices = zIndicesCopy;

});

let zIndices = new Map<number, number>();

const placeOnTop = (pid: number) => {
    const appsCopy = props.apps;
    appsCopy.sort((a, b) => {
        return zIndices.get(a.pid)! - zIndices.get(b.pid)! + (a.pid == pid ? 10000 : 0);
    }).forEach((app, index) => {
        zIndices.set(app.pid, index+1);
    });

    console.log(zIndices);
}

</script>

<template>
    <div>
        <WindowComponent v-for="window in apps" 
        :name="window.name" 
        :icon="window.icon" 
        :z-index="zIndices.get(window.pid)" 
        :key="window.pid" @place-on-top="placeOnTop(window.pid)"
        @close="$emit('closeApp', window.pid)">
            <p>Hello World</p>
        </WindowComponent>
    </div>
</template>

<style scoped>
</style>