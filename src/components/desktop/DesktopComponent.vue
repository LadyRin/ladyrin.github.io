<script setup lang="ts">
import AppIcon from '@/components/desktop/DesktopAppIcon.vue'
import { useSettingsStore } from '@/core/stores/settings'
import { FSExplorer } from '@/core/filesystem'
import { computed, ref } from 'vue'

const fs = new FSExplorer().cd('/home/shark/Desktop')
const settings = useSettingsStore()

const workingDirectory = fs.workingDirectory

const selectedIcon = ref('')

const wallpaperURL = computed(() => {
  const wallpaperPath = settings.wallpaperPath
  return `url('wallpapers/${wallpaperPath}')`
})
</script>

<template>
  <div class="icons-wrapper" @click="selectedIcon = ''" :style="{ backgroundImage: wallpaperURL }">
    <AppIcon
      class="icon"
      :class="{ selected: selectedIcon === node.name }"
      @click.stop="selectedIcon = node.name"
      v-for="node in workingDirectory.children"
      :key="node.name"
      :node="node" />
  </div>
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
