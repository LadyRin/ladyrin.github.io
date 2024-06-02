<script setup lang="ts">
import { useSettingsStore } from '@/core/stores/settings'

defineProps({
  mobile: Boolean
})

const settings = useSettingsStore()
</script>
<template>
  <div class="welcome-app" :class="{ mobile }">
    <h1>Bienvenue sur SharkOS</h1>
    <p>
      Ceci est mon portfolio numérique, vous pouvez y trouvez mes projets, mes compétences et mes
      informations de contact.
    </p>
    <p>
      Ce site est fait pour ressembler à un système d'exploitation, vous pouvez naviguer entre les
      applications en cliquant sur les icônes du bureau, ou avec la barre des tâches en bas de
      l'écran.
    </p>
    <template v-if="mobile">
      <p>
        Vous semblez être sur un appareil mobile. le site vous est donc inaccessible pour le moment.
        Venez le visiter sur un ordinateur pour une meilleure expérience.
      </p>
      <p v-if="mobile">
        Une version mobile est prévue, mais n'est malheureusement pas encore disponible :/
      </p>
    </template>
    <template v-else>
      <p>Bonne visite ^_^</p>
      <div class="dont-show-again">
        <input type="checkbox" id="dont-show-again" v-model="settings.dontShowWelcomeAtStartup" />
        <label for="dont-show-again"><p>Ne plus afficher cette fenêtre au démarrage</p></label>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.welcome-app {
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
