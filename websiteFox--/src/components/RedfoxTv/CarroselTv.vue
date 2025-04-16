<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import carrosel1 from "../../assets/carrosel1.svg";
import carrosel2 from "../../assets/carrosel2.svg";
import carrosel3 from "../../assets/carrosel3.svg";
import carrosel4 from "../../assets/carrosel4.svg";
import carrosel5 from "../../assets/carrosel5.svg";

const slides = ref([
  { image: carrosel1, title: "Slide 1" },
  { image: carrosel2, title: "Slide 2" },
  { image: carrosel3, title: "Slide 3" },
  { image: carrosel4, title: "Slide 4" },
  { image: carrosel5, title: "Slide 5" },
]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

let interval;

onMounted(() => {
  interval = setInterval(nextSlide, 5000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="carousel">
    <div
      v-for="(item, index) in slides"
      :key="index"
      class="slide"
      :class="{ active: index === currentIndex }"
    >
      <img :src="item.image" :alt="'Slide ' + (index + 1)" />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  width: 100%;
  background-color: #db0e35;
  padding: 0 0px;
  margin: 0;
  overflow: hidden;
}

.slide {
  display: none;
  text-align: center;
  transition: opacity 0.5s ease;
}

.slide.active {
  display: block;
  animation: fade 0.5s ease;
}

@keyframes fade {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
