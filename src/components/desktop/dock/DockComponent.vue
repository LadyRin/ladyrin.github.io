<script setup lang="ts">
import { useWindowStore } from '@/core/stores/windows'
import { useSettingsStore } from '@/core/stores/settings'
import DockIcon from '@/components/desktop/dock/DockIcon.vue'
import { onMounted, ref } from 'vue'

const windows = useWindowStore()
const settings = useSettingsStore()

const thisDock = ref<HTMLElement | null>(null)
const currentMousePosition = ref({ x: 0, y: 0 })
const timer = ref(0)
const hidden = () => {
  if (windows.windows.length === 0) return true
  const yCutoff = window.innerHeight - 100
  if (!settings.shouldDockHide) return false

  if (currentMousePosition.value.y > yCutoff) {
    timer.value = 1000
    return false
  } else {
    return timer.value <= 0
  }
}

onMounted(() => {
  document.addEventListener('mousemove', (event) => {
    currentMousePosition.value = { x: event.clientX, y: event.clientY }
  })

  setInterval(() => {
    if (timer.value > 0) timer.value -= 100
  }, 100)
})
</script>

<template>
  <div class="dock-container">
    <div class="dock" ref="thisDock" :class="{ hidden: hidden() }">
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
  pointer-events: none;

  .dock {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    transition: transform 0.2s;
    pointer-events: auto;

    &.hidden {
      transform: translateY(120%);
    }
  }
}
</style>
