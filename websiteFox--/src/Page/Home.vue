<script setup>
import { ref , onMounted , onUnmounted } from 'vue';
import HeroSection from '../components/Principal/HeroSection.vue';
import Header from '../components/Header/Header.vue';
import SecundarioSection from '../components/Principal/SecundarioSection.vue';
import TerceiroSection from '../components/Principal/TerceiroSection.vue';
import QuartaSection from '../components/Principal/QuartaSection.vue';
import HeroEnd from '../components/Principal/HeroEnd.vue';
import Footer from '../components/Footer/Footer.vue';
import Header_Responsivo from '../components/Header/Header_Responsivo.vue';
import Footer_Responsivo from '../components/Footer/Footer_Responsivo.vue';

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
          <HeroSection/>
          <SecundarioSection />
          <TerceiroSection />
          <QuartaSection />
          <HeroEnd />
          <Footer />
        </div>
        <div v-show="tamanhoTela <= 1021">
         <Header_Responsivo />
         <Footer_Responsivo />
        </div>

    </div>
</template>
