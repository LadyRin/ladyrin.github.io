<script setup lang="ts">
import { AppWindowState, type AppInfo } from '@/types';
import { ref, onMounted } from 'vue'

const grabbed = ref(false);

const props = defineProps({
  app: {
    type: Object as () => AppInfo,
    required: true
  },
  zIndex: Number,
  appearAt: {
    type: Object as () => { x: number, y: number },
    default: () => ({ x: 100, y: 100 })
  }
});

const positionX = ref(props.appearAt.x);
const positionY = ref(props.appearAt.y);

const emit = defineEmits([
  'close',
  'placeOnTop',
  'maximize',
  'minimize'
]);

onMounted(() => {
  window.addEventListener('mousemove', moveWindow);
  window.addEventListener('mouseup', stopMoveWindow);
});

const moveWindow = (e: MouseEvent) => {
  if (grabbed.value) {
    positionX.value += e.movementX;
    positionY.value += e.movementY;
  }
}

const stopMoveWindow = () => {
  grabbed.value = false;
}

const startMoveWindow = () => {
  grabbed.value = true;
}

const maximize = () => {
  emit('maximize', props.app);
  emit('placeOnTop');
}

const minimize = () => {
  emit('minimize', props.app);
  emit('placeOnTop');
}

</script>

<template>
  <div class="window" 
  :style="{ '--positionX': positionX + 'px', '--positionY': positionY + 'px', 'z-index': zIndex }" 
  :class="{'maximized': app.windowState==AppWindowState.MAXIMIZED, 'minimized': app.windowState==AppWindowState.MINIMIZED, 'grabbed': grabbed}"
  @mousedown="$emit('placeOnTop')">
    <div class="window-header" @mousedown="startMoveWindow" @mouseup="stopMoveWindow">
      <div class="window-title">
        <img :src="'icons/' + app.icon" alt="icon" draggable="false" />
        <p>{{ app.name }}</p>
      </div>
      <div class="window-buttons">
        <div class="window-button minimize" @click="minimize">_</div>
        <div class="window-button maximize" @click="maximize">&#9633;</div>
        <div class="window-button close" @click="$emit('close')">X</div>
      </div>
    </div>
    <div class="window-content">
      <slot></slot>
    </div>

  </div>
</template>

<style scoped>
.window {
  position: absolute;
  width: 800px;
  height: 600px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #000;
  overflow: hidden;
  z-index: 1;
  top: var(--positionY);
  left: var(--positionX);
  transition: all 0.1s ease-in-out;
}

.window.grabbed {
  cursor: grab;
  transition: none;
}

.window.maximized {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.window.minimized {
  width: 0;
  height: 0;
  bottom: 0;
  left: 0;
  top: 100vh;
}


.window-header {
  width: 100%;
  height: 30px;
  background-color: #446da3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.window-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  margin-left: 4px;
}

.window-title img {
  width: 20px;
  height: 20px;
}

.window-title p {
  margin: 0;
  font-size: 1rem;
  color: #fff;
  text-shadow: #000 0px 0px 5px;
}

.window-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  margin-right: 4px;
}

.window-button {
  width: 20px;
  height: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  user-select: none;
}

.window-button:hover {
  background-color: #aaa;
}


.window-content {
  width: 100%;
  height: calc(100% - 30px);
  background-color: #fff;
}


</style>
