<script setup>
import Fale_Conosco from "../Formularios/Fale_Conosco.vue";
</script>
<template>
  <div class="Container">
    <div class="row_info">
      <h2>WHATSAPP</h2>
      <h2>SAC</h2>
      <h2>E-MAIL COMERCIAL</h2>
    </div>
    <div class="Container_items">
      <div class="wts">
        <h2 style="color: #fff">(11)2484-2656</h2>
        <p style="text-align: center">
          Mussum Ipsum, cacilds vidis litro <br />
          abertis.Mussum Ipsum, cacilds vidis litro abe.
        </p>
        <button>Iniciar Atendimento</button>
      </div>
      <div class="cel">
        <h2 style="color: #fff">0800 773 2656</h2>
        <p style="text-align: center">
          Mussum Ipsum, cacilds vidis litro <br />
          abertis.Mussum Ipsum, cacilds vidis litro abe.
        </p>
        <button>Iniciar Atendimento</button>
      </div>
      <div class="email">
        <h2 style="color: #fff; font-size: 1.2rem">
          vendas@redfoxtelecom.com.br
        </h2>
        <p style="text-align: center">
          Mussum Ipsum, cacilds vidis litro <br />
          abertis.Mussum Ipsum, cacilds vidis litro abe.
        </p>
        <button>Iniciar Atendimento</button>
      </div>
    </div>
    <div class="content_end">
      <h5 style="font-size: 1.3rem">
        <span style="font-weight: 500">Envie seu currículo para:</span> <br />
        trabalheconosco@redfoxtelecom.com.br
      </h5>
      <button class="btn">Iniciar Conversa</button>
    </div>
  </div>
</template>
<style scoped>
.content_end {
  height: 210px !important;
  width: 65%;
  background-image: url("../../assets/wk.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}
.btn {
  background-color: #ff0000;
  color: #ffff;
  border-radius: 32px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 75, 105, 0.1);
  position: relative;
  overflow: hidden;
}

.btn:hover {
  background-color: #b40101;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(241, 37, 1, 0.2);
}
.btn:active {
  background-color: #f73707;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(243, 74, 44, 0.2);
}
button {
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 75, 105, 0.1);
  position: relative;
  overflow: hidden;
}

button:hover {
  background-color: #004b69;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 75, 105, 0.2);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 75, 105, 0.2);
}

button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

button:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
.Container {
  background-color: #e6e8ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  gap: 1rem;
}
.row_info {
  margin-left: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;

  width: 58%;
}

.Container_items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  gap: 2rem;
}

.wts {
  background: linear-gradient(to right, #06eb62, #01ac45);

  height: 336px;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;
  gap: 1rem;
  border: 1px solid #00f028;
  box-shadow: 0 0 10px #00f028;
  border-radius: 16px;
}

.cel {
  background: linear-gradient(to right, #06a6eb, #015aac);
  box-shadow: 0 0 10px #015aac;
  border: 1px solid #015aac;
  height: 336px;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;
  gap: 1rem;
  border-radius: 16px;
}

.email {
  background-color: rgb(0, 0, 0);
  box-shadow: 0 0 10px #000;
  height: 336px;
  width: 330px;
  height: 336px;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0;
  gap: 1rem;
  border-radius: 16px;
}
</style>
