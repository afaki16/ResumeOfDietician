<template>
  <div class="slider-wrapper">
    <div class="logo-slider-container">
      <h2 class="mb-5">{{ title }}</h2>

      <div class="logo-slider" ref="sliderRef">
        <div class="slider-track">
          <div
            v-for="(logo, index) in duplicatedLogos"
            :key="index"
            class="logo-item"
          >
            <img :src="logo.image" :alt="logo.name" class="logo-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const title = ref('Kurumsal Referanslarımız')
const sliderRef = ref(null)

const logos = ref([
  {
    name: 'Koç Sistem',
    image: new URL('@/assets/images/references/koc.png', import.meta.url).href,
  },
  {
    name: 'İstanbulspor',
    image: new URL(
      '@/assets/images/references/istanbulspor.png',
      import.meta.url,
    ).href,
  },
  {
    name: 'Heltia',
    image: new URL('@/assets/images/references/heltia.png', import.meta.url)
      .href,
  },
  {
    name: 'Nilüfer',
    image: new URL('@/assets/images/references/nilüfer.png', import.meta.url)
      .href,
  },
])

const duplicatedLogos = computed(() => [
  ...logos.value,
  ...logos.value,
  ...logos.value,
])

let animationFrame = null
let scrollPosition = 0
const SCROLL_SPEED = 1

const animate = () => {
  if (sliderRef.value) {
    const track = sliderRef.value.querySelector('.slider-track')
    scrollPosition += SCROLL_SPEED
    if (scrollPosition >= track.scrollWidth / 3) {
      scrollPosition = 0
    }
    track.style.transform = `translateX(-${scrollPosition}px)`
    animationFrame = requestAnimationFrame(animate)
  }
}

onMounted(() => {
  animate()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>
<style scoped>
.slider-wrapper {
  width: 100%;
  text-align: center;
  padding: 40px 0;
  background-image: url('@/assets/images/Image.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.slider-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
}

.slider-wrapper > * {
  position: relative;
  z-index: 2;
}

.logo-slider-container {
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
}

.logo-slider {
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  width: fit-content;
  transition: transform 0.03s linear;
}

.logo-item {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  perspective: 1000px; /* 3D derinlik efekti için perspektif */
}

.logo-image {
  max-width: 120px;
  height: auto;
  transform: rotateY(15deg); /* Hafif bir 3D eğim */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Arkadaki beyazlığa karşı gölge */
  border-radius: 8px; /* Köşeleri yuvarlama */
  background: none; /* Beyaz arka planı kaldır */
}

.logo-item:hover .logo-image {
  transform: rotateY(0deg) scale(1.1); /* Üzerine gelince düz ve büyüt */
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .logo-image {
    max-width: 100px;
  }

  .logo-item {
    width: 50%;
    padding: 0 10px;
  }
}
</style>
