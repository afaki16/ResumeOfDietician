<template>
  <section class="section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-12 text-center mx-auto">
          <h2 class="mb-5">{{ title }}</h2>
        </div>

        <div v-for="(block, index) in featuredBlocks"
             :key="index"
             :class="blockClasses">
          <div class="featured-block d-flex justify-content-center align-items-center">
            <a :href="block.link" class="d-block">
              <img :src="block.image" class="featured-block-image img-fluid" :alt="block.title">
              <p class="featured-block-text">
                <strong v-if="block.boldText">{{ block.boldText }}</strong>
                {{ block.text }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('Eğer Beraber Çalışırsak...')
const blockClasses = 'col-lg-3 col-md-6 col-12 mb-4 mb-lg-0'

const featuredBlocks = ref([
  {
    image: new URL('@/assets/images/icons/zayiflama.jpg', import.meta.url).href,
    link: 'donate.html',
    boldText: 'Zayıflama',
    text: 'Seçenekleri'
  },
  {
    image: new URL('@/assets/images/icons/kiloalma.jpg', import.meta.url).href,
    link: 'donate.html',
    boldText: 'Kilo Alma ',
    text: 'Seçenekleri'
  },
  {
    image: new URL('@/assets/images/icons/saglik.jpg', import.meta.url).href,
    link: 'donate.html',
    boldText: 'Sağlıklı ',
    text: 'Yaşam'
  },
  {
    image: new URL('@/assets/images/icons/sporcu.jpg', import.meta.url).href,
    link: 'donate.html',
    boldText: 'Sporcu ',
    text: 'Beslenmesi'
  }
])
</script>
