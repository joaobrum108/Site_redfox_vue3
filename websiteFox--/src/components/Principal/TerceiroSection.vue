<script setup>
import Card350 from "../Cards/350megas.vue"
import Card500 from "../Cards/500megas.vue"
</script>
<template>
    <div class="content-Banner-rosa">
        <Card350 />
        <Card500/>
    </div>
</template>
<style scoped>
.content-Banner-rosa{
    background-image: linear-gradient(to right, #db0e35, #c00a2e);
    height: 65vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
}
</style>