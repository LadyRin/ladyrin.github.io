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
const previousPosition = { x: 0, y: 0 }
const previousMousePosition = { x: 0, y: 0 }

const onGrab = (event: MouseEvent) => {
  previousPosition.x = model.value.x
  previousPosition.y = model.value.y
  previousMousePosition.x = event.clientX
  previousMousePosition.y = event.clientY
  grabbed.value = true
}

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
    const constrainX = (x: number) =>
      Math.min(Math.max(x, 0 - model.value.width / 2), window.innerWidth - model.value.width / 2)

    const constrainY = (y: number) =>
      Math.min(Math.max(y, 0), window.innerHeight - model.value.height * 0.3)

    if (grabbed.value) {
      model.value.x = constrainX(previousPosition.x + e.clientX - previousMousePosition.x)
      model.value.y = constrainY(previousPosition.y + e.clientY - previousMousePosition.y)
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
    <div class="window-header" @mousedown="onGrab">
      <div class="window-icon">
        <img :src="'icons/' + model.app.icon" alt="icon" draggable="false" />
      </div>
      <div class="window-title">
        <p>{{ model.title }}</p>
      </div>
      <div class="window-buttons">
        <div class="window-button minimize" @click="minimize"></div>
        <div class="window-button maximize" @click="maximize"></div>
        <div class="window-button close" @click="close"></div>
      </div>
    </div>
    <div class="window-content">
      <component :is="model.app.component" :args="model.args" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.window {
  position: absolute;
  width: 960px;
  height: 640px;
  background-color: transparent;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgb(20, 20, 20);
  box-shadow: 0px 0px 5px #000;
  overflow: hidden;
  z-index: 1;
  top: var(--positionY);
  left: var(--positionX);
  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  &.grabbed {
    transition: none;
    cursor: grab;
  }

  &.maximized {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }

  &.minimized {
    width: 0;
    height: 0;
    bottom: 0;
    left: calc(50%);
    top: 100vh;
  }
}

.window-header {
  width: 100%;
  height: 30px;
  min-height: 30px;
  background-color: rgb(20, 20, 20);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.window-icon {
  width: 66px;
  margin-left: 4px;
  img {
    width: 20px;
    height: 20px;
  }
}

.window-title {
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  margin-left: 4px;

  p {
    text-align: center;
    font-weight: bold;
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
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-right: 4px;
  user-select: none;
}

.window-button {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  user-select: none;
  transition: filter 0.2s;

  &.close {
    background-color: #ff5f56;
  }

  &.maximize {
    background-color: #ffbd2e;
  }

  &.minimize {
    background-color: #27c93f;
  }

  &:hover {
    filter: brightness(0.7);
  }
}

.window-content {
  width: 100%;
  height: 100%;
  max-height: calc(100% - 30px);
}
</style>
