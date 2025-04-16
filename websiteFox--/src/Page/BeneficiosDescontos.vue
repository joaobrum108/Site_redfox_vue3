<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/Header/Header.vue";
import Section1 from "../components/Beneficios/Section1.vue";
import Section2 from "../components/Beneficios/Section2.vue";
import Section3 from "../components/Beneficios/Section3.vue";
import Section4 from "../components/Beneficios/Section4.vue";
import Footer from "../components/Footer/Footer.vue";

const tamanhoTela = ref(window.innerWidth);

const atualizarTamanhoTela = () => {
  tamanhoTela.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", atualizarTamanhoTela);
});

onUnmounted(() => {
  window.removeEventListener("resize", atualizarTamanhoTela);
});
</script>
<template>
  <div class="container">
    <div v-show="tamanhoTela > 1021">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
    <div v-show="tamanhoTela <= 1021">Mobile</div>
  </div>
</template>
<style scoped></style>
