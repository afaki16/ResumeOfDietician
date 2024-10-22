<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :enter="{ opacity: 1, x: 0 }"
      class="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 class="text-3xl font-bold mb-4">Hakkımda</h2>
      <p class="text-gray-600 mb-4">
        Frontend geliştirici olarak 5 yıllık deneyime sahibim. Modern web teknolojileri
        konusunda uzmanım ve kullanıcı deneyimini en üst düzeye çıkarmak için çalışıyorum.
      </p>
      <div class="grid grid-cols-2 gap-4 mt-6">
        <div class="skill-item">
          <h3 class="font-semibold mb-2">Yetenekler</h3>
          <ul class="list-disc list-inside">
            <li>Vue.js</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div class="education-item">
          <h3 class="font-semibold mb-2">Eğitim</h3>
          <p>Bilgisayar Mühendisliği</p>
          <p class="text-sm text-gray-500">XYZ Üniversitesi, 2018</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
