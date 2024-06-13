<script setup lang="ts">
import AppIcon from '@/components/desktop/DesktopAppIcon.vue'
import { useSettingsStore } from '@/core/stores/settings'
import { FSExplorer } from '@/core/filesystem'
import { computed, onMounted, ref } from 'vue'

const fs = new FSExplorer().cd('/home/shark/Desktop')
const settings = useSettingsStore()

const workingDirectory = fs.workingDirectory

const selectedIcons = ref<string[]>([])
const isSelecting = ref(false)

onMounted(() => {
  document.addEventListener('mouseup', stopRectangleSelect)
})

const iconBounds = (icon: HTMLElement) => {
  const rect = icon.getBoundingClientRect()
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left
  }
}

const handleIconClick = (e: MouseEvent, name: string) => {
  if (e.ctrlKey) {
    if (selectedIcons.value.includes(name)) {
      selectedIcons.value = selectedIcons.value.filter((icon) => icon !== name)
    } else {
      selectedIcons.value = [...selectedIcons.value, name]
    }
  } else {
    selectedIcons.value = [name]
  }
}

const rect = ref({ startX: 0, startY: 0, endX: 0, endY: 0 })

const startRectangleSelect = (e: MouseEvent) => {
  selectedIcons.value = []
  isSelecting.value = true
  rect.value.startX = e.clientX
  rect.value.startY = e.clientY
  rect.value.endX = e.clientX
  rect.value.endY = e.clientY
}

const updateRectangleSelect = (e: MouseEvent) => {
  if (!isSelecting.value) return
  rect.value.endX = e.clientX
  rect.value.endY = e.clientY

  const icons = document.querySelectorAll('.icon')
  icons.forEach((icon) => {
    const bounds = iconBounds(icon as HTMLElement)
    const iconX = bounds.left
    const iconY = bounds.top
    const iconWidth = bounds.right - bounds.left
    const iconHeight = bounds.bottom - bounds.top

    if (
      iconX < Math.max(rect.value.startX, rect.value.endX) &&
      iconX + iconWidth > Math.min(rect.value.startX, rect.value.endX) &&
      iconY < Math.max(rect.value.startY, rect.value.endY) &&
      iconY + iconHeight > Math.min(rect.value.startY, rect.value.endY)
    ) {
      selectedIcons.value = [...selectedIcons.value, (icon as HTMLElement).dataset.name!]
    } else {
      selectedIcons.value = selectedIcons.value.filter(
        (iconName) => iconName !== (icon as HTMLElement).dataset.name
      )
    }
  })
}

const stopRectangleSelect = () => {
  isSelecting.value = false
}

const wallpaperURL = computed(() => {
  const wallpaperPath = settings.wallpaperPath
  return `url('wallpapers/${wallpaperPath}')`
})
</script>

<template>
  <div
    class="icons-wrapper"
    @mousedown="startRectangleSelect"
    @mousemove="updateRectangleSelect"
    @mouseup="stopRectangleSelect"
    :style="{ backgroundImage: wallpaperURL }">
    <AppIcon
      class="icon"
      :data-name="node.name"
      :class="{ selected: selectedIcons.includes(node.name) }"
      @click.stop="handleIconClick($event, node.name)"
      v-for="node in workingDirectory.children"
      :key="node.name"
      :node="node" />
  </div>
  <div
    class="rectangle-select"
    :style="{
      display: isSelecting ? 'block' : 'none',
      left: Math.min(rect.startX, rect.endX) + 'px',
      top: Math.min(rect.startY, rect.endY) + 'px',
      width: Math.abs(rect.endX - rect.startX) + 'px',
      height: Math.abs(rect.endY - rect.startY) + 'px'
    }"></div>
</template>

<style scoped>
.icons-wrapper {
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}

.rectangle-select {
  position: absolute;
  background-color: rgba(255, 103, 247, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.icon {
  opacity: 0;
  animation: appear 0.4s forwards;
  animation-delay: var(--delay);
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  99% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
