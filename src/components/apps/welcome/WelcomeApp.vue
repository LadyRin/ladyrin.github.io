<template>
  <div class="welcome-app">
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
    <p>
      De ce fait, il est recommandé de visiter ce site sur un ordinateur plutôt que sur un appareil
      mobile.
    </p>
    <p>Bonne visite ^_^</p>
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
}

h1 {
  font-size: 72px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  background: -webkit-linear-gradient(60deg, rgba(249, 201, 98), rgba(243, 75, 243));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  background: -webkit-linear-gradient(60deg, rgba(249, 201, 98), rgba(243, 75, 243));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  text-align: center;
  margin: 20px;
}
</style>
