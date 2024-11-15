<template>
  <section id="section_2" class="section section-padding section-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
          <img :src="aboutImage" class="custom-text-box-image img-fluid" alt="About Us">
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
                <h5 class="mb-3">Our Mission</h5>
                <p>{{ mission }}</p>
                <ul>
                  <li v-for="(item, index) in missionItems" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-12">
              <div class="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                <counter-block v-for="(counter, index) in counters"
                             :key="index"
                             :number="counter.number"
                             :text="counter.text"
                             :suffix="counter.suffix" />
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

const aboutImage = new URL('@/assets/images/group-people-volunteering-foodbank-poor-people.jpg', import.meta.url).href
const title = ref('Our Story')
const subtitle = ref('Kind Heart Charity, Non-Profit Organization')
const description = ref('This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it.')
const mission = ref('Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus')
const missionItems = ref(['Charity Theme', 'Semantic HTML'])

const counters = ref([
  {
    number: 2009,
    text: 'Founded',
    suffix: ''
  },
  {
    number: 120,
    text: 'Donations',
    suffix: 'B'
  }
])
</script>
