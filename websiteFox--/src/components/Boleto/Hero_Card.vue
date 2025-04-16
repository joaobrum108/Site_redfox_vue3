<script setup>
// Você pode adicionar lógica de interação aqui se necessário
</script>

<template>
  <div class="card_hero">
    <div class="content-wrapper">
      <div class="text-content">
        <h1 class="title">PORTAL REDFOX</h1>
        <p class="description">
          Pague os boletos de forma simples e rápida, no conforto da sua casa. O
          nosso portal do cliente foi pensado para você realizar desbloqueios,
          consultar segunda via de boletos e efetuar pagamentos via PIX em
          poucos cliques!
        </p>
        <div class="button-container">
          <button class="cta-button">
            ACESSAR O PORTAL
            <span class="icon">→</span>
          </button>
        </div>
      </div>
      <div class="image-container">
        <img
          src="../../assets/ret.svg"
          alt="Homem trabalhando no laptop no sofá enquanto sua parceira relaxa assistindo TV"
          class="hero-image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_hero {
  font-family: "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
}

.text-content {
  flex: 1;
  padding: 1rem;
}

.title {
  color: #2c3e50;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.description {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
}

.button-container {
  margin-top: 1.5rem;
}

.cta-button {
  background-color: #db0e35;
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(219, 14, 53, 0.3);
}

.cta-button:hover {
  background-color: #c00d30;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(219, 14, 53, 0.4);
}

.cta-button:active {
  transform: translateY(0);
}

.icon {
  font-size: 1.2rem;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Responsividade */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    padding: 1.5rem;
  }

  .text-content {
    order: 2;
    text-align: center;
  }

  .image-container {
    order: 1;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 1.8rem;
  }

  .description {
    font-size: 1rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
}
</style>
