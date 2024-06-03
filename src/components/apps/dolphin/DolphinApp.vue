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
  history.value.push(workingDirectory.value)
})

const fs = new FSExplorer()
const history = ref<FSDirectory[]>([])
const historyIndex = ref(0)
const apps = useAppStore()
const windows = useWindowStore()
const workingDirectory = fs.workingDirectory
const nodes = computed(() => workingDirectory.value.children)
const selected = ref('')

const changeWorkDir = (newWorkDir: FSDirectory) => {
  console.log(newWorkDir.name)
  if (newWorkDir === workingDirectory.value) return

  workingDirectory.value = newWorkDir

  if (historyIndex.value != history.value.length - 1) {
    history.value = history.value.slice(0, historyIndex.value + 1)
  }

  history.value.push(newWorkDir)
  historyIndex.value++
}

const goBack = () => {
  if (historyIndex.value > 0) {
    historyIndex.value--
    workingDirectory.value = history.value[historyIndex.value]
  }
}

const goForward = () => {
  if (historyIndex.value < history.value.length - 1) {
    historyIndex.value++
    workingDirectory.value = history.value[historyIndex.value]
  }
}

const openApp = (node: FSNode) => {
  if (node instanceof FSDirectory) {
    changeWorkDir(node)
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
        <button class="material-symbols-outlined" @click="goBack" :disabled="historyIndex <= 0">
          arrow_back
        </button>
        <button
          class="material-symbols-outlined"
          @click="goForward"
          :disabled="historyIndex == history.length - 1">
          arrow_forward
        </button>
      </div>

      <div class="path">
        <template v-for="folder in fs.pathToWorkingDirectory" :key="folder.name">
          <button @click="changeWorkDir(folder)">{{ folder.name }}</button>
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

<style scoped lang="scss">
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

  .arrows {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
      padding: 2px;
      color: #fff;
      text-shadow: #000 0px 0px 5px;
      transition: all 0.1s;
      user-select: none;
      border: none;
      background-color: transparent;
      border-right: 1px solid rgb(42, 56, 70);

      &:hover:not(:disabled) {
        background-color: #374e70;
        cursor: pointer;
      }

      &:active:not(:disabled) {
        background-color: #2c3c54;
      }

      &:disabled {
        color: #666;
        cursor: default;
      }
    }
  }

  .path {
    width: calc(100% - 40px);
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    button {
      font-size: 1.2rem;
      padding: 2px;
      color: #fff;
      text-shadow: #000 0px 0px 5px;
      transition: all 0.1s;
      user-select: none;
      border: none;
      background-color: transparent;
      border-radius: 5px;

      &:hover {
        background-color: #374e70;
        cursor: pointer;
      }
    }

    span {
      font-size: 1.2rem;
      color: #fff;
      text-shadow: #000 0px 0px 5px;
      user-select: none;
    }
  }
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

  &.empty {
    justify-content: stretch;
    align-items: stretch;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    color: #fff;
  }
}
</style>
