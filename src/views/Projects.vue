<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :enter="{ opacity: 1, scale: 1 }"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>
          <div class="flex space-x-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="bg-gray-200 px-2 py-1 rounded-full text-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'E-ticaret Platformu',
    description: 'Vue.js ile geliştirilmiş modern e-ticaret sitesi',
    image: 'project1.jpg',
    technologies: ['Vue.js', 'Vuex', 'TailwindCSS']
  },
  {
    id: 2,
    title: 'Task Yönetim Uygulaması',
    description: 'React ve Firebase ile geliştirilmiş proje yönetim uygulaması',
    image: 'project2.jpg',
    technologies: ['React', 'Firebase', 'Material-UI']
  }
]
</script>
