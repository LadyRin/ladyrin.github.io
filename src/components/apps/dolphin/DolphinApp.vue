<script setup lang="ts">
import { FSDirectory, FSExplorer, type FSNode } from '@/core/filesystem'
import { useAppStore } from '@/core/stores/apps'
import { useWindowStore } from '@/core/stores/windows'
import { computed, onMounted, ref } from 'vue'
import DolphinAppIcon from '@/components/apps/dolphin/DolphinAppIcon.vue'

const props = defineProps<{
  args: FSDirectory
}>()

onMounted(() => {
  workingDirectory.value = props.args
})

const fs = new FSExplorer().cd('/home/shark/Desktop')

const apps = useAppStore()
const windows = useWindowStore()
const workingDirectory = fs.workingDirectory
const nodes = computed(() => workingDirectory.value.children)
const selected = ref('')

const openApp = (node: FSNode) => {
  if (node instanceof FSDirectory) {
    workingDirectory.value = node
    return
  }

  const app = apps.findByFileType(node.fileType)
  if (app) {
    windows.launchApp(app, node)
  }
}
</script>

<template>
  <div class="dolphin-file-manager">
    <div class="header">
      <div class="arrows">
        <button id="previous">&lt;</button>
        <button id="next">&gt;</button>
      </div>

      <div class="path">
        <template v-for="folder in fs.pathToWorkingDirectory" :key="folder.name">
          <span @click="workingDirectory = folder">{{ folder.name }}</span>
          <span v-if="folder !== workingDirectory">/</span>
        </template>
      </div>
    </div>

    <div class="content" :class="{ empty: nodes.length == 0 }" @click="selected = ''">
      <p v-if="nodes.length == 0">This folder is empty</p>
      <DolphinAppIcon
        class="icon"
        v-else
        v-for="node in nodes"
        :key="node.name"
        :node="node"
        :class="{ selected: selected == node.name }"
        @click.stop="selected = node.name"
        @open-app="openApp(node)" />
    </div>
  </div>
</template>

<style scoped>
.dolphin-file-manager {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}

.header {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(26, 23, 46, 0.9);
  border-bottom: 1px solid rgb(42, 56, 70);
}

.path span {
  padding: 2px;
  color: #fff;
  text-shadow: #000 0px 0px 5px;
  transition: all 0.1s;
  user-select: none;
}

.path span:hover {
  background-color: #374e70;
  cursor: pointer;
}

.header .parent-folder {
  width: 35px;
  height: 35px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  text-shadow: #000 0px 0px 5px;
  border-radius: 5px;
  background-color: #00000025;
  transition: all 0.2s;
}

.header .parent-folder:hover {
  background-color: #00000050;
}

.header .path {
  width: calc(100% - 40px);
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.header .path p {
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
  text-shadow: #000 0px 0px 5px;
}

.content {
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  background: rgba(26, 23, 46, 0.75);
  padding: 8px;
  overflow-y: auto;

  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 8px;
}

.content.empty {
  justify-content: stretch;
  align-items: stretch;
}

.content p {
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
}
</style>
