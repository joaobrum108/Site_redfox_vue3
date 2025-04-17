<script setup>

</script>

<template>
  <div class="conteudo_forms">
    <h3 class="titulo">Fale Conosco</h3>

    <div class="form-grid">
      <div class="input-group">
        <label class="input-label"><strong>NOME</strong></label>
        <input type="text" class="form-input" />
      </div>

      <div class="input-group">
        <label class="input-label"><strong>TELEFONE</strong></label>
        <input type="text" class="form-input" />
      </div>

      <div class="input-group">
        <label class="input-label"><strong>E-MAIL</strong></label>
        <input type="text" class="form-input" />
      </div>

      <div class="input-group">
        <label class="input-label"><strong>ASSUNTO</strong></label>
        <input type="text" class="form-input" />
      </div>

      <div class="input-group full-width">
        <label class="input-label"><strong>MENSAGEM</strong> (opcional)</label>
        <input class="form-input textarea"></input>
      </div>
    </div>

    <button class="submit-button">ENVIAR</button>
  </div>
</template>

<style scoped>
.conteudo_forms {
  background: linear-gradient(to right, #db0e35, #820032);
  border-radius: 16px;
  width: 66%;
  /* max-width: 800px; */
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.titulo {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group.full-width {
  grid-column: span 2;
}

.input-label {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.form-input {
  padding: 0.8rem;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  background-color: white;
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-button {
  background-color: white;
  color: #db0e35;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: auto;
  margin-top: 0.5rem;
}

.submit-button:hover {
  background-color: #f8f8f8;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .conteudo_forms {
    width: 90%;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .input-group.full-width {
    grid-column: span 1;
  }
}
</style>
