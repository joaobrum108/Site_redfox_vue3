<template>
    <article class="card" @click="handleClick">
      <div class="card__content">
        <div class="card__left">
          <div class="card__header">
            <h2 class="card__number">1 GIGA</h2>
          </div>
          <img 
            class="card__icon" 
            src="../../assets/Group 378.svg" 
            alt="Ícone de megas" 
            loading="lazy"
          />
        </div>
        
        <div class="card__right">
          <img 
            class="card__price" 
            src="../../assets/Group 179 (1).svg" 
            alt="Preço promocional"
            loading="lazy"
          />
          <button class="whatsapp-btn">
            <span>ASSINE JÁ</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFF">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.293-7.413c-.545 0-1 .446-1 1 0 .553.455 1 1 1 .543 0 1-.447 1-1s-.457-1-1-1m-4 0c-.545 0-1 .446-1 1 0 .553.455 1 1 1 .543 0 1-.447 1-1s-.457-1-1-1"/>
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338A9.96 9.96 0 0 0 12 22z" stroke="#FFF" stroke-width="2" fill="none"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  </template>
  
  <script setup>
  const handleClick = () => {
    console.log("Card clicado!");
  };
  </script>
  
  <style scoped>
  .card {
    --transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    --hover-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
    height: 240px; 
    padding: 1rem; 
    box-shadow: var(--shadow);
    cursor: pointer;
    transition: 
      transform var(--transition),
      box-shadow var(--transition);
    overflow: hidden; 
    border: 1px solid #ee0000;
  }
  
  .card:hover {
    transform: translateY(-3px); 
    box-shadow: var(--hover-shadow);
  }
  
  .card:active {
    transform: translateY(0) scale(0.98);
  }
  
  .card__content {
    display: flex;
    height: 100%;
  }
  
  .card__left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem; 
  }
  
  .card__right {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem; 
    padding-left: 1rem;
    border-left: 1px solid #f0f0f0; 
  }
  
  .card__header {
    display: flex;
    align-items: center;
    gap: 0.25rem; 
  }
  
  .card__number {
    font-size: 3.75rem; 
    font-family: Teko, sans-serif;
    font-weight: bold;
    color: #DB0E35;
    line-height: 1;
    margin: 0;
  }
  
  .card__label {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 1.25rem; 
    font-weight: 900;
    color: #000;
    letter-spacing: 0.125rem; 
    margin-left: -0.5rem;
  }
  
  .card__icon {
    width: auto;
    height: 2rem; 
    margin-top: 0.25rem; 
  }
  
  .card__price {
    width: 100%;
    max-width: 140px; 
    height: auto;
  }
  
  .whatsapp-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px; 
    padding: 10px 16px; 
    background-color: #25D366;
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 90%; 
  }
  
  .whatsapp-btn:hover {
    background-color: #128C7E;
    transform: translateY(-1px); 
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .whatsapp-btn:active {
    transform: translateY(0) scale(0.98);
  }
  
  
  @media (max-width: 600px) {
    .card {
      height: 200px;
      padding: 0.75rem;
    }
    
    .card__number {
      font-size: 3rem;
    line-height: 0.9;
    }
    
    .card__right {
      width: 150px;
      padding-left: 0.75rem;
    }
    
    .whatsapp-btn {
      padding: 8px 12px;
      font-size: 0.9rem;
    }
  }
  </style>


<!-- 
import Giga1 from './components/Cards/1giga.vue'
<Giga1 />
-->