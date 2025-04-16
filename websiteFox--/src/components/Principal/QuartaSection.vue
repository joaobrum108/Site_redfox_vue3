<script setup>
import Mega800 from '../Cards/800megas.vue'
import Giga1 from '../Cards/1giga.vue'
import Botao_Assineja from '../Botoes/Botao_Assineja.vue';
</script>

<template>
<div class="content-quartasection">
    <h1>DESEMPENHO DE PONTA PARA A SUA CASA</h1>
    <p>Os melhores equipamentos quando se trata de conexão e internet! Tecnologia Wi-Fi e segurança de <br> rede de última geração.
    </p> 
    
<div class="content-row-cards">
    <Mega800 />
    <Giga1 />
</div>
<div class="content-call-end">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;"><img src="../../assets/Vector (2).svg" alt="logo">
    <h4>Suporte 24 Horas</h4>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;"><img src="../../assets/Vector (3).svg" alt="logo">
    <h4>Suporte 24 Horas</h4>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;"><img src="../../assets/g1601.svg" alt="logo">
    <h4>Suporte 24 Horas</h4>
    </div>

</div>
<div class="button-container">
        <Botao_Assineja />
    </div>
</div>
</template>

<style scoped>

.button-container {
    margin-top: 50px;  /* isso empurrará o botão para baixo */
    padding-bottom: 2rem; /* espaço extra na parte inferior */
}


.content-quartasection{
    background-image: url("../../assets/elemento globo 1.svg");
    background-size: cover;
    background-position: end;
    background-repeat: no-repeat;
    height: 100vh;
   
    text-align: center;
    padding: 2.8rem ;
    
}
h1{
    color: #000000;
    font-family: tEKO , sans-serif;
    font-size: 2.5rem;
}
.content-row-cards{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50vh;
    gap: 1rem;
}
.content-call-end{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
</style>