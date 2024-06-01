<script setup lang="ts">
import { useWindowStore } from '@/core/stores/windows'
import Window from '@/components/apps/WindowComponent.vue'

const store = useWindowStore()
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
