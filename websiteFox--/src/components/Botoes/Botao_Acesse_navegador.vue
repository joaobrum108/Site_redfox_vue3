<template>
  <button class="red-pill-button" @click="handleClick">
    <slot>ACESSAR NO NAVEGADOR</slot>
  </button>
</template>

<script setup>
const handleClick = () => {
  console.log("Botão clicado!");
};
</script>

<style scoped>
.red-pill-button {
  width: 267px;
  height: 54.19px;
  border-radius: 10000px;
  background-color: #db0e35;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.red-pill-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(219, 14, 53, 0.4);
}

.red-pill-button:active {
  transform: translateY(0);
}
</style>

<!-- <Botao_Acesse_navegador />
import Botao_Acesse_navegador from "./components/botoes/Botao_Acesse_navegador.vue"; 
-->
