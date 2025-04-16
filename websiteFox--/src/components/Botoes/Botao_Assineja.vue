<template>
  <button class="rounded-gradient-button" @click="handleClick">
    CONTRATE JÁ
  </button>
</template>

<script setup>
const handleClick = () => {
  console.log("Botão clicado!");
};
</script>

<style scoped>
.rounded-gradient-button {
  width: 365px;
  height: 97.03px;
  border-radius: 16px;
  background: linear-gradient(90deg, #db0e35 0%, #820032 100%);
  color: white;
  font-weight: bold;
  font-family: Teko , sans-serif;
  font-size: 2.5rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.rounded-gradient-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.rounded-gradient-button:active {
  transform: translateY(0);
}
</style>

<!--   <Botao_Assineja />
import Botao_Assineja from "./components/botoes/Botao_Assineja.vue";   
-->
