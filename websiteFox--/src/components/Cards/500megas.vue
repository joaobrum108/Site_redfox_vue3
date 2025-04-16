<template>
    <div  style="display: flex; flex-direction: column; text-align: center; gap: 1rem; font-weight: bold; color: aliceblue; width: 250px;">
      <div> <img src="../../assets/Vector.svg" alt="">   +150 canais AO VIVO</div>
      <div class="vertical-card" @click="handleClick">
      <div class="main-content">
        <span class="number">500</span>
        <div class="vertical-text">MEGA</div>
      </div>
      <div class="plus">+</div>
      <div class="app-text">2 app <strong>standard</strong></div>
      <div class="horizontal-apps">
        <span class="app-icon"><img src="../../assets/icon-deezer.svg" alt="Deezer"/></span>
        <span class="app-icon"><img src="../../assets/icon-+qnutri (1).svg" alt="QNutri"/></span>
      </div>
      <div><img src="../../assets/Group 350.svg" alt=""/></div>
      <div><button class="btn" > <i class="fab fa-whatsapp" style="margin-left: 8px; "></i> ASSINE JÁ  </button></div>
    </div>
    </div>
  </template>
  
  <script setup>
  const handleClick = () => {
    console.log("Card clicado!");
  };
  </script>
  
  <style scoped>
  .btn{
    background-color: #06e035;
    color: #fff;
    font-weight: 900;
    border-radius: 50px;
    font-family: Teko , sans-serif;
    width: 120px;
    height: 35px;
   font-size: 1rem;
  }
  .vertical-card {
    --transition-time: 0.25s;
  --shadow-color: rgba(0, 0, 0, 0.08);
  --hover-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  width: 100%;
  max-width: 270px;
  height: 400px;
  padding: 20px;
  box-shadow: 0 4px 8px var(--shadow-color);
  cursor: pointer;
  transition: transform var(--transition-time) ease, box-shadow var(--transition-time) ease;
  }
  .vertical-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--hover-shadow);
  }
  .vertical-card:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px var(--shadow-color);
  }
  .main-content {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .number {
    font-size: 3.5rem;
    font-family: Teko , sans-serif;
    font-weight: bold;
    color: #222;
  }
  .vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 1.8rem;
    color: #db0e35;
    letter-spacing: 3px;
    font-family: Teko , sans-serif;
    font-weight: bold;
  }
  .plus {
    font-size: 1.8rem;
    font-weight: 300;
    color: #444;
    margin-bottom: 4px;
  }
  .app-text {
    font-size: 0.75rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }
  .horizontal-apps {
    display: flex;
    gap: 20px;
  }
  .app-icon {
    display: inline-flex;
    padding: 8px;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(34, 34, 34, 0.1);
    transition: transform 0.2s ease;
  }
  .app-icon:hover {
    transform: scale(1.1);
  }
  .app-icon img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  </style>

  <!-- 
import Megas500 from './components/Cards/500megas.vue'
<Megas500 />
  -->