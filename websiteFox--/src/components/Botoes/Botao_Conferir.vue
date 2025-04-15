<template>
  <button class="red-pill-button" @click="handleClick">
    <slot>CONFERIR</slot>
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
  height: 80.19px;
  border-radius: 10000px;
  background-color: #db0e35;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
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

<!-- 
import Botao_Conferir from "./components/botoes/Botao_Conferir.vue";
  <Botao_Conferir />
-->
