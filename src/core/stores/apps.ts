import type { App } from '@/types'
import { defineStore } from 'pinia'
import { markRaw, ref } from 'vue'
import Dolphin from '@/components/apps/dolphin/DolphinApp.vue'
import Console from '@/components/apps/console/ConsoleApp.vue'
import Firefox from '@/components/apps/firefox/FirefoxApp.vue'

export const useAppStore = defineStore('apps', () => {
  const appsByFiletype: Record<string, string> = {
    html: 'Firefox',
    vue: 'Firefox',
    dir: 'Dolphin File Manager',
    console: 'Console'
  }

  const apps = ref<App[]>([
    { name: 'Console', icon: 'console.svg', component: markRaw(Console) },
    { name: 'Dolphin File Manager', icon: 'folder-cyan.svg', component: markRaw(Dolphin) },
    { name: 'Firefox', icon: 'firefox.png', component: markRaw(Firefox) }
  ])

  function get(name: string): App | undefined {
    return apps.value.find((app) => app.name === name)
  }

  function findByFileType(fileType: string): App | undefined {
    return get(appsByFiletype[fileType])
  }

  return { apps, get, findByFileType }
})
