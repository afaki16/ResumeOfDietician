<template>
  <div class="slider-wrapper">
    <h2 class="mb-lg-3">Kurumsal Referanslarımız</h2>
    <div class="logo-slider-container">
      <div
        class="logo-slider"
        :style="{ transform: `translateX(-${currentPosition}%)` }"
      >
        <div v-for="(logo, index) in logos" :key="index" class="logo-item">
          <img :src="logo.image" :alt="logo.name" class="logo-image" />
        </div>
        <!-- Sonsuz döngü için logoları tekrar ekliyoruz -->
        <div
          v-for="(logo, index) in logos"
          :key="`duplicate-${index}`"
          class="logo-item"
        >
          <img :src="logo.image" :alt="logo.name" class="logo-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentPosition = ref(0)
const interval = ref(null)
const logos = ref([
  { name: 'Koç Sistem', image: '@/assets/images/icons/zayiflama.jpg' },
  { name: 'Pharmacy', image: '@/assets/images/icons/zayiflama.jpg' },
  { name: 'Healthcare', image: '/healthcare-logo.png' },
  { name: 'Central Hospital', image: '/central-hospital-logo.png' },
  { name: 'Panacea Clinic', image: '/panacea-clinic-logo.png' },
])

const startSlider = () => {
  interval.value = setInterval(() => {
    if (currentPosition.value >= 100) {
      currentPosition.value = 0
    } else {
      currentPosition.value += 20
    }
  }, 3000)
}

const stopSlider = () => {
  if (interval.value) {
    clearInterval(interval.value)
  }
}

onMounted(() => {
  startSlider()
})

onBeforeUnmount(() => {
  stopSlider()
})
</script>

<style scoped>
.slider-wrapper {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background: #f8f9fa;
}

.title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

/* Başlık altına dekoratif çizgi */
.title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: #3498db;
}

.logo-slider-container {
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
}

.logo-slider {
  display: flex;
  transition: transform 0.5s ease;
  width: 200%;
  gap: 5px; /* Logolar arası boşluğu azalttık */
}

.logo-item {
  flex: 0 0 18%; /* Logo genişliğini azalttık */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px; /* Padding'i azalttık */
}

.logo-image {
  max-width: 120px; /* Logo boyutunu küçülttük */
  height: auto;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.logo-image:hover {
  filter: grayscale(0%);
  transform: scale(1.1); /* Hover efektini geliştirdik */
}

/* Responsive tasarım için */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }

  .logo-image {
    max-width: 100px;
  }

  .logo-item {
    flex: 0 0 20%;
    padding: 0 5px;
  }
}
</style>
