<script setup lang="ts">
import type { Window } from '@/types'

defineProps<{ window: Window; position: { x: number; y: number } }>()
</script>

<template>
  <div class="dock-context-menu" :style="{ left: `${position.x}px`, top: `${position.y}px` }">
    <div class="dock-context-menu-title"></div>
    <div class="dock-context-menu-item">Maximize</div>
    <div class="dock-context-menu-item">Minimize</div>
    <div class="dock-context-menu-item">Close</div>
  </div>
</template>

<style scoped lang="scss">
.dock-context-menu {
  position: fixed;
  bottom: 70px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  .dock-context-menu-item {
    padding: 0.75rem 1rem;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    &:first-child {
      border-radius: 0.5rem 0.5rem 0 0;
    }

    &:last-child {
      border-bottom: none;
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }
}
</style>
