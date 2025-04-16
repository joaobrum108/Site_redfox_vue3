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
    <div class="image-container">
      <img
        src="../../assets/ii.svg"
        alt="Ilustração do programa de indicações"
      />
    </div>
  </div>
</template>

<script setup>
import Botao_Indicar from "../Botoes/Botao_Indicar.vue";
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.text-content {
  flex: 1;
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
  justify-content: center;
}

img {
  max-width: 100%;
  height: auto;
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
