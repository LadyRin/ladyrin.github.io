<script setup lang="ts">
import TaskBar from '@/components/desktop/TaskBarComponent.vue'
import WindowManager from '@/components/desktop/WindowManagerComponent.vue'
import DesktopComponent from '@/components/desktop/DesktopComponent.vue'
</script>

<template>
  <main>
    <DesktopComponent />
    <WindowManager id="window-manager" />

    <TaskBar id="task-bar" />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  #window-manager {
    flex: 1;
  }

  #task-bar {
    flex: 0;
  }
}
</style>
