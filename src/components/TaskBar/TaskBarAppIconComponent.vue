<script setup lang="ts">
import type { AppInfo } from '@/types'
import { AppWindowState } from '@/types'
import { onMounted, ref } from 'vue'

defineProps({
  app: {
    type: Object as () => AppInfo,
    required: true
  }
})

defineEmits(['close', 'maximize', 'minimize'])

const menuOpen = ref(false)

const openMenu = (e: MouseEvent) => {
  if (e.button == 2) menuOpen.value = !menuOpen.value
}

onMounted(() => {
  document.addEventListener('click', () => {
    menuOpen.value = false
  })
})
</script>

<template>
  <div class="wrapper" oncontextmenu="return false;">
    <div
      class="taskbar-appicon"
      :class="{ minimized: app.windowState == AppWindowState.MINIMIZED }"
      @click="$emit('minimize', app)"
      @auxclick.prevent="openMenu">
      <img :src="'icons/' + app.icon" :alt="app.name" draggable="false" />
    </div>
    <div class="context-menu" :class="{ active: menuOpen }">
      <div class="context-menu-header">
        <img :src="'icons/' + app.icon" :alt="app.name" draggable="false" />
        <p>{{ app.name }}</p>
      </div>
      <div class="context-menu-item" @click="$emit('close', app.pid)">
        <p>X Close</p>
      </div>
      <div class="context-menu-item" @click="$emit('maximize', app)">
        <p v-if="app.windowState != AppWindowState.MAXIMIZED">&#9633; Maximize</p>
        <p v-else>&#9633; Minimize</p>
      </div>
      <div class="context-menu-item" @click="$emit('minimize', app)">
        <p v-if="app.windowState != AppWindowState.MINIMIZED">_ Reduce</p>
        <p v-else>_ Restore</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  user-select: none;
}
.taskbar-appicon {
  width: 45px;
  height: 45px;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff66;
  border-radius: 5px;
  transition: all 0.2s;
}

.taskbar-appicon.minimized {
  background: #ffffff33;
  transform: scale(0.8);
}

.taskbar-appicon:hover {
  background: #ffffffa6;
}

.taskbar-appicon img {
  width: 30px;
  height: 30px;
  user-select: none;
}

.context-menu {
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 200px;
  height: 100px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #000;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
}

.context-menu.active {
  display: flex;
}

.context-menu-header {
  width: 100%;
  height: 30px;
  background-color: #446da3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.context-menu-header img {
  width: 20px;
  height: 20px;
  margin-left: 4px;
}

.context-menu-header p {
  color: #fff;
  font-size: 14px;
  margin-right: 4px;
}

.context-menu-item {
  width: 100%;
  height: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
}

.context-menu-item:hover {
  background-color: #446da3;
}

.context-menu-item img {
  width: 20px;
  height: 20px;
  margin-left: 4px;
}

.context-menu-item p {
  color: #000;
  font-size: 14px;
  margin-left: 6px;
}
</style>
