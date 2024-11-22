<template>
  <section id="section_3" class="section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 text-center mb-4">
          <h2>{{ sectionTitle }}</h2>
        </div>


      <div v-for="post in posts" :key="post.id" class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
          <div class="custom-block-wrap">
            <img src='@/assets/images/slide/vv.jpeg'
             class="fixed-size-image custom-block-image img-fluid"
                 alt="asdgasdf">
            <div class="custom-block">
              <div class="custom-block-body">
                <h5 class="mb-3">{{ post.title }}</h5>
                <div v-html="truncateContent(post.content)" class="post-content"></div>
                <div class="d-flex align-items-center my-2">
                  <p class="mb-0">
                    <strong>Raised:</strong> {{ formatDate(post.pubDate) }}
                  </p>
                  <p class="ms-auto mb-0">
                    <strong>Goal:</strong> {{ formatDate(post.pubDate) }}
                  </p>
                </div>
              </div>
              <a :href="post.link" target="_blank" class="custom-btn btn">Devamını Oku</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 </template>

 <script setup>
 import { ref, onMounted } from 'vue'

 const sectionTitle = ref('Bilgilendiren Paylaşımalar')
 const posts = ref([])
 const cleanContent = (content) => {
  // Medium'un eklediği tracking img'i kaldır
  content = content.replace(/<img src="https:\/\/medium.com\/_\/stat?.+?>/g, '')

  // Gereksiz boşlukları temizle
  return content.trim()
}

const truncateContent = (content) => {
  // HTML'i temizle
  content = cleanContent(content)

  // HTML etiketlerini kaldır ve metni al
  let plainText = content.replace(/<[^>]*>/g, '')

  // İlk 100 karakteri al
  let truncated = plainText.substring(0, 150)

  // Eğer metin kesilmişse "..." ekle
  if (plainText.length > 150) {
    truncated += '...'
  }

  return truncated
}




 const fetchPosts = async () => {
  try {
   debugger;
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zmpkmhdyfg`)
    const data = await response.json()
    posts.value = data.items

    console.log('alperenitem',posts)
  } catch (error) {
    console.error('Yazılar yüklenirken hata:', error)
  }
 }

 const formatDate = (date) => {
 return new Date(date).toLocaleDateString('tr-TR')
}
 onMounted(() => {

  fetchPosts()
 })
 </script>

 <style scoped>
 .posts-container {
  display: grid;
  gap: 20px;
  padding: 20px;
 }

 .post-card {
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 8px;
 }

 .post-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
 }

 .fixed-size-image {
  width: 500px;  /* sabit genişlik */
  height: 300px; /* sabit yükseklik */
  object-fit: cover; /* görüntüyü kırpmadan sığdırır */
}
.post-content {
  position: relative;
}
 </style>
