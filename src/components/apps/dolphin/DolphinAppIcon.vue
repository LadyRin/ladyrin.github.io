<script setup lang="ts">
import type { FSNode } from '@/core/filesystem'
import { FiletypeIcons } from '@/types'

defineProps<{
  node: FSNode
}>()

defineEmits(['openApp'])
</script>

<template>
  <div class="app-icon" @dblclick="$emit('openApp')">
    <img :src="'icons/' + FiletypeIcons[node.fileType]" alt="icon" draggable="false" />
    <p>{{ node.name }}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/appicon.scss';
</style>
