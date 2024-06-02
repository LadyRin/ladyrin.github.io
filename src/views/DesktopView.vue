<script setup lang="ts">
import WindowManager from '@/components/desktop/WindowManagerComponent.vue'
import DesktopComponent from '@/components/desktop/DesktopComponent.vue'
import DockComponent from '@/components/desktop/dock/DockComponent.vue'
</script>

<template>
  <main>
    <DesktopComponent />
    <WindowManager id="window-manager" />

    <DockComponent id="dock" />
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

  #dock {
    flex: 0;
  }
}
</style>
