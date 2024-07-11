import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export const useSettingsStore = defineStore('settings', () => {
  const i18n = useI18n()

  function getValue(key: string, defaultValue: any) {
    const value = localStorage.getItem(key)
    if (value === null) {
      return defaultValue
    }
    return JSON.parse(value)
  }

  const wallpaperPath = ref<string>(getValue('wallpaperPath', 'sweet-1.png'))

  const shouldDockHide = ref<boolean>(getValue('shouldDockHide', true))

  const dontShowWelcomeAtStartup = ref<boolean>(getValue('dontShowWelcomeAtStartup', false))

  const locale = ref<string>(getValue('locale', 'fr'))

  i18n.locale.value = locale.value

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

  watch(locale, (value) => {
    i18n.locale.value = value
    localStorage.setItem('locale', JSON.stringify(value))
  })

  return { locale, wallpaperPath, shouldDockHide, dontShowWelcomeAtStartup }
})
