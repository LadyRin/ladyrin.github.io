<script setup lang="ts">
import { useWindowStore } from '@/core/stores/windows'
import { useAppStore } from '@/core/stores/apps'
import type { FSNode } from '@/core/filesystem'
import { FiletypeIcons } from '@/types'

const apps = useAppStore()
const windows = useWindowStore()
const props = defineProps<{
  node: FSNode
}>()

const openApp = () => {
  const app = apps.findByFileType(props.node.fileType)
  if (app) {
    windows.launchApp(app, props.node)
  }
}
</script>

<template>
  <div class="app-icon" @dblclick="openApp">
    <img :src="'icons/' + FiletypeIcons[node.fileType]" alt="icon" draggable="false" />
    <p>{{ node.name }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/appicon.scss';
</style>
