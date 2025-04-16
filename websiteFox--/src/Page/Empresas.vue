<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/Header/Header.vue";
import HeroSection from "../components/Empresas/HeroSection.vue";
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
      <HeroSection />
      <Footer />
    </div>
    <div v-show="tamanhoTela <= 1021">Mobile</div>
  </div>
</template>
<style scoped></style>
