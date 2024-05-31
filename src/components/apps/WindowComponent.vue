<script setup lang="ts">
import type { WindowInfo } from '@/types'
import { WindowState } from '@/types'
import { ref } from 'vue'

const grabbed = ref(false)

const model = defineModel<WindowInfo>({
  required: true
})

const emit = defineEmits(['close', 'placeOnTop', 'maximize', 'minimize'])

const maximize = () => {
  emit('maximize')
  emit('placeOnTop')
}

const minimize = () => {
  emit('minimize')
  emit('placeOnTop')
}
</script>

<template>
  <div
    class="window"
    :style="{
      '--positionX': model.x + 'px',
      '--positionY': model.y + 'px',
      'z-index': model.zIndex
    }"
    :class="{
      maximized: model.state == WindowState.MAXIMIZED,
      minimized: model.state == WindowState.MINIMIZED,
      grabbed: grabbed
    }"
    @mousedown="$emit('placeOnTop')"
  >
    <div class="window-header">
      <div class="window-title">
        <img :src="'icons/' + model.app.icon" alt="icon" draggable="false" />
        <p>{{ model.title }}</p>
      </div>
      <div class="window-buttons">
        <div class="window-button minimize" @click="minimize">_</div>
        <div class="window-button maximize" @click="maximize">&#9633;</div>
        <div class="window-button close" @click="$emit('close')">X</div>
      </div>
    </div>
    <div class="window-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.window {
  position: absolute;
  width: 960px;
  height: 640px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #000;
  overflow: hidden;
  z-index: 1;
  top: var(--positionY);
  left: var(--positionX);
  transition: all 0.1s ease-in-out;
}

.window.grabbed {
  cursor: grab;
  transition: none;
}

.window.maximized {
  width: 100vw;
  height: calc(100vh - 50px);
  top: 0;
  left: 0;
}

.window.minimized {
  width: 0;
  height: 0;
  bottom: 0;
  left: 0;
  top: 100vh;
}

.window-header {
  width: 100%;
  height: 30px;
  background-color: #446da3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.window-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  margin-left: 4px;
}

.window-title img {
  width: 20px;
  height: 20px;
}

.window-title p {
  margin: 0;
  font-size: 1rem;
  color: #fff;
  text-shadow: #000 0px 0px 5px;
}

.window-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  margin-right: 4px;
}

.window-button {
  width: 20px;
  height: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  user-select: none;
}

.window-button:hover {
  background-color: #aaa;
}

.window-content {
  width: 100%;
  height: calc(100% - 30px);
  background-color: #fff;
}
</style>
