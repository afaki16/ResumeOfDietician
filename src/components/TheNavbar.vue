<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div class="flex items-center py-4">
            <router-link to="/" class="font-bold text-xl">Portfolio</router-link>
          </div>
          <div class="flex items-center space-x-1">
            <router-link
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="py-4 px-2 hover:text-blue-500 transition duration-300"
              :class="{ 'text-blue-500': route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımda', path: '/about' },
  { name: 'Deneyim', path: '/experience' },
  { name: 'Projeler', path: '/projects' },
  { name: 'İletişim', path: '/contact' }
]
</script>
