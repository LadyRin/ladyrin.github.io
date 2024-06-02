import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  function getValue(key: string, defaultValue: any) {
    const value = localStorage.getItem(key)
    if (value === null) {
      return defaultValue
    }
    return JSON.parse(value)
  }

  const wallpaperPath = ref<string>(getValue('wallpaperPath', '1.png'))

  const shouldDockHide = ref<boolean>(getValue('shouldDockHide', true))

  const dontShowWelcomeAtStartup = ref<boolean>(getValue('dontShowWelcomeAtStartup', false))

  watch(wallpaperPath, (value) => {
    localStorage.setItem('wallpaperPath', JSON.stringify(value))
  })

  watch(shouldDockHide, (value) => {
    localStorage.setItem('shouldDockHide', JSON.stringify(value))
  })

  watch(dontShowWelcomeAtStartup, (value) => {
    console.log(value)
    localStorage.setItem('dontShowWelcomeAtStartup', JSON.stringify(value))
  })

  return { wallpaperPath, shouldDockHide, dontShowWelcomeAtStartup }
})
