<template>
  <header class="site-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 d-flex flex-wrap">
          <p>{{ address }}</p>
          <p><a :href="'mailto:' + email">{{ email }}</a></p>
        </div>
        <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
          <ul class="social-icon">
            <li v-for="(link, index) in socialLinks" :key="index">
              <a :href="link.url" :class="['social-icon-link', link.icon]"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const address = ref('Akershusstranda 20, 0150 Oslo, Norway')
const email = ref('info@company.com')
const socialLinks = ref([
  { icon: 'bi-twitter', url: '#' },
  { icon: 'bi-facebook', url: '#' },
  { icon: 'bi-instagram', url: '#' },
  { icon: 'bi-youtube', url: '#' },
  { icon: 'bi-whatsapp', url: '#' }
])
</script>
