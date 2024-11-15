<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      class="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 class="text-3xl font-bold mb-6">İş Deneyimi</h2>
      <div class="space-y-6">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="border-l-4 border-blue-500 pl-4 space-y-2"
        >
          <h3 class="text-xl font-semibold">{{ job.title }}</h3>
          <p class="text-gray-600">{{ job.company }}</p>
          <p class="text-sm text-gray-500">{{ job.date }}</p>
          <p class="text-gray-700">{{ job.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const jobs = [
  {
    title: 'Senior Frontend Developer',
    company: 'ABC Tech',
    date: '2020 - Şimdi',
    description: 'Vue.js ve React ile büyük ölçekli web uygulamaları geliştirdim.'
  },
  {
    title: 'Frontend Developer',
    company: 'XYZ Software',
    date: '2018 - 2020',
    description: 'JavaScript ve modern framework\'ler ile çalıştım.'
  }
]
</script>
