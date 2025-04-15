<template>
  <button class="tv-ad-button" @click="handleClick">ANUNCIE NA NOSSA TV</button>
</template>

<script setup>
const handleClick = () => {
  console.log("Botão de anúncio clicado!");
};
</script>

<style scoped>
.tv-ad-button {
  width: 512px;
  height: 98px;

  background-color: #ffffff;
  color: #db0e35;

  font-size: 2rem;
  font-weight: bold;
  font-family: "Arial", sans-serif;

  border: 2px solid #db0e35;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
}

.tv-ad-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(219, 14, 53, 0.3);
}

.tv-ad-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .tv-ad-button {
    width: 90%;
    max-width: 100%;
    font-size: 2.5rem;
    height: auto;
    padding: 1rem 0;
  }
}
</style>

<!-- 
import Botao_Anuncie from "./components/botoes/Botao_Anuncie.vue";
  <Botao_Anuncie />
-->
