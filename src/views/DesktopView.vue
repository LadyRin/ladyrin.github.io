<script setup lang="ts">
import TaskBar from '@/components/TaskBarComponent.vue'
import WindowManager from '@/components/WindowManagerComponent.vue'
</script>

<template>
  <main>
    <WindowManager id="window-manager" />

    <TaskBar id="task-bar" />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  height: 100vh;

  #window-manager {
    flex: 1;
  }

  #task-bar {
    flex: 0;
  }
}
</style>
