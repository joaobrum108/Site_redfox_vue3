<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Header from "../components/Header/Header.vue";
import Section1Wk from "../components/Work/Section1Wk.vue";
import Section2Wk from "../components/Work/Section2Wk.vue";
import Section3Wk from "../components/Work/Section3Wk.vue";
import Section4Wk from "../components/Work/Section4Wk.vue";
import Footer from "../components/Footer/Footer.vue";

const tamanhoTela = ref(window.innerWidth);

const atualizarTamanhoTela = () => {
  tamanhoTela.value = window.innerWidth;
};

const isDesktop = computed(() => {
  return tamanhoTela.value > 1021;
});

const isMobile = computed(() => {
  return tamanhoTela.value <= 1021;
});

onMounted(() => {
  window.addEventListener("resize", atualizarTamanhoTela);
  if (isMobile.value) {
    alert("Mobile");
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", atualizarTamanhoTela);
});
</script>
<template>
  <div class="container">
    <div v-show="isDesktop">
      <Header />
      <Section1Wk />
      <Section2Wk />
      <Section3Wk />
      <Section4Wk />
      <Footer />
    </div>
    <div v-show="isMobile">ola mobile</div>
  </div>
</template>
<style scoped>
.container {
  background-color: #e6e8ed;
}
</style>
