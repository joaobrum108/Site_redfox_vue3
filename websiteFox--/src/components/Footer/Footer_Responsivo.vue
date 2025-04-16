<template>
    <footer class="footer">
      <!-- LOGO SECTION -->
      <div class="footer-section logo-section" 
           :class="{ active: activeSection === 'logo' }" 
           @click="toggleSection('logo')">
        <div class="section-header">
          <div class="footer-logo-section">
            <div class="logo-container">
              <img class="logo" src="../../assets/red.svg" alt="RedFox Telecom Logo">
            </div>
            <div class="company-info">
              <h3>RAZÃO SOCIAL: GUARULHOS <br> TELECOMUNICAÇÕES LTDA</h3>
              <h3>CNPJ: 27.583.479/0001-92</h3>
            </div>
          </div>
          <span class="mobile-toggle" v-if="isMobile">
            {{ activeSection === 'logo' ? '−' : '+' }}
          </span>
        </div>
        <div class="section-content" v-show="!isMobile || activeSection === 'logo'">
          <!-- Conteúdo adicional se quiser -->
        </div>
      </div>
  
      <!-- NAV SECTION -->
      <div class="footer-section nav-section" 
           :class="{ active: activeSection === 'nav' }" 
           @click="toggleSection('nav')">
        <div class="section-header">
          <div class="section-title">
            <h2><strong>Navegação</strong></h2>
          </div>
          <span class="mobile-toggle" v-if="isMobile">
            {{ activeSection === 'nav' ? '−' : '+' }}
          </span>
        </div>
        <div class="section-content" v-show="!isMobile || activeSection === 'nav'">
          <div class="links-container">
            <a v-for="(link, index) in informacoesnave" 
               :key="index" 
               :href="link.url" 
               class="footer-link"
               @click="handleLinkClick">
              {{ link.texto }}
            </a>
          </div>
        </div>
      </div>
  
      <!-- CONTACT SECTION -->
      <div class="footer-section contact-section" 
           :class="{ active: activeSection === 'contact' }" 
           @click="toggleSection('contact')">
        <div class="section-header">
          <div class="section-title">
            <h2><strong>Contato</strong></h2>
          </div>
          <span class="mobile-toggle" v-if="isMobile">
            {{ activeSection === 'contact' ? '−' : '+' }}
          </span>
        </div>
        <div class="section-content" v-show="!isMobile || activeSection === 'contact'">
          <div class="links-container">
            <a v-for="(link, index) in InformaçaoContato" 
               :key="index" 
               :href="link.url" 
               class="footer-link"
               @click="handleLinkClick">
              <i :class="link.icon"></i> {{ link.texto }}
            </a>
          </div>
          <div class="section-title panel-title">
            <h2>Painel</h2>
          </div>
          <div class="links-container">
            <a v-for="(link, index) in InfoPainel" 
               :key="index" 
               :href="link.url" 
               class="footer-link"
               @click="handleLinkClick">
              <i class="fas fa-user-circle"></i> {{ link.texto }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isMobile = ref(false);
  const activeSection = ref(null);
  
  const informacoesnave = [
    { texto: "Para sua casa", url: "/residencial" },
    { texto: "Para sua empresa", url: "/para-empresas" },
    { texto: "2 Via do Boleto", url: "/2via" },
    { texto: "Central de Apps", url: "/CentralApp" },
    { texto: "Tv RedFox", url: "/Tvredfox" },
    { texto: "Beneficios e Descontos", url: "/BeneficiosDescontos" },
    { texto: "Sobre", url: "/Sobre" },
    {
      texto: "Termos e Politicas de Privacidade - RedFox TV App",
      url: "/TermosPoliticasRedFoxTVApp",
    },
    {
      texto: "Termos e Politicas de Privacidade - RedFox SAC App",
      url: "/TermosPoliticasRedFoxSACApp",
    },
  ];
  
  const InformaçaoContato = [
    {
      texto: "Vendas@redfoxtelecom.com.br",
      url: "/Vendas@redfoxtelecom.com.br",
      icon: "fas fa-envelope",
    },
    { texto: "(11)24842656", url: "tel:1124842656", icon: "fab fa-whatsapp" },
    { texto: "0800-773-2656", url: "tel:08007732656", icon: "fas fa-phone-alt" },
  ];
  
  const InfoPainel = [
    { texto: "Portal dos assinantes", url: "/PortalAssinantes" },
  ];
  
  const toggleSection = (section) => {
    if (!isMobile.value) return;
    activeSection.value = activeSection.value === section ? null : section;
  };
  
  const handleLinkClick = () => {
    if (isMobile.value) {
      activeSection.value = null;
    }
  };
  
  const checkScreenSize = () => {
    isMobile.value = window.innerWidth <= 768;
    if (!isMobile.value) {
      activeSection.value = null;
    }
  };
  
  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
  });
  </script>
  
  <style scoped>
  /* Base Styles */
  .footer-wrapper {
    background-color: #2d2d2d;
    color: white;
    width: 100%;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .footer-inner {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  
  .footer-section {
    flex: 1;
    min-width: 250px;
    margin-bottom: 20px;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .mobile-toggle {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 10px;
  }
  
  /* Logo Section */
  .logo-section {
    display: flex;
    flex-direction: column;
  }
  
  .footer-logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
  }
  
  .logo {
    max-width: 200px;
    height: auto;
  }
  
  .company-info {
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .company-info h3 {
    margin: 5px 0;
  }
  
  /* Navigation and Contact Sections */
  .section-title h2 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #fff;
    background-color: #2d2d2d;
  }
  
  .panel-title {
    margin-top: 25px;
  }
  
  .links-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .footer-link {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }
  
  .footer-link:hover {
    color: #ff5555;
  }
  
  .footer-link i {
    margin-right: 8px;
    width: 16px;
    text-align: center;
  }
  
  /* Mobile Styles */
  @media (max-width: 768px) {
    .footer-container {
      padding: 15px;
    }
  
    .footer-inner {
      flex-direction: column;
      gap: 0;
    }
  
    .footer-section {
      width: 100%;
      min-width: auto;
      border-bottom: 1px solid #3d3d3d;
      padding: 15px 0;
      margin-bottom: 0;
    }
  
    .section-header {
      padding: 10px 0;
    }
  
    .section-content {
      padding-top: 10px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
    }
  
    .footer-section.active .section-content {
      max-height: 1000px; /* Adjust based on content */
    }
  
    .logo {
      max-width: 150px;
    }
  
    .company-info h3 {
      font-size: 0.8rem;
    }
  
    .section-title h2 {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  
    .footer-link {
      font-size: 0.85rem;
      padding: 8px 0;
    }
  
    .mobile-toggle {
      display: inline-block;
    }
  }
  
  /* Desktop-only styles */
  @media (min-width: 769px) {
    .mobile-toggle {
      display: none;
    }
    
    .section-content {
      display: block !important;
    }
  }
  </style>