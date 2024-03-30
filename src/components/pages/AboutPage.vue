<script setup lang="ts">
import type { Language } from '@/types';
import { onMounted, ref } from 'vue';
import LanguageBar from '../utils/LanguageBar.vue';

const totalHours = ref("Loading...");

const emit = defineEmits({
    openPage: (path: string) => true
});

const openPage = (path: string) => {
    emit('openPage', path);
};

const secondsToReadable = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}hrs ${minutes}min`;
};

const languages = ref<Language[]>([]);

onMounted(() => {
    fetch('https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/799796cc-7c0f-4814-832d-cec25324fcb9.json')
        .then(response => response.json())
        .then(data => {
            totalHours.value = data.data.grand_total.human_readable_total;
        }).then(() => {
            fetch('https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/1ff55c75-beed-49c4-9fe4-84a9f2a94aa2.json')
                .then(response => response.json())
                .then(data => {
                    languages.value = data.data.map((language: any) => ({
                        name: language.name,
                        text: language.text,
                        percent: language.percent,
                        seconds: language.total_seconds,
                        color: language.color,
                    }));
                }).then(() => {
                    const others: Language = {
                        name: "Others",
                        text: "Others",
                        percent: 0,
                        seconds: 0,
                        color: "#000000",
                    };
                    languages.value.forEach((language: Language) => {
                        if (language.percent < 2) {
                            others.percent += language.percent;
                            others.seconds += language.seconds;
                        }
                    });

                    others.percent = Math.round(others.percent * 100) / 100;

                    languages.value = languages.value.filter((language: Language) => language.percent >= 2);
                    others.text = secondsToReadable(others.seconds);
                    languages.value.push(others);
                });
        });
});

</script>

<template>
    <div class="container">

        <nav>
            <ul>
                <li>
                    <span @click="openPage('?path=/home/user/Desktop/À propos.html')">
                        À propos
                    </span>
                </li>
                <li>
                    <span @click="openPage('?path=/home/user/Documents/Projets.html')">
                        Projets
                    </span>
                </li>
                <li>
                    <span @click="openPage('?path=/home/user/Documents/Contact.html')">
                        Contact
                    </span>
                </li>
                <li>
                    <a href="https://github.com/LadyRin" target="_blank">
                        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
                            data-view-component="true"
                            class="octicon octicon-mark-github v-align-middle color-fg-default">
                            <path fill="#e0e1dd"
                                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>

        <main>
            <div class="wrapper">
                <h1>À propos de moi</h1>

                <div class="intro">
                    <p>
                        Bonjour, je m'appelle Alexandre Letellier, j'ai 20 ans et je suis actuellement étudiant
                        en 3ème année de BUT informatique à l'IUT de Montpellier-Sète. J'ai commencé à apprendre
                        la programmation à l'âge de 12 ans, dans l'objectif de créer des <i>mods</i> pour le jeu
                        vidéo Minecraft. Depuis, je n'ai pas arrêté de m'intéresser à l'informatique et à la
                        programmation. J'ai notamment appris à utiliser des moteurs de jeu comme Unity pour
                        réaliser des prototypes de jeu. Grâce à mes études, j'ai pu approfondir mes
                        connaissances en informatique et en programmation, et ce dans des domaines variés comme
                        le développement web, le développement logiciel, la gestion de bases de données, etc.
                    </p>
                </div>

                <h2>Mes compétences</h2>

                <div class="skills">
                    <div>
                        <h3>Langages de programmation</h3>
                        <ul>
                            <li>Java</li>
                            <li>C#</li>
                            <li>C et C++</li>
                            <li>Python</li>
                            <li>HTML / CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>SQL (PostgreSQL et Oracle)</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Frameworks et bibliothèques</h3>
                        <ul>
                            <li>Symfony</li>
                            <li>VueJS</li>
                            <li>API Platform</li>
                            <li>OpenGL</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Outils et autres compétences</h3>
                        <ul>
                            <li>Git</li>
                            <li>Linux</li>
                            <li>Unity</li>
                            <li>Docker</li>
                            <li>Anglais professionnel</li>
                            <li>Gestion de projet / Méthodes Agiles</li>
                        </ul>
                    </div>
                </div>

                <h2>
                    Quelques stats (fournies par <a href="https://wakatime.com/" target="_blank">Wakatime</a>)
                </h2>

                <h3>Heures de code (Septembre 2023 - Aujourd'hui) : {{ totalHours }}</h3>

                <div class="languages">
                    <LanguageBar v-for="language in languages" :language="language" :key="language.name" />

                </div>

                <h3>Activité</h3>

                <figure class="wakatime">
                    <embed class="wakatime-embed"
                        src="https://wakatime.com/share/@b0186d72-d67e-4efc-b5bf-3e016c9b83d9/44c684ad-791d-4d1c-8dfb-dc78867276c6.svg">
                </figure>
            </div>
        </main>



    </div>
</template>

<style scoped>
@import "@/assets/pages.css";

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