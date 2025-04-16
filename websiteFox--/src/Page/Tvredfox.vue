<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/Header/Header.vue";
import Header_Responsivo from "../components/Header/Header_Responsivo.vue";
import Footer_Responsivo from "../components/Footer/Footer_Responsivo.vue";
import HeroSectionTv from "../components/RedfoxTv/HeroSectionTv.vue";
import CarroselTv from "../components/RedfoxTv/CarroselTv.vue";
import HeroMeioTv from "../components/RedfoxTv/HeroMeioTv.vue";
import HeroEndFinal from "../components/RedfoxTv/HeroEndFinal.vue";
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
      <HeroSectionTv />
      <CarroselTv />
      <HeroMeioTv />
      <div style="height: 100vh"><HeroEndFinal /></div>
      <Footer />
    </div>
    <div v-show="tamanhoTela <= 1021">
      <Header_Responsivo />
      <Footer_Responsivo />
    </div>
  </div>
</template>
<style scoped></style>
