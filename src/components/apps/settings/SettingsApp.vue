<script setup lang="ts">
import { useSettingsStore } from '@/core/stores/settings'
import { ref } from 'vue'

const settings = useSettingsStore()

const availableWallpapers = ref([
  'sweet-1.png',
  'sweet-2.png',
  'sweet-3.png',
  'sweet-4.png',
  'arch-btw.png',
  'wave.jpg',
  'milky-way.jpg'
])

const fancifyName = (name: string) => {
  return name.replace('.png', '').replace('.jpg', '').replace('-', ' ')
}

const changeLocale = () => {
  const newLocale = settings.locale === 'fr' ? 'en' : 'fr'
  settings.locale = newLocale
}
</script>

<template>
  <div class="settings-app">
    <h1>Settings</h1>

    <div class="settings-section">
      <h2>{{ $t('settings.wallpaper') }}</h2>
      <p>{{ $t('settings.changeWallpaper') }}</p>

      <div class="wallpaper-select">
        <div
          v-for="wallpaper in availableWallpapers"
          :key="wallpaper"
          class="wallpaper-option"
          :class="{ selected: settings.wallpaperPath === wallpaper }"
          @click="settings.wallpaperPath = wallpaper">
          <img :src="'wallpapers/' + wallpaper" :alt="wallpaper" />
          <p>
            {{ fancifyName(wallpaper) }}
          </p>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <h2>
        {{ $t('settings.language') }}
      </h2>
      <p>{{ $t('settings.changeLanguage') }}</p>

      <div class="lang-select" @click="changeLocale">
        <span class="flag" :class="{ selected: settings.locale === 'fr' }">🇫🇷</span>
        <span>/</span>
        <span class="flag" :class="{ selected: settings.locale === 'en' }">🇨🇦</span>
      </div>
    </div>

    <div class="settings-section">
      <h2>Autre</h2>

      <div>
        <input type="checkbox" v-model="settings.dontShowWelcomeAtStartup" />
        <span> {{ $t('settings.dontShowWelcomeAtStartup') }} </span>
      </div>

      <div>
        <input type="checkbox" v-model="settings.shouldDockHide" />
        <span> {{ $t('settings.hideDock') }} </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lang-select {
  display: flex;
  gap: 10px;
  cursor: pointer;
  user-select: none;

  font-size: 24px;

  .flag {
    filter: grayscale(1);
    transition: 0.2s;

    &.selected {
      filter: grayscale(0);
      transform: scale(1.2);
    }
  }
}

.settings-app {
  color: white;
  background-color: rgba(26, 41, 41, 0.7);
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  .settings-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.wallpaper-select {
  display: flex;
  gap: 10px;

  .wallpaper-option {
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 5px;
    width: 100px;

    p {
      text-align: center;
    }

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 5px;
    }

    &.selected {
      border-color: white;
    }
  }
}

input[type='checkbox'] {
  transform: scale(1.5);
  margin-right: 10px;
}
</style>
