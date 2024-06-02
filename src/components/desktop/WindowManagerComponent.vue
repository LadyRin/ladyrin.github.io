<script setup lang="ts">
import { useWindowStore } from '@/core/stores/windows'
import Window from '@/components/apps/WindowComponent.vue'
import { onMounted } from 'vue'
import { useAppStore } from '@/core/stores/apps'

const store = useWindowStore()
const apps = useAppStore()

onMounted(() => {
  const welcomeApp = apps.get('Welcome')
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const windowWidth = 960
  const windowHeight = 640

  const x = (viewportWidth - windowWidth) / 2
  const y = (viewportHeight - windowHeight) / 2
  if (welcomeApp) store.launchAppAt(welcomeApp, x, y)
})
</script>

<template>
  <div class="window-manager">
    <Window
      v-for="(window, index) in store.windows"
      :key="window.id"
      v-model="store.windows[index]" />
  </div>
</template>

<style scoped lang="scss">
div {
  background-color: darkslateblue;
  height: auto;
}
</style>
@/core/stores/windows
