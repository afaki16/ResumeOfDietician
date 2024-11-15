<template>
  <section id="section_5" class="news-section section-padding">
    <div class="container">
      <!-- Başlık Satırı -->
      <div class="row">
        <div class="col-lg-12 col-12 mb-5">
          <h2>{{ sectionTitle }}</h2>
        </div>

        <!-- Ana Haberler Bölümü -->
        <div class="col-lg-7 col-12">
          <div v-for="(news, index) in mainNews"
               :key="index"
               class="news-block"
               :class="{ 'mt-3': index > 0 }">
            <!-- Haber Üst Kısmı -->
            <div class="news-block-top">
              <a :href="news.link">
                <img :src="news.image"
                     class="news-image img-fluid"
                     :alt="news.title">
              </a>

              <!-- Kategori Etiketleri -->
              <div class="news-category-block">
                <a v-for="(category, catIndex) in news.categories"
                   :key="catIndex"
                   :href="category.link"
                   class="category-block-link">
                  {{ category.name }}{{ catIndex < news.categories.length - 1 ? ',' : '' }}
                </a>
              </div>
            </div>

            <!-- Haber Bilgi Kısmı -->
            <div class="news-block-info">
              <div class="d-flex mt-2">
                <div class="news-block-date">
                  {{ news.date }}
                </div>
                <div class="news-block-author mx-5">
                  {{ news.author }}
                </div>
                <div class="news-block-comment">
                  {{ news.comments }} Comments
                </div>
              </div>

              <div class="news-block-title mb-2">
                <h4>
                  <a :href="news.link" class="news-block-title-link">
                    {{ news.title }}
                  </a>
                </h4>
              </div>

              <div class="news-block-body">
                <p>{{ news.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sağ Kenar Çubuğu -->
        <div class="col-lg-4 col-12 mx-auto">
          <!-- Son Haberler -->
          <h5 class="mt-5 mb-3">Recent news</h5>

          <div v-for="(recent, index) in recentNews"
               :key="index"
               class="news-block news-block-two-col d-flex mt-4">
            <div class="news-block-two-col-image-wrap">
              <a :href="recent.link">
                <img :src="recent.image"
                     class="news-image img-fluid"
                     :alt="recent.title">
              </a>
            </div>

            <div class="news-block-two-col-info">
              <div class="news-block-title mb-2">
                <h6>
                  <a :href="recent.link" class="news-block-title-link">
                    {{ recent.title }}
                  </a>
                </h6>
              </div>

              <div class="news-block-date">
                {{ recent.date }}
              </div>
            </div>
          </div>

          <!-- Kategoriler -->
          <div class="category-block d-flex flex-column mt-5">
            <h5 class="mb-3">Categories</h5>

            <a v-for="(category, index) in categories"
               :key="index"
               :href="category.link"
               class="category-block-link">
              {{ category.name }}
              <span class="badge">{{ category.count }}</span>
            </a>
          </div>

          <!-- Etiketler -->
          <div class="tags-block mt-5">
            <h5 class="mb-3">Tags</h5>

            <a v-for="(tag, index) in tags"
               :key="index"
               :href="tag.link"
               class="tags-block-link">
              {{ tag.name }}
            </a>
          </div>

          <!-- Bülten Formu -->
          <div class="newsletter-form mt-5">
            <h5 class="mb-4">Newsletter Form</h5>
            <form @submit.prevent="handleSubscribe" class="custom-form">
              <input
                type="email"
                v-model="newsletterEmail"
                class="form-control"
                placeholder="Email Address"
                required>
              <button type="submit" class="form-control">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Başlık
const sectionTitle = ref('Latest News')
const newsletterEmail = ref('')

// Ana Haberler
const mainNews = ref([
  {
    title: 'Clothing donation to urban area',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based on Bootstrap',
    image: new URL('@/assets/images/news/medium-shot-volunteers-with-clothing-donations.jpg', import.meta.url).href,
    link: 'news-detail.html',
    categories: [
      { name: 'Lifestyle', link: '#' },
      { name: 'Clothing Donation', link: '#' }
    ],
    date: 'October 12, 2036',
    author: 'By Admin',
    comments: 32
  },
  {
    title: 'Food donation area',
    description: 'Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci',
    image: new URL('@/assets/images/news/medium-shot-people-collecting-foodstuff.jpg', import.meta.url).href,
    link: 'news-detail.html',
    categories: [
      { name: 'Food', link: '#' },
      { name: 'Donation', link: '#' },
      { name: 'Caring', link: '#' }
    ],
    date: 'October 20, 2036',
    author: 'By Admin',
    comments: 35
  }
])

// Son Haberler
const recentNews = ref([
  {
    title: 'Food donation area',
    image: new URL('@/assets/images/news/africa-humanitarian-aid-doctor.jpg', import.meta.url).href,
    link: 'news-detail.html',
    date: 'October 16, 2036'
  },
  {
    title: 'Volunteering Clean',
    image: new URL('@/assets/images/news/close-up-happy-people-working-together.jpg', import.meta.url).href,
    link: 'news-detail.html',
    date: 'October 24, 2036'
  }
])

// Kategoriler
const categories = ref([
  { name: 'Drinking water', count: 20, link: '#' },
  { name: 'Food Donation', count: 30, link: '#' },
  { name: 'Children Education', count: 10, link: '#' },
  { name: 'Poverty Development', count: 15, link: '#' },
  { name: 'Clothing Donation', count: 20, link: '#' }
])

// Etiketler
const tags = ref([
  { name: 'Donation', link: '#' },
  { name: 'Clothing', link: '#' },
  { name: 'Food', link: '#' },
  { name: 'Children', link: '#' },
  { name: 'Education', link: '#' },
  { name: 'Poverty', link: '#' },
  { name: 'Clean Water', link: '#' }
])

// Bülten Aboneliği
const handleSubscribe = () => {
  console.log('Newsletter subscription:', newsletterEmail.value)
  // Burada API çağrısı yapılabilir
  alert('Thank you for subscribing!')
  newsletterEmail.value = ''
}
</script>

<style scoped>
.news-section {
  background-color: var(--section-bg-color);
  padding: 80px 0;
}

.news-block {
  background: var(--white-color);
  border-radius: var(--border-radius-medium);
  padding: 20px;
  margin-bottom: 24px;
}

.news-block-top {
  position: relative;
}

.news-image {
  border-radius: var(--border-radius-medium);
  display: block;
  width: 100%;
  height: auto;
}

.news-category-block {
  background: var(--primary-color);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 10px 20px;
}

.category-block-link {
  color: var(--white-color);
  text-decoration: none;
  margin-right: 10px;
}

.news-block-info {
  padding: 20px 0;
}

.news-block-title-link {
  color: var(--primary-color);
  text-decoration: none;
}

.news-block-two-col {
  align-items: center;
  background: var(--white-color);
  border-radius: var(--border-radius-medium);
  padding: 10px;
}

.news-block-two-col-image-wrap {
  margin-right: 20px;
}

.tags-block-link {
  background: var(--white-color);
  border-radius: var(--border-radius-medium);
  display: inline-block;
  font-size: var(--copyright-text-font-size);
  line-height: 1.5;
  margin: 6px 3px;
  padding: 4px 12px;
  text-decoration: none;
}

.newsletter-form .form-control {
  margin-bottom: 10px;
  padding: 10px;
}

.newsletter-form button {
  background: var(--primary-color);
  color: var(--white-color);
  border: none;
}
</style>
