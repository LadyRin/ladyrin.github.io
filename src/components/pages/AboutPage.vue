<script setup lang="ts">
import type { Language } from '@/types'
import { onMounted, ref } from 'vue'
import LanguageBar from '../utils/LanguageBar.vue'

const totalHours = ref('Loading...')
const dailyAverage = ref('Loading...')

const emit = defineEmits({
  openPage: (path: string) => true
})

const openPage = (path: string) => {
  emit('openPage', path)
}

const secondsToReadable = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${hours}hrs ${minutes}min`
}

const calcAge = () => {
  const today = new Date()
  const bday = new Date(2003, 4, 9)
  let age = today.getFullYear() - bday.getFullYear()
  const m = today.getMonth() - bday.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
    age--
  }
  return age
}

const languages = ref<Language[]>([])

const fetchWakatime = () => {
  fetch(
    'https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/799796cc-7c0f-4814-832d-cec25324fcb9.json'
  )
    .then((response) => response.json())
    .then((data) => {
      totalHours.value = data.data.grand_total.human_readable_total
      dailyAverage.value = data.data.grand_total.human_readable_daily_average
    })
    .then(() => {
      fetch(
        'https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/1ff55c75-beed-49c4-9fe4-84a9f2a94aa2.json'
      )
        .then((response) => response.json())
        .then((data) => {
          languages.value = data.data.map((language: any) => ({
            name: language.name,
            text: language.text,
            percent: language.percent,
            seconds: language.total_seconds,
            color: language.color
          }))
        })
        .then(() => {
          const others: Language = {
            name: 'Others',
            text: 'Others',
            percent: 0,
            seconds: 0,
            color: '#000000'
          }
          languages.value.forEach((language: Language) => {
            if (language.percent < 2) {
              others.percent += language.percent
              others.seconds += language.seconds
            }
          })

          others.percent = Math.round(others.percent * 100) / 100

          languages.value = languages.value.filter((language: Language) => language.percent >= 2)
          others.text = secondsToReadable(others.seconds)
          languages.value.push(others)
        })
    })
}

onMounted(() => {
  fetchWakatime()
})
</script>

<template>
  <div class="container" id="about-page">
    <nav>
      <ul>
        <li>
          <span @click="openPage('?path=/home/shark/Desktop/About.html')">
            {{ $t('about.navAbout') }}
          </span>
        </li>
        <li>
          <span @click="openPage('?path=/home/shark/Documents/Projects.html')">
            {{ $t('about.navProjects') }}
          </span>
        </li>
        <li>
          <span @click="openPage('?path=/home/shark/Documents/Contact.html')">
            {{ $t('about.navContact') }}
          </span>
        </li>
        <li>
          <a href="https://github.com/LadyRin" target="_blank">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              class="octicon octicon-mark-github v-align-middle color-fg-default">
              <path
                fill="#e0e1dd"
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>

    <main>
      <div class="wrapper">
        <h1>{{ $t('about.title') }}</h1>

        <div class="intro">
          <p v-html="$t('about.intro', { age: calcAge() })" />
        </div>

        <h2>{{ $t('about.skillsTitle') }} :</h2>

        <div class="skills">
          <div>
            <h3>{{ $t('about.languages') }}</h3>
            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>C et C++</li>
              <li>Python</li>
              <li>HTML / CSS</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>SQL (PostgreSQL & Oracle)</li>
            </ul>
          </div>

          <div>
            <h3>{{ $t('about.frameworks') }}</h3>
            <ul>
              <li>Django</li>
              <li>Vue.js</li>
              <li>Symfony</li>
              <li>API Platform</li>
              <li>OpenGL</li>
            </ul>
          </div>

          <div>
            <h3>{{ $t('about.tools') }}</h3>
            <ul>
              <li>Git</li>
              <li>Linux</li>
              <li>Unity</li>
              <li>Docker</li>
              <li>{{ $t('about.tongues') }}</li>
              <li>{{ $t('about.projectManagement') }}</li>
            </ul>
          </div>
        </div>

        <div class="wakatime-header">
          <h2>
            {{ $t('about.wakatimeStats') }}
            <a href="https://wakatime.com/" target="_blank">Wakatime</a>)
          </h2>
          <button @click="fetchWakatime" id="refresh-button">
            <img src="@/assets/img/refresh.svg" alt="" />
          </button>
        </div>

        <h4>{{ $t('about.codingHours') }} : {{ totalHours }}</h4>
        <h4>{{ $t('about.dailyAverage', [dailyAverage]) }}</h4>

        <div class="languages">
          <LanguageBar v-for="language in languages" :language="language" :key="language.name" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/pages.css';

.wakatime-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

#about-page {
  min-height: 100%;
}

#refresh-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.6);
  }
}

.languages {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
}

.wakatime {
  align-self: flex-start;
  background-color: var(--color2);
  padding: 10px;
  border-radius: 10px;
}

.wakatime-embed {
  width: 100%;
  height: 100%;
  outline: none;
}
</style>
