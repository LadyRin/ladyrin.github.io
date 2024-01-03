<script setup lang="ts">
import type { AppIconInfo } from '@/types';


defineProps({
    info: {
        type: Object as () => AppIconInfo,
        required: true
    }
})

defineEmits([
    'openApp',
    'selectApp'
])

</script>

<template>
    <div class="app-icon" @dblclick="$emit('openApp', info.app)" @click="$emit('selectApp')" :class="{ selected: info.selected }">
        <img :src="'icons/' + info.app.icon" alt="icon" draggable="false" />
        <p>{{ info.name }}</p>
    </div>
</template>

<style scoped>
.app-icon {
    position: relative;
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    user-select: none;
}

.app-icon img {
    width: 80px;
    height: 80px;
}

.app-icon p {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
    text-shadow: #000 0px 0px 5px;
    user-select: none;
}


.selected img {
    filter: drop-shadow(0px 0px 5px #80b7ff);
}

.selected p {
    color: #80b7ff;
}
</style>