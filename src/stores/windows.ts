import { WindowState, type AppInfo, type WindowInfo } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppsStore = defineStore('windows', () => {
  const windows = ref<WindowInfo[]>([])

  function launchApp(app: AppInfo) {
    const id = windows.value.length
    windows.value.push({
      id,
      app,
      title: app.name,
      x: 100,
      y: 100,
      zIndex: 0,
      width: 800,
      height: 600,
      state: WindowState.NORMAL
    })
  }

  function killApp(id: number) {
    windows.value.splice(id, 1)
  }

  return {
    windows,
    launchApp,
    killApp
  }
})
