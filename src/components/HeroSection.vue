<template>
  <section class="hero-section hero-section-full-height">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-12 p-0">
          <div id="hero-slide" class="carousel carousel-fade slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(slide, index) in slides"
                   :key="index"
                   :class="['carousel-item', index === 0 ? 'active' : '']">
                <img :src="slide.image" class="carousel-image img-fluid" :alt="slide.title">
                <div class="carousel-caption d-flex flex-column justify-content-end">
                  <h1>{{ slide.title }}</h1>
                  <p>{{ slide.description }}</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Carousel } from 'bootstrap'

const slides = ref([
  {
    image: new URL('@/assets/images/slide/vv.jpeg', import.meta.url).href,
    title: 'be a Kind Heart',
    description: 'Professional charity theme based on Bootstrap 5.2.2'
  },
  {
    image: new URL('@/assets/images/slide/last.jpeg', import.meta.url).href,
    title: 'Non-profit',
    description: 'You can support us to grow more'
  },
  {
    image: new URL('@/assets/images/slide/dd.jpeg', import.meta.url).href,
    title: 'Humanity',
    description: 'Please tell your friends about our website'
  }
])

onMounted(() => {
  new Carousel(document.getElementById('hero-slide'))
})
</script>
