<template>
  <section class="section testimonial-section section-padding section-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="mb-lg-3">{{ sectionTitle }}</h2>

          <!-- Testimonial Carousel -->
          <div
            id="testimonial-carousel"
            class="carousel carousel-fade slide"
            data-bs-ride="carousel"
          >
            <!-- Carousel İçerik -->
            <div class="carousel-inner">
              <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                :class="['carousel-item', index === 0 ? 'active' : '']"
              >
                <div class="carousel-caption">
                  <h4 class="carousel-title">
                    {{ testimonial.content }}
                  </h4>
                  <small>
                    <span class="carousel-name-title">{{
                      testimonial.name
                    }}</span
                    >,
                    {{ testimonial.position }}
                  </small>
                </div>
              </div>
            </div>

            <!-- Avatar Göstergeleri -->
            <ol class="carousel-indicators">
              <li
                v-for="(testimonial, index) in testimonials"
                :key="index"
                :class="{ active: index === 0 }"
                :data-bs-target="'#testimonial-carousel'"
                :data-bs-slide-to="index"
              >
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="img-fluid rounded-circle avatar-image"
                />
              </li>
            </ol>

            <!-- Kontrol Butonları -->
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#testimonial-carousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#testimonial-carousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
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

const sectionTitle = ref('Danışan Görüşleri')

// Testimonial verileri
const testimonials = ref([
  {
    name: 'Maria',
    position: 'Boss',
    content:
      'Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme',
    avatar: new URL(
      '@/assets/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg',
      import.meta.url,
    ).href,
  },
  {
    name: 'Thomas',
    position: 'Partner',
    content:
      'Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci',
    avatar: new URL(
      '@/assets/images/avatar/portrait-young-redhead-bearded-male.jpg',
      import.meta.url,
    ).href,
  },
  {
    name: 'Jane',
    position: 'Advisor',
    content:
      'Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme',
    avatar: new URL(
      '@/assets/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg',
      import.meta.url,
    ).href,
  },
  {
    name: 'Bob',
    position: 'Entreprenuer',
    content:
      'Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci',
    avatar: new URL(
      '@/assets/images/avatar/studio-portrait-emotional-happy-funny.jpg',
      import.meta.url,
    ).href,
  },
])

// Carousel başlatma
onMounted(() => {
  const carouselElement = document.getElementById('testimonial-carousel')
  if (carouselElement) {
    new Carousel(carouselElement, {
      interval: 5000, // 5 saniye otomatik geçiş
      touch: true, // dokunmatik destek
      pause: 'hover', // hover'da durdurma
    })
  }
})
</script>

<style scoped>
.testimonial-section {
  position: relative;
  overflow: hidden;
}

.carousel-caption {
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2rem;
  text-align: center;
  color: var(--dark-color);
}

.carousel-title {
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.carousel-name-title {
  font-weight: 600;
}

/* Avatar Göstergeleri Stili */
.carousel-indicators {
  position: relative;
  margin: 2rem 0;
  justify-content: center;
  gap: 1rem;
}

.carousel-indicators li {
  width: 60px;
  height: 60px;
  margin: 0;
  border-radius: 50%;
  opacity: 0.5;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.carousel-indicators li.active {
  opacity: 1;
  border-color: var(--primary-color);
  transform: scale(1.1);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Kontrol Butonları Stili */
.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.7;
}

.carousel-control-prev {
  left: 1rem;
}

.carousel-control-next {
  right: 1rem;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
  background-color: var(--primary-color);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 20px;
  height: 20px;
}

/* Responsive Tasarım */
@media (max-width: 768px) {
  .carousel-title {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .carousel-indicators li {
    width: 45px;
    height: 45px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
}

/* Animasyonlar */
.carousel-item {
  transition: opacity 0.5s ease-in-out;
}

.carousel-item.active {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script></script>
