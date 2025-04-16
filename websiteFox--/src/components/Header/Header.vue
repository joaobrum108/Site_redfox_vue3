<template>
  <div v-if="teladesktop" class="header-container">
    <div class="header-content">
      <div class="logo-container">
        <router-link to="/">
          <img
            src="../../assets/escritaPrancheta 4@3x 1.svg"
            alt="Redfox Internet"
            class="logo"
          />
        </router-link>
      </div>

      <nav class="main-nav">
        <div class="nav-section">
          <div
            class="nav-item dropdown"
            @mouseenter="showInternet = true"
            @mouseleave="showInternet = false"
          >
            <span class="nav-link"
              >Internet <span class="dropdown-arrow">▼</span></span
            >
            <transition name="fade">
              <div v-if="showInternet" class="dropdown-content">
                <router-link
                  v-for="(item, index) in internetItems"
                  :key="index"
                  :to="item.url"
                  class="dropdown-item"
                >
                  {{ item.title }}
                </router-link>
              </div>
            </transition>
          </div>

          <div
            class="nav-item dropdown"
            @mouseenter="showCliente = true"
            @mouseleave="showCliente = false"
          >
            <span class="nav-link"
              >Área do Cliente <span class="dropdown-arrow">▼</span></span
            >
            <transition name="fade">
              <div v-if="showCliente" class="dropdown-content">
                <router-link
                  v-for="(item, index) in clienteItems"
                  :key="index"
                  :to="item.url"
                  class="dropdown-item"
                >
                  {{ item.title }}
                </router-link>
              </div>
            </transition>
          </div>

          <router-link to="/TrabalheConosco" class="nav-item nav-link">
            Fale Conosco
          </router-link>

          <div
            class="nav-item dropdown"
            @mouseenter="showRedfox = true"
            @mouseleave="showRedfox = false"
          >
            <span class="nav-link"
              >A Redfox <span class="dropdown-arrow">▼</span></span
            >
            <transition name="fade">
              <div v-if="showRedfox" class="dropdown-content">
                <router-link
                  v-for="(item, index) in redfoxItems"
                  :key="index"
                  :to="item.url"
                  class="dropdown-item"
                >
                  {{ item.title }}
                </router-link>
              </div>
            </transition>
          </div>
        </div>

        <div class="cta-section">
          <button class="subscribe-btn" elevation="0">
            <span class="btn-text">Assine já</span>
            <span class="btn-icon">→</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const telamobile = ref(false);
const teladesktop = ref(true);
const menuAberto = ref(false);
const showInternet = ref(false);
const showCliente = ref(false);
const showRedfox = ref(false);

const toggleMenu = () => {
  menuAberto.value = !menuAberto.value;
};

const verificarTamanhoTela = () => {
  if (window.innerWidth <= 600) {
    teladesktop.value = false;
    telamobile.value = true;
  } else {
    teladesktop.value = true;
    telamobile.value = false;
  }
};

onMounted(() => {
  verificarTamanhoTela();
  window.addEventListener("resize", verificarTamanhoTela);
});

onUnmounted(() => {
  window.removeEventListener("resize", verificarTamanhoTela);
});

const internetItems = [
  { title: "Residencial", url: "/" },
  { title: "Para Empresas", url: "/Empresas" },
];

const clienteItems = [
  { title: "2 Via do Boleto", url: "/2ViaBoleto" },
  { title: "Tv RedFox", url: "/Tvredfox" },
  { title: "Beneficios e Descontos", url: "/BeneficiosDescontos" },
];

const redfoxItems = [
  { title: "Sobre", url: "/Sobre" },
  { title: "Trabalhe Conosco", url: "/TrabalheConosco" },
  { title: "Contratos", url: "/Contratos" },
];
</script>

<style scoped>
:root {
  --primary: #db0e35;
  --primary-dark: #a60d2c;
  --primary-light: #fce6ea;
  --white: #ffffff;
  --text-light: #f8f8f8;
  --text-dark: #333333;
  --gray-light: #e0e0e0;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.header-wrapper {
  position: relative;
  z-index: 1000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.header-container {
  background-color: #db0e35;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100% !important;
}

.header-content {
  color: #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 80px;
}

.logo-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.05);
}

.main-nav {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-section {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
}

.nav-link {
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-item:hover .nav-link {
  color: var(--gray-light);
}

.dropdown-arrow {
  font-size: 0.6rem;
  margin-left: 4px;
  transition: transform 0.3s;
}

.nav-item:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  padding: 8px 0;
  z-index: 10;
  border: 1px solid #f0f0f0;
}

.dropdown-item {
  padding: 12px 16px;
  color: #333;
  font-size: 0.9rem;
  transition: all 0.2s;
  display: block;
  font-weight: 500;
}

.dropdown-item:hover {
  background-color: #f8f8f8;
  color: #db0e35;
  padding-left: 20px;
}

.dropdown-item:not(:last-child) {
  border-bottom: 1px solid #f0f0f0;
}

.cta-section {
  margin-left: 24px;
}

.subscribe-btn {
  background-color: #a60d2c;
  color: #e0e0e0;
  border-radius: 8px !important;
  padding: 10px 20px !important;
  font-weight: 600 !important;
  text-transform: none !important;
  transition: all 0.3s !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  border: none !important;
  cursor: pointer;
}

.subscribe-btn:hover {
  background-color: var(--primary-light) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15) !important;
}

.btn-text {
  transition: transform 0.3s;
  color: #e0e0e0;
}

.btn-icon {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s;
}

.subscribe-btn:hover .btn-text {
  transform: translateX(-5px);
}

.subscribe-btn:hover .btn-icon {
  opacity: 1;
  transform: translateX(0);
}

/* Responsividade */
@media (max-width: 1024px) {
  .header-content {
    padding: 0 16px;
  }

  .nav-item {
    padding: 0 12px;
  }
}

@media (max-width: 768px) {
  /* Estilos para tablet podem ser adicionados aqui */
}
</style>
