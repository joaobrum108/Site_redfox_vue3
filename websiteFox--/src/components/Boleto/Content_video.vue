<script setup></script>

<template>
  <div class="content-video">
    <h1>Aprenda a usar o PORTAL REDFOX!</h1>

    <div class="video-container">
      <iframe
        width="850"
        height="315"
        src="https://www.youtube.com/embed/8eFAXQbBgcA?si=g0RzvGHuR56oVxJb"
        title="Tutorial do Portal Redfox"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.content-video {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin: 0 auto;
  max-width: 980px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  .content-video {
    padding: 1rem;
  }
}
</style>
