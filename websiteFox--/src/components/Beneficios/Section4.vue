<template>
  <div class="container">
    <div class="text-content">
      <p>
        Você pode GANHAR MENSALIDADES GRATUITAS indicando<br />
        amigos.
      </p>
      <p>
        Com o nosso programa de indicações você pode economizar<br />
        muito trazendo os seus amigos e conhecidos para a Redfox!
      </p>
      <p>
        A cada 4 pessoas indicadas você ganha 1 mensalidade com<br />
        custo ZERO.
      </p>
      <p>
        A promoção é acumulativa, indique o máximo que puder e<br />
        economize muito!
      </p>
      <div class="button-container">
        <Botao_Indicar />
      </div>
    </div>

    <img src="../../assets/ii.svg" alt="Ilustração do programa de indicações" />
  </div>
</template>

<script setup>
import Botao_Indicar from "../Botoes/Botao_Indicar.vue";
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.container {
  display: flex;
  width: 100%;
  height: 69vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

p {
  color: #000;
  margin: 0;
  line-height: 1.5;
}

.button-container {
  margin-top: 1rem;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: end;
}

img {
  max-width: 100%;
  height: 650px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .image-container {
    order: -1;
    margin-bottom: 1rem;
  }
}
</style>
