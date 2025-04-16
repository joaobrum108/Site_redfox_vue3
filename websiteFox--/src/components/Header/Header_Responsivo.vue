<template>
    <div class="header-wrapper">
      <!-- Desktop Header -->
      <div v-if="!isMobile" class="header-container">
        <div class="header-content">
          <div class="logo-container">
            <router-link to="/">
              <img src="../../assets/escritaPrancheta 4@3x 1.svg" alt="Redfox Internet" class="logo" />
            </router-link>
          </div>
  
          <nav class="main-nav">
            <div class="nav-section">
              <div
                class="nav-item dropdown"
                @mouseenter="showInternet = true"
                @mouseleave="showInternet = false"
              >
                <span class="nav-link">Internet <span class="dropdown-arrow">▼</span></span>
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
                <span class="nav-link">Área do Cliente <span class="dropdown-arrow">▼</span></span>
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
                <span class="nav-link">A Redfox <span class="dropdown-arrow">▼</span></span>
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
  
      <!-- Mobile Header -->
      <div v-else class="mobile-header-container">
        <div class="mobile-header-content">
          <div class="mobile-logo-container">
            <router-link to="/">
              <img src="../../assets/escritaPrancheta 4@3x 1.svg" alt="Redfox Internet" class="mobile-logo" />
            </router-link>
          </div>
  
          <button class="hamburger-btn" @click="toggleMenu">
            <span class="hamburger-line" :class="{ 'line-1-active': menuAberto }"></span>
            <span class="hamburger-line" :class="{ 'line-2-active': menuAberto }"></span>
            <span class="hamburger-line" :class="{ 'line-3-active': menuAberto }"></span>
          </button>
        </div>
  
        <transition name="slide">
          <div v-if="menuAberto" class="mobile-menu">
            <div class="mobile-nav-section">
              <div class="mobile-nav-item" @click="toggleDropdown('internet')">
                <span class="mobile-nav-link">Internet <span class="mobile-dropdown-arrow">{{ showMobileInternet ? '▲' : '▼' }}</span></span>
                <transition name="fade">
                  <div v-if="showMobileInternet" class="mobile-dropdown-content">
                    <router-link
                      v-for="(item, index) in internetItems"
                      :key="index"
                      :to="item.url"
                      class="mobile-dropdown-item"
                      @click="closeMenu"
                    >
                      {{ item.title }}
                    </router-link>
                  </div>
                </transition>
              </div>
  
              <div class="mobile-nav-item" @click="toggleDropdown('cliente')">
                <span class="mobile-nav-link">Área do Cliente <span class="mobile-dropdown-arrow">{{ showMobileCliente ? '▲' : '▼' }}</span></span>
                <transition name="fade">
                  <div v-if="showMobileCliente" class="mobile-dropdown-content">
                    <router-link
                      v-for="(item, index) in clienteItems"
                      :key="index"
                      :to="item.url"
                      class="mobile-dropdown-item"
                      @click="closeMenu"
                    >
                      {{ item.title }}
                    </router-link>
                  </div>
                </transition>
              </div>
  
              <router-link 
                to="/TrabalheConosco" 
                class="mobile-nav-item mobile-nav-link" 
                @click="closeMenu"
              >
                Fale Conosco
              </router-link>
  
              <div class="mobile-nav-item" @click="toggleDropdown('redfox')">
                <span class="mobile-nav-link">A Redfox <span class="mobile-dropdown-arrow">{{ showMobileRedfox ? '▲' : '▼' }}</span></span>
                <transition name="fade">
                  <div v-if="showMobileRedfox" class="mobile-dropdown-content">
                    <router-link
                      v-for="(item, index) in redfoxItems"
                      :key="index"
                      :to="item.url"
                      class="mobile-dropdown-item"
                      @click="closeMenu"
                    >
                      {{ item.title }}
                    </router-link>
                  </div>
                </transition>
              </div>
            </div>
  
            <div class="mobile-cta-section">
              <button class="mobile-subscribe-btn" elevation="0" @click="closeMenu">
                <span class="mobile-btn-text">Assine já</span>
                <span class="mobile-btn-icon">→</span>
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const isMobile = ref(false);
  const menuAberto = ref(false);
  const showInternet = ref(false);
  const showCliente = ref(false);
  const showRedfox = ref(false);
  const showMobileInternet = ref(false);
  const showMobileCliente = ref(false);
  const showMobileRedfox = ref(false);
  
  const toggleMenu = () => {
    menuAberto.value = !menuAberto.value;
  };
  
  const closeMenu = () => {
    menuAberto.value = false;
  };
  
  const toggleDropdown = (type) => {
    if (type === 'internet') {
      showMobileInternet.value = !showMobileInternet.value;
      showMobileCliente.value = false;
      showMobileRedfox.value = false;
    } else if (type === 'cliente') {
      showMobileCliente.value = !showMobileCliente.value;
      showMobileInternet.value = false;
      showMobileRedfox.value = false;
    } else if (type === 'redfox') {
      showMobileRedfox.value = !showMobileRedfox.value;
      showMobileInternet.value = false;
      showMobileCliente.value = false;
    }
  };
  
  const verificarTamanhoTela = () => {
    isMobile.value = window.innerWidth <= 768;
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
    { title: "Para Empresas", url: "/para-empresas" },
  ];
  
  const clienteItems = [
    { title: "2 Via do Boleto", url: "/2via" },
    { title: "Central de Apps", url: "/CentralApp" },
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
  
  /* Common styles */
  .header-wrapper {
    position: relative;
    z-index: 1000;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease;
  }
  .slide-enter-from, .slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
  
  /* Desktop Header Styles */
  .header-container {
    background-color: #db0e35;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
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
    border-radius: 8px;
    padding: 10px 20px;
    font-weight: 600;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    cursor: pointer;
  }
  
  .subscribe-btn:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
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
  
  /* Mobile Header Styles */
  .mobile-header-container {
    background-color: #db0e35;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
  }
  
  .mobile-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 60px;
  }
  
  .mobile-logo-container {
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .mobile-logo {
    height: 30px;
  }
  
  .hamburger-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
    padding: 0;
    position: relative;
    z-index: 1001;
  }
  
  .hamburger-line {
    display: block;
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
  .line-1-active {
    transform: translateY(7px) rotate(45deg);
  }
  
  .line-2-active {
    opacity: 0;
  }
  
  .line-3-active {
    transform: translateY(-7px) rotate(-45deg);
  }
  
  .mobile-menu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #db0e35;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    z-index: 1000;
  }
  
  .mobile-nav-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .mobile-nav-item {
    padding: 12px 0;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .mobile-nav-link {
    color: white;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .mobile-dropdown-arrow {
    font-size: 0.8rem;
    margin-left: 8px;
  }
  
  .mobile-dropdown-content {
    margin-top: 8px;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .mobile-dropdown-item {
    color: white;
    font-size: 0.9rem;
    padding: 8px 0;
    opacity: 0.9;
  }
  
  .mobile-dropdown-item:hover {
    opacity: 1;
  }
  
  .mobile-cta-section {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .mobile-subscribe-btn {
    background-color: #a60d2c;
    color: #e0e0e0;
    border-radius: 8px;
    padding: 12px 24px;
    font-weight: 600;
    width: 100%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  
  .mobile-btn-text {
    color: #e0e0e0;
  }
  
  .mobile-btn-icon {
    color: #e0e0e0;
  }
  
  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .header-content {
      padding: 0 16px;
    }
    
    .nav-item {
      padding: 0 12px;
    }
  }
  
  @media (min-width: 769px) {
    .mobile-header-container {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    .header-container {
      display: none;
    }
  }
  </style>