<template>
  <div class="card-container">
    <div class="card-header">
      <img src="../../assets/Vector.svg" alt="" />
      <span>+150 canais AO VIVO</span>
    </div>

    <div
      class="vertical-card"
      @click="handleClick"
      @mouseenter="startHover"
      @mouseleave="endHover"
    >
      <div class="glow-effect" :style="glowStyle"></div>

      <div class="main-content">
        <span class="number" :style="{ transform: hoverScale }">500</span>
        <div class="vertical-text">MEGA</div>
      </div>

      <div class="plus" :style="{ opacity: plusOpacity }">+</div>

      <div class="app-text">2 app <strong>standard</strong></div>

      <div class="horizontal-apps">
        <span
          v-for="(app, index) in apps"
          :key="index"
          class="app-icon"
          :style="{
            transform: hoveredApp === index ? 'scale(1.15)' : 'scale(1)',
            boxShadow:
              hoveredApp === index
                ? '0 5px 15px rgba(0,0,0,0.2)'
                : '0 2px 4px rgba(0,0,0,0.1)',
          }"
          @mouseenter="hoveredApp = index"
          @mouseleave="hoveredApp = null"
        >
          <img :src="app.icon" :alt="app.name" />
        </span>
      </div>

      <div><img src="../../assets/Group 350.svg" alt="" /></div>

      <button class="btn" @click.stop="handleSubscribe">
        <i class="fab fa-whatsapp"></i>
        <span class="btn-text">ASSINE JÁ</span>
        <span class="btn-arrow">→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const hoverScale = ref("scale(1)");
const plusOpacity = ref(1);
const hoveredApp = ref(null);
const isHovering = ref(false);

const apps = [
  { icon: "../../assets/icon-deezer.svg", name: "Deezer" },
  { icon: "../../assets/icon-+qnutri (1).svg", name: "QNutri" },
];

const glowStyle = computed(() => ({
  opacity: isHovering.value ? 0.8 : 0,
  transform: `scale(${isHovering.value ? 1.1 : 1})`,
}));

const startHover = () => {
  isHovering.value = true;
  hoverScale.value = "scale(1.05)";
  plusOpacity.value = 0;

  setTimeout(() => {
    hoverScale.value = "scale(1.03)";
  }, 150);
};

const endHover = () => {
  isHovering.value = false;
  hoverScale.value = "scale(1)";
  plusOpacity.value = 1;
};

const handleClick = () => {
  console.log("Card clicado!");
  hoverScale.value = "scale(0.95)";
  setTimeout(() => {
    hoverScale.value = "scale(1.03)";
    setTimeout(() => {
      hoverScale.value = "scale(1)";
    }, 100);
  }, 100);
};

const handleSubscribe = (e) => {
  e.stopPropagation();
  console.log("Botão de assinatura clicado!");
  e.target.style.transform = "scale(0.95)";
  setTimeout(() => {
    e.target.style.transform = "scale(1)";
  }, 100);
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 250px;
  perspective: 1000px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: aliceblue;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.vertical-card {
  --transition-time: 0.3s;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --hover-shadow: 0 10px 25px rgba(219, 14, 53, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  border-radius: 20px;
  width: 100%;
  max-width: 270px;
  height: 400px;
  padding: 25px;
  box-shadow: 0 8px 16px var(--shadow-color);
  cursor: pointer;
  transition: all var(--transition-time) ease;
  overflow: hidden;
  z-index: 1;
}

.vertical-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--hover-shadow);
}

.vertical-card:active {
  transform: translateY(-2px);
}

.glow-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    rgba(219, 14, 53, 0.15) 0%,
    transparent 70%
  );
  z-index: -1;
  transition: all 0.5s ease;
}

.main-content {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}

.number {
  font-size: 4.5rem;
  font-family: "Teko", sans-serif;
  font-weight: 700;
  background: linear-gradient(135deg, #222 0%, #444 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 0.9;
}

.vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 2rem;
  font-family: "Teko", sans-serif;
  font-weight: 700;
  background: linear-gradient(to bottom, #db0e35 0%, #a50828 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 4px;
  margin-left: 5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.plus {
  font-size: 2rem;
  font-weight: 300;
  color: #666;
  margin-bottom: 8px;
  transition: opacity 0.3s ease;
}

.app-text {
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  font-weight: 600;
}

.horizontal-apps {
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
}

.app-icon {
  display: inline-flex;
  padding: 10px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(34, 34, 34, 0.05);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.app-icon img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.btn {
  position: relative;
  background: linear-gradient(to right, #06e035 0%, #04b52d 100%);
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  font-family: "Teko", sans-serif;
  width: 160px;
  height: 45px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 20px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(6, 224, 53, 0.3);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(6, 224, 53, 0.4);
}

.btn:active {
  transform: translateY(0);
}

.btn i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.btn:hover i {
  transform: scale(1.1);
}

.btn-arrow {
  position: absolute;
  right: 15px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.btn:hover .btn-arrow {
  opacity: 1;
  transform: translateX(0);
}

.btn:hover .btn-text {
  transform: translateX(-8px);
}

.btn-text {
  transition: transform 0.3s ease;
}

/* Responsividade */
@media (max-width: 480px) {
  .vertical-card {
    height: 380px;
    padding: 20px;
  }

  .number {
    font-size: 3.5rem;
  }

  .vertical-text {
    font-size: 1.5rem;
  }
}
</style>
