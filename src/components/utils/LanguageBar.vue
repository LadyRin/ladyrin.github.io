<script setup lang="ts">
import { ref } from 'vue'
import type { Language } from '@/types'

const props = defineProps({
  language: {
    type: Object as () => Language,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <span> {{ language.name }} - {{ language.text }} - {{ language.percent }}% </span>

    <div class="bar">
      <div
        class="progress"
        :style="{
          width: language.percent + '%',
          backgroundColor: language.color
        }"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
}

.bar {
  width: 100%;
  height: 10px;
  background-color: var(--color2);
  border-radius: 5px;
}

.progress {
  height: 100%;
  border-radius: 5px;
}
</style>
