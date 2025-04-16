<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/Header/Header.vue";
import Hero_Boleto from "../components/Boleto/Hero_Boleto.vue";
import Hero_Card from "../components/Boleto/Hero_Card.vue";
import Content_video from "../components/Boleto/Content_video.vue";
import Content_App from "../components/Boleto/Content_App.vue";
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
      <Hero_Boleto />
      <Hero_Card />
      <Content_video />
      <Content_App />
      <Footer />
    </div>
    <div v-show="tamanhoTela <= 1021">Mobile</div>
  </div>
</template>
<style scoped></style>
