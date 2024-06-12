import type { App } from '@/types'
import { defineStore } from 'pinia'
import { markRaw, ref } from 'vue'
import Dolphin from '@/components/apps/dolphin/DolphinApp.vue'
import Console from '@/components/apps/console/ConsoleApp.vue'
import Firefox from '@/components/apps/firefox/FirefoxApp.vue'
import Welcome from '@/components/apps/welcome/WelcomeApp.vue'
import Settings from '@/components/apps/settings/SettingsApp.vue'
import Minesweeper from '@/components/apps/minesweeper/MinesweeperApp.vue'

export const useAppStore = defineStore('apps', () => {
  const appsByFiletype: Record<string, string> = {
    html: 'Firefox',
    vue: 'Firefox',
    dir: 'Dolphin File Manager',
    console: 'Console',
    welcome: 'Welcome',
    settings: 'Settings',
    minesweeper: 'Minesweeper'
  }

  const apps = ref<App[]>([
    { name: 'Console', icon: 'console.svg', component: markRaw(Console) },
    { name: 'Dolphin File Manager', icon: 'folder-cyan.svg', component: markRaw(Dolphin) },
    { name: 'Firefox', icon: 'firefox.svg', component: markRaw(Firefox) },
    { name: 'Welcome', icon: 'info.svg', component: markRaw(Welcome) },
    { name: 'Settings', icon: 'settings.svg', component: markRaw(Settings) },
    { name: 'Minesweeper', icon: 'mines.svg', component: markRaw(Minesweeper) }
  ])

  function get(name: string): App | undefined {
    return apps.value.find((app) => app.name === name)
  }

  function findByFileType(fileType: string): App | undefined {
    return get(appsByFiletype[fileType])
  }

  return { apps, get, findByFileType }
})
