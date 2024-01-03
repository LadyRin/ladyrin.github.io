<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue'
import type { AppInfo } from '@/types';

const props = defineProps({
    apps : Array
});

</script>

<template>
    <div class="taskBar">
        <div class="startButton">
            <img src="@/assets/start.png" alt="Start Button" draggable="false"/>
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
</style>