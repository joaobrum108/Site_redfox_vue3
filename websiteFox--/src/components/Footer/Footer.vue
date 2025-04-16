<template>
    <div class="footer-container">
      <div class="footer-inner">
        <div class="footer-section">
          <div class="footer-logo-section">
            <div class="logo-container">
              <img class="logo" src="../../assets/red.svg" alt="RedFox Telecom Logo">
            </div>
            <div class="company-info">
              <h3>RAZÃO SOCIAL: GUARULHOS <br> TELECOMUNICAÇÕES LTDA</h3>
              <h3>CNPJ: 27.583.479/0001-92</h3>
            </div>
          </div>
        </div>
  
        <div class="footer-section navigation">
          <div class="section-title">
            <h2><strong>Navegação</strong></h2>
          </div>
          <div class="links-container">
            <a v-for="(link, index) in informacoesnave" :key="index" :href="link.url" class="footer-link">
              {{ link.texto }}
            </a>
          </div>
        </div>
  
        <div class="footer-section contact">
          <div class="section-title">
            <h2><strong>Contato</strong></h2>
          </div>
          <div class="links-container">
            <a v-for="(link, index) in InformaçaoContato" :key="index" :href="link.url" class="footer-link">
              <i :class="link.icon"></i> {{ link.texto }}
            </a>
          </div>
          
          <div class="section-title panel-title">
            <h2>Painel</h2>
          </div>
          <div class="links-container">
            <a v-for="(link, index) in InfoPainel" :key="index" :href="link.url" class="footer-link">
              <i class="fas fa-user-circle"></i> {{ link.texto }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
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
  </script>
  
  <style scoped>
  /* Main container styles */
  .footer-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #2d2d2d;
    height: 50vh;
    color: white;
    width: 100%;
  }
  
  .footer-inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #2d2d2d;
    height: 40vh;
    color: white;
    border: 1px solid #3d3d3d;
    padding: 1rem;
    width: 80%;
    gap: 2rem;
  }
  
  /* Section styles */
  .footer-section {
    display: flex;
    flex-direction: column;
  }
  
  /* Logo section styles */
  .footer-logo-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    width: 240px;
  }
  
  .company-info {
    text-align: center;
    font-size: 0.875rem;
  }
  
  .company-info h3 {
    margin: 0.5rem 0;
    line-height: 1.4;
  }
  
  /* Navigation section styles */
  .navigation {
    margin-left: 2rem;
  }
  
  /* Contact section styles */
  .contact {
    margin-left: 2rem;
  }
  
  /* Common styles for sections */
  .section-title {
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .section-title h2 {
    font-size: 1.1rem;
  }
  
  .panel-title {
    margin-top: 1.5rem;
  }
  
  .links-container {
    display: flex;
    flex-direction: column;
  }
  
  .footer-link {
    display: block;
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .footer-link:hover {
    color: #ff5555;
  }
  
  .footer-link i {
    margin-right: 0.5rem;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      height: auto;
      padding: 1rem;
    }
  
    .footer-inner {
      height: auto;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      padding: 1rem;
    }
  
    .navigation,
    .contact {
      margin-left: 0;
      margin-top: 1rem;
      width: 100%;
    }
  
    .logo {
      width: 60%;
    }
  
    .company-info h3 {
      font-size: 0.875rem;
    }
  
    .section-title h2 {
      font-size: 1rem;
    }
  
    .footer-link {
      font-size: 0.875rem;
    }
  }
  </style>