<script setup lang="ts">
import { ref, onMounted, shallowRef } from 'vue'
import { FileSystemExplorer } from '@/filesystem'

enum Mode {
  HTML,
  VUE
}

const content = ref('')
const currentPath = ref('')
const mode = ref(Mode.HTML)
const currentComponent = shallowRef(null)

const props = defineProps({
  path: {
    type: String,
    required: true
  }
})

const fs = new FileSystemExplorer()

onMounted(() => {
  currentPath.value = props.path
  refresh()

  document.getElementById('iframe')?.addEventListener('load', (e) => {
    e.preventDefault()
    const iframe = e.target as HTMLIFrameElement
    const path = iframe.contentWindow?.location.toString()
    changePath(path)
  })
})

const refresh = () => {
  const file = fs.getFile(currentPath.value)

  if (!file) {
    content.value = 'content/nothing.html'
    return
  }

  const path = file.getPathToContent()
  if (path.endsWith('.vue')) {
    loadVue(path.slice(0, -4))
  } else {
    loadHTML(path)
  }
}

const loadHTML = (path: string) => {
  mode.value = Mode.HTML
  content.value = path
}

const loadVue = (path: string) => {
  mode.value = Mode.VUE

  import(`../pages/${path}.vue`)
    .then((module) => {
      currentComponent.value = module.default
    })
    .catch((error) => {
      console.error(error)
      mode.value = Mode.HTML
      content.value = 'content/nothing.html'
    })
}

const changePath = (newPath: string | undefined) => {
  if (!newPath) return

  const decodedPath = decodeURI(newPath)

  const filePath = decodedPath.split('?path=')[1]
  console.log(filePath)
  if (!filePath) return

  currentPath.value = filePath
  refresh()
}
</script>

<template>
  <div class="firefox">
    <div class="header">
      <div class="refresh" @click="refresh">
        <img src="@/assets/refresh.svg" alt="Start Button" draggable="false" />
      </div>
      <div class="url">
        <input type="text" v-model="currentPath" @keyup.enter="refresh" />
      </div>
    </div>

    <div class="content" :style="{ overflow: mode === Mode.HTML ? 'hidden' : 'auto' }">
      <iframe id="iframe" :src="content" title="page" v-show="mode === Mode.HTML"> </iframe>

      <component :is="currentComponent" v-if="mode === Mode.VUE" @openPage="changePath" />
    </div>
  </div>
</template>

<style scoped>
.firefox {
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
}

.firefox.waiting {
  cursor: wait;
}

.firefox .content {
  width: 100%;
  height: 100%;
  position: relative;
}

.firefox .content iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.firefox .header {
  width: 100%;
  height: 40px;
  background: #1f223d;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 0 5px;
  box-sizing: border-box;
}

.firefox .header .refresh {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
}

.firefox.waiting .header .refresh {
  cursor: wait;
}

.firefox .header .refresh img {
  width: 28px;
  height: 28px;
}

.firefox .header .refresh:hover {
  background: #423851;
}

.firefox .header .url {
  width: calc(100% - 30px);
  height: 30px;
  background: #363a59;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 0 5px;
  box-sizing: border-box;
  border-radius: 5px;
}

.firefox .header .url input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  color: white;
  font-weight: 500;
  background: transparent;
}
</style>
