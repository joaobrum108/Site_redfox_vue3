<template>
  <div class="content-app">
    <div class="conteudo_title">
      <h1>APLICATIVO REDFOX SAC</h1>
      <p>
        Pague faturas, efetue desbloqueios, consulte sua conta e muito mais<br />
        na palma da sua mão!
      </p>
    </div>

    <div class="conteudo_restante">
      <div class="right_content">
        <img
          class="login-img"
          src="../../assets/login.svg"
          alt="Funcionalidades"
        />
        <p>
          Consulte segunda vias de boleto, efetue<br />
          desbloqueios e pague faturas, tudo na<br />
          palma da sua mão!
        </p>
        <h5>BAIXE AGORA MESMO</h5>
        <div class="app-stores">
          <img class="store-img" src="../../assets/gog.svg" alt="Google Play" />
          <img
            class="store-img"
            src="../../assets/appsot.svg"
            alt="App Store"
          />
        </div>
      </div>
      <div class="content_direita">
        <img
          class="mobile-img"
          src="../../assets/mobile.svg"
          alt="Aplicativo Redfox"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  background-color: rgb(160, 5, 5);
  padding: 2rem;
  box-sizing: border-box;
}

.conteudo_title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 800px;
}

.conteudo_restante {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
}

.right_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 400px;
}

.content_direita {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 3rem;
  margin: 0;
  line-height: 1.2;
}

h5 {
  color: #fff;
  font-size: 1.5rem;
  margin: 1.5rem 0 0.5rem;
}

p {
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0;
}

.mobile-img {
  width: 280px;
  max-width: 100%;
  height: auto;
}

.login-img {
  width: 350px;
  margin-bottom: 1rem;
}

.app-stores {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 1rem;
}

.store-img {
  width: 160px;
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }

  .conteudo_restante {
    flex-direction: column;
    gap: 2rem;
  }

  .mobile-img {
    width: 220px;
  }

  .store-img {
    width: 140px;
  }
}
</style>
