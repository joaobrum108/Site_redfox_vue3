<template>
  <div class="form-container">
    <div class="form-header">FALE COM UM ESPECIALISTA</div>
    <div class="form-body">
      <div class="input-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          id="nome"
          v-model="nome"
          placeholder="Digite seu nome"
        />
      </div>
      <div class="input-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Digite seu e-mail"
        />
      </div>
      <button class="submit-btn" @click="submitForm">
        <svg
          class="whatsapp-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.03-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
        ENTRAR EM CONTATO
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const nome = ref("");
const email = ref("");

const submitForm = () => {
  // Lógica para enviar o formulário
  console.log("Formulário enviado:", { nome: nome.value, email: email.value });
  // Aqui você pode adicionar a lógica para redirecionar para o WhatsApp
  // Exemplo: window.open(`https://wa.me/5511999999999?text=Olá, meu nome é ${nome.value} e meu email é ${email.value}`)
};
</script>

<style scoped>
.form-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-header {
  background-color: #db0e35;
  color: white;
  padding: 15px 20px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
}

.form-body {
  background-color: #d1d3de;
  padding: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit-btn {
  background-color: #25d366; /* Cor do WhatsApp */
  color: white;
  border: none;
  padding: 12px 20px;
  width: 100%;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #128c7e; /* Tom mais escuro do WhatsApp */
}

.whatsapp-icon {
  width: 20px;
  height: 20px;
}
</style>
