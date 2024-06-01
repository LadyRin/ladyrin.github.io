<script setup lang="ts">
import { ref, onMounted, shallowRef, onBeforeUnmount } from 'vue'
import { FSExplorer, FSHTMLFile, FSVueFile } from '@/core/filesystem'

enum Mode {
  HTML,
  VUE
}

const fs = new FSExplorer()
const currentPath = ref('')
const mode = ref(Mode.HTML)
const content = ref('')
const currentComponent = shallowRef<any>(null)

const props = defineProps<{
  args: FSHTMLFile | FSVueFile
}>()

onMounted(() => {
  currentPath.value = fs.getFullPathOfNode(props.args)
  loadContent()

  document.getElementById('iframe')?.addEventListener('load', (e) => {
    e.preventDefault()
    const iframe = e.target as HTMLIFrameElement
    const path = iframe.contentWindow?.location.toString()
    changePath(path)
  })
})

onBeforeUnmount(() => {
  document.getElementById('iframe')?.removeEventListener('load', () => {})
})

const loadContent = () => {
  const file = fs.getFile(currentPath.value)
  if (file instanceof FSHTMLFile) {
    loadHTML(file)
  } else if (file instanceof FSVueFile) {
    loadVue(file)
  } else {
    loadNothing()
  }
}

const loadHTML = (file: FSHTMLFile) => {
  mode.value = Mode.HTML
  content.value = file.path
}

const loadVue = (file: FSVueFile) => {
  mode.value = Mode.VUE

  import(`../../pages/${file.path}.vue`)
    .then((module) => {
      currentComponent.value = module.default
    })
    .catch((error) => {
      console.error(error)
      loadNothing()
    })
}

const loadNothing = () => {
  mode.value = Mode.HTML
  content.value = 'content/nothing.html'
}

const changePath = (newPath: string | undefined) => {
  if (!newPath) return

  const decodedPath = decodeURI(newPath)

  const filePath = decodedPath.split('?path=')[1]
  console.log(filePath)
  if (!filePath) return

  currentPath.value = filePath
  loadContent()
}
</script>

<template>
  <div class="firefox">
    <div class="header">
      <div class="refresh">
        <img src="@/assets/img/refresh.svg" alt="Start Button" draggable="false" />
      </div>
      <div class="url">
        <input type="text" v-model="currentPath" />
      </div>
    </div>

    <div class="content" :style="{ overflow: mode === Mode.HTML ? 'hidden' : 'auto' }">
      <iframe id="iframe" :src="content" title="page" v-show="mode === Mode.HTML"> </iframe>

      <component :is="currentComponent" v-if="mode === Mode.VUE" @open-page="changePath" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.firefox {
  width: 100%;
  height: 100%;
  max-height: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  &.waiting {
    cursor: wait;
  }

  .header {
    width: 100%;
    height: 40px;
    min-height: 40px;
    background: #1f223d;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    padding: 0 5px;
    box-sizing: border-box;

    .url {
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

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 14px;
        color: white;
        font-weight: 500;
        background: transparent;
      }
    }

    .refresh {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: #423851;
      }

      img {
        width: 28px;
        height: 28px;
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
    max-height: 100%;
    position: relative;

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
}
</style>
