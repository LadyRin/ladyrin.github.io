<script setup lang="ts">
import { useSettingsStore } from '@/core/stores/settings'

defineProps({
  mobile: Boolean
})

const settings = useSettingsStore()
const changeLocale = () => {
  const newLocale = settings.locale === 'fr' ? 'en' : 'fr'
  settings.locale = newLocale
}
</script>
<template>
  <div class="welcome-app" :class="{ mobile }">
    <h1>{{ $t('welcome.title') }}</h1>
    <p>
      {{ $t('welcome.paragraph1') }}
    </p>
    <p>
      {{ $t('welcome.paragraph2') }}
    </p>
    <template v-if="mobile">
      <p>
        {{ $t('welcome.mobile1') }}
      </p>
      <p>
        {{ $t('welcome.mobile2') }}
      </p>
    </template>
    <template v-else>
      <p>{{ $t('welcome.happyBrowsing') }}</p>
      <div class="dont-show-again">
        <input type="checkbox" id="dont-show-again" v-model="settings.dontShowWelcomeAtStartup" />
        <label for="dont-show-again"
          ><p>
            {{ $t('welcome.dontShowAgain') }}
          </p></label
        >
      </div>
    </template>
    <div class="lang-select" @click="changeLocale">
      <span class="flag" :class="{ selected: settings.locale === 'fr' }">🇫🇷</span>
      <span>/</span>
      <span class="flag" :class="{ selected: settings.locale === 'en' }">🇨🇦</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lang-select {
  position: absolute;
  top: 10px;
  right: 10px;
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

.welcome-app {
  position: relative;
  background: linear-gradient(60deg, rgba(249, 201, 98, 0.8), rgba(243, 75, 243, 0.8));
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.mobile {
    justify-content: flex-start;
    padding-top: 40px;

    h1 {
      font-size: 36px;
      text-align: center;
    }

    p {
      font-size: 18px;
      text-align: center;
    }
  }
}

h1 {
  font-size: 72px;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  background: -webkit-linear-gradient(60deg, rgba(249, 201, 98), rgba(243, 75, 243));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
  background: -webkit-linear-gradient(60deg, rgba(249, 201, 98), rgba(243, 75, 243));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  text-align: center;
  margin: 20px;
}

.dont-show-again {
  display: flex;
  align-items: center;

  input {
    transform: scale(1.5);
  }

  label p {
    font-size: 18px;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
    background: -webkit-linear-gradient(60deg, rgba(249, 201, 98), rgba(243, 75, 243));
    -webkit-background-clip: text;
    background-clip: text;
  }
}
</style>
