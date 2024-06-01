<script setup lang="ts">
import type { Window } from '@/types'
import { WindowState } from '@/types'
import { useWindowStore } from '@/core/stores/windows'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const store = useWindowStore()
const model = defineModel<Window>({
  required: true
})

const grabbed = ref(false)

const minimize = () => {
  store.minimize(model.value)
}

const maximize = () => {
  store.maximize(model.value)
}

const close = () => {
  store.killApp(model.value)
}

const placeOnTop = () => {
  store.placeOnTop(model.value)
}

const color = ref('rgb(0, 0, 0)')

onMounted(() => {
  const r = Math.random() * 255
  const g = Math.random() * 255
  const b = Math.random() * 255
  color.value = `rgb(${r}, ${g}, ${b})`

  document.addEventListener('mousemove', (e) => {
    if (grabbed.value) {
      model.value.x += e.movementX
      model.value.y += e.movementY
    }
  })

  document.addEventListener('mouseup', () => {
    grabbed.value = false
  })
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', () => {})
  document.removeEventListener('mouseup', () => {})
})
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
    @mousedown="placeOnTop">
    <div class="window-header" @mousedown="grabbed = true" @mouseup="grabbed = false">
      <div class="window-title">
        <img :src="'icons/' + model.app.icon" alt="icon" draggable="false" />
        <p>{{ model.title }}</p>
      </div>
      <div class="window-buttons">
        <div class="window-button minimize" @click="minimize">_</div>
        <div class="window-button maximize" @click="maximize">&#9633;</div>
        <div class="window-button close" @click="close">X</div>
      </div>
    </div>
    <div class="window-content" :style="{ backgroundColor: color }">
      <component :is="model.app.component" :args="model.args" />
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  display: flex;
  flex-direction: column;

  &.grabbed {
    cursor: grab;
  }

  &.maximized {
    width: 100vw;
    height: calc(100vh - 50px);
    top: 0;
    left: 0;
  }

  &.minimized {
    width: 0;
    height: 0;
    bottom: 0;
    left: 0;
    top: 100vh;
  }
}

.window-header {
  width: 100%;
  height: 30px;
  min-height: 30px;
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

  img {
    width: 20px;
    height: 20px;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #fff;
    text-shadow: #000 0px 0px 5px;
    user-select: none;
  }
}

.window-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  margin-right: 4px;
  user-select: none;
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

  &:hover {
    background-color: #aaa;
  }
}

.window-content {
  width: 100%;
  height: 100%;
  max-height: calc(100% - 30px);
  background-color: #fff;
}
</style>
