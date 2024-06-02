<script setup lang="ts">
import { useWindowStore } from '@/core/stores/windows'
import DockIcon from '@/components/desktop/dock/DockIcon.vue'
import DockContextMenu from '@/components/desktop/dock/DockContextMenu.vue'
import type { Window } from '@/types'
import { onMounted, ref } from 'vue'

const windows = useWindowStore()

const thisDock = ref<HTMLElement | null>(null)
const hidden = ref(true)
const currentMousePosition = ref({ x: 0, y: 0 })

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
})

const onMouseMove = (event: MouseEvent) => {
  currentMousePosition.value = { x: event.clientX, y: event.clientY }
  const yCutOff = window.innerHeight - 100

  if (currentMousePosition.value.y < yCutOff) {
    setTimeout(() => {
      if (currentMousePosition.value.y < yCutOff) {
        hidden.value = true
      }
    }, 1000)
  } else if (windows.windows.length > 0) {
    hidden.value = false
  }
}
</script>

<template>
  <div class="dock-container">
    <div class="dock" ref="thisDock" :class="{ hidden: hidden }">
      <DockIcon v-for="window in windows.windows" :key="window.id" :window="window" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dock-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  z-index: 100;

  .dock {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    transition: transform 0.2s;

    &.hidden {
      transform: translateY(120%);
    }
  }
}
</style>
