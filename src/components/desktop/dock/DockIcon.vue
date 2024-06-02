<script setup lang="ts">
import { WindowState, type Window } from '@/types'
import { useWindowStore } from '@/core/stores/windows'
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps<{ window: Window }>()

const windows = useWindowStore()
const thisIcon = ref<HTMLElement | null>(null)
const scale = ref(1)
const margins = ref(0.5)

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onMouseMove)
})

const onMouseMove = (event: MouseEvent) => {
  function lerp(a: number, b: number, alpha: number) {
    return a + alpha * (b - a)
  }
  const { dx, dy } = distanceToCursor(event)
  const maxDistance = 200
  const minDistance = 50
  const distance = Math.sqrt(dx ** 2 + dy ** 2)

  const alpha = Math.min(1, Math.max(0, (distance - maxDistance) / (minDistance - maxDistance)))
  scale.value = lerp(1, 1.5, alpha)
  margins.value = lerp(0.5, 1, alpha)
}

const distanceToCursor = (event: MouseEvent) => {
  const x = event.clientX
  const y = event.clientY
  const rect = thisIcon.value!.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const dx = x - centerX
  const dy = y - centerY
  return { dx, dy }
}
</script>

<template>
  <div
    class="dock-icon"
    ref="thisIcon"
    @click="windows.minimize(window)"
    :class="{ minimized: window.state === WindowState.MINIMIZED }"
    :style="{
      transform: `scale(${scale})`,
      margin: `0 ${margins}rem`,
      marginBottom: `${margins}rem`
    }">
    <img :src="'icons/' + window.app.icon" alt="icon" />
    <div class="tooltip">
      {{ window.app.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.dock-icon {
  width: 40px;
  height: 40px;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: filter 0.2s;

  &.minimized {
    filter: grayscale(75%);
  }

  img {
    width: 100%;
    height: 100%;
  }

  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .tooltip {
    opacity: 1;
  }

  &:active img {
    transform: scale(0.9);
  }
}
</style>
