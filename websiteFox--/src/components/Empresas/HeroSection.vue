<script setup>
import Falar_Especialista from "../Formularios/Falar_Especialista.vue";
import Botao_Assineja from "../Botoes/Botao_Assineja.vue";
</script>

<template>
  <div class="hero-wrapper">
    <div class="hero-section">
      <div class="hero-content">
        <img src="../../assets/red.svg" alt="Logo" class="logo" />
        <h1>Internet sob medida</h1>
      </div>

      <div class="content-container">
        <div class="form-wrapper">
          <Falar_Especialista />
        </div>

        <div class="cards-section">
          <div class="card">
            <div class="card-content">
              <div class="card-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, eos accusamus saepe maxime placeat iure corporis nobis.
                  Obcaecati fuga sapiente porro praesentium culpa rem dolore
                  iusto, qui perspiciatis minus tempora.
                </p>
              </div>
              <div class="card-image">
                <img
                  src="../../assets/arte-business-3 1.svg"
                  alt="Business illustration"
                />
              </div>
            </div>
          </div>

          <div class="card reverse">
            <div class="card-content">
              <div class="card-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, eos accusamus saepe maxime placeat iure corporis nobis.
                  Obcaecati fuga sapiente porro praesentium culpa rem dolore
                  iusto, qui perspiciatis minus tempora.
                </p>
              </div>
              <div class="card-image">
                <img
                  src="../../assets/Arte-liderança-positiva-linkedin 1 (1).svg"
                  alt="Leadership illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gradient-section">
      <div class="gradient-content">
        <div class="btn-top">
          <Botao_Assineja />
        </div>
        <div class="photo_Reuniao"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.hero-section {
  background-image: url("../../assets/redfox-corp 2 (1).svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding-bottom: 40vh;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 8% 4%;
  text-align: center;
}

.logo {
  max-width: 800px;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

h1 {
  font-family: Teko, sans-serif;
  color: #fff;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.content-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-wrapper {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 25px;
}

.cards-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 3rem 0;
  margin-top: 15rem;
  padding: 0 1rem;
}

.card {
  width: 100%;
}

.card-content {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.reverse .card-content {
  flex-direction: row-reverse;
}

.card-text {
  flex: 1;
  padding: 2.5rem;
}

.card-text p {
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.card-image {
  flex: 0 0 40%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image img {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.card-image img:hover {
  transform: scale(1.03);
}

.gradient-section {
  width: 100%;
  min-height: 60vh;
  background: linear-gradient(to right, #db0e35, #820032);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.gradient-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  z-index: 2;
  gap: 2rem;
}

.btn-top {
  margin-top: -6rem;
  z-index: 3;
}

.photo_Reuniao {
  background-image: url("../../assets/reuniao 1.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 50vh;
  max-width: 1200px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

@media (max-width: 992px) {
  .content-container {
    padding: 0 15px;
  }

  .card-content {
    flex-direction: column;
  }

  .reverse .card-content {
    flex-direction: column;
  }

  .card-image {
    flex: 0 0 auto;
    padding: 1.5rem 2.5rem 2.5rem;
  }

  .card-text {
    padding: 2rem;
  }

  .photo_Reuniao {
    height: 40vh;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 15% 8% 5%;
  }

  .hero-section {
    padding-bottom: 30vh;
  }

  .form-wrapper {
    width: 100%;
    padding: 20px;
    margin-top: 1rem;
  }

  .card-text {
    padding: 1.5rem;
  }

  .card-image {
    padding: 0 1.5rem 1.5rem;
  }

  .card-image img {
    max-width: 250px;
  }

  .gradient-section {
    min-height: 50vh;
  }

  .photo_Reuniao {
    height: 30vh;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 20% 5% 8%;
  }

  .hero-section {
    padding-bottom: 25vh;
  }

  .card-text p {
    font-size: 1rem;
    text-align: left;
  }

  .gradient-section {
    min-height: 40vh;
  }

  .photo_Reuniao {
    height: 25vh;
  }
}
</style>
