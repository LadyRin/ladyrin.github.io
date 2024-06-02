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
</script>

<template>
  <div class="settings-app">
    <h1>Settings</h1>

    <div class="settings-section">
      <h2>Fond d'écran</h2>
      <p>Changez le fond d'écran du bureau</p>

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
      <h2>Autre</h2>

      <div>
        <input type="checkbox" v-model="settings.dontShowWelcomeAtStartup" />
        <span> Ne pas afficher l'écran de bienvenue au démarrage </span>
      </div>

      <div>
        <input type="checkbox" v-model="settings.shouldDockHide" />
        <span> Cacher le dock automatiquement </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
