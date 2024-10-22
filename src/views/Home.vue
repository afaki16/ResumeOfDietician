<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      class="text-center"
    >
      <!-- <img
        src="your-image-url.jpg"
        alt="Profile"
        class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      /> -->
      <h1 class="text-4xl font-bold mb-2">İsim Soyisim</h1>
      <p class="text-xl text-gray-600 mb-6">Frontend Developer</p>
      <div class="flex justify-center space-x-4">
        <a href="#" class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
          CV İndir
        </a>
        <router-link to="/contact" class="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300">
          İletişime Geç
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
