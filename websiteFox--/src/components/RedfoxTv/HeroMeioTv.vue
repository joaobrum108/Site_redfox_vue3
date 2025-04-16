<script setup>
import Botao_Anuncie from "../Botoes/Botao_Anuncie.vue";
import Botao_Acesse_navegador from "../Botoes/Botao_Acesse_navegador.vue";
</script>

<template>
  <div class="container">
    <div class="contentHERO">
      <Botao_Anuncie style="margin-top: -25%; z-index: 999" />
      <img src="../../assets/logofozx.svg" alt="" />
      <p style="text-align: center">
        O REDFOX Play é o nosso app de TV gratuito para clientes REDFOX à partir
        dos planos de R$79,90. <br />
        <br />Faça upgrade do seu plano de internet para ter acesso a mais
        canais e poder assistir qualquer conteúdo em mais telas ao <br />
        mesmo tempo. <br />
        <br />Você pode acessar agora mesmo pelo navegador ou baixar em qualquer
        aparelho.
      </p>
      <div style="display: flex; gap: 1rem">
        <Botao_Acesse_navegador />
        <img style="max-width: 180px" src="../../assets/gog.svg" alt="" />
        <img style="max-width: 180px" src="../../assets/appsot.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #d9d9d9;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.contentHERO {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
</style>
