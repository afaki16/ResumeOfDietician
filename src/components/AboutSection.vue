<template>
  <section id="section_2" class="section section-padding section-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
          <img
            :src="aboutImage"
            class="custom-text-box-image img-fluid"
            alt="About Us"
          />
        </div>

        <div class="col-lg-6 col-12">
          <div class="custom-text-box">
            <h2 class="mb-2">{{ title }}</h2>
            <h5 class="mb-3">{{ subtitle }}</h5>
            <p class="mb-0">{{ description }}</p>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="custom-text-box mb-lg-0">
                <h5 class="mb-3">Uzmanlık Alanlarım</h5>
                <p>{{ mission }}</p>
                <ul class="custom-list">
                  <li v-for="(item, index) in missionItems" :key="index">
                    <span class="check-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <div class="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                <counter-block
                  v-for="(counter, index) in counters"
                  :key="index"
                  :number="counter.number"
                  :text="counter.text"
                  :suffix="counter.suffix"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CounterBlock from './CounterBlock.vue'

const aboutImage = new URL('@/assets/images/Image.jpeg', import.meta.url).href
const title = ref('Hakkımda')
const subtitle = ref('Eğitim')
const description = ref(
  'Merhaba ben Diyetisyen Nisa Sakar. Lisans eğitimimi İstanbul Arel Üniversite Beslenme ve Diyetetik bölümü ile tamamlamış bulunmaktayım. Staj eğitimimi İstanbulspor Kulübü Futbol A takımı ile gerçekleştirdim. Bitirme tezimi sporcularda supplement kullanımı üzerine yazdım. Diyeti bir yaşam biçimi haline getirerek danışanlarıma sürdürülebilir sağlık üzerine yaşamı adapte etmek en büyük hedeflerim arasındadır.',
)
const mission = ref('Danışanlarımla paylaştığım uzmanlık alanlarım :')
const missionItems = ref([
  'Obezite',
  'Kurumsal Beslenme Danışmanlığı',
  'Kilo Alma',
  'Kilo Verme',
  'Aralıklı Oruç',
  'Kilo Kontrolü',
  'Hastalıklarda Beslenme',
  'Ketojenik Beslenme',
  'Çocuk ve Ergenlikte Beslenme',
  'Vejeteryan ve Vegan Beslenme',
])

const counters = ref([
  {
    number: 1000,
    text: 'Kaybedilen Kilo',
    suffix: 'Kg',
  },
  {
    number: 120,
    text: 'Danışan Sayısı',
    suffix: '',
  },
])
</script>
<style scoped>
.custom-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.custom-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 700; /* Yazı kalınlığı artırıldı */
  font-size: 1.1rem; /* Yazı boyutu artırıldı */
  gap: 12px;
}

.check-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  background-color: var(--primary-color);
  border-radius: 50%;
  padding: 5px;
}

.check-circle svg {
  width: 12px;
  height: 12px;
}
</style>
