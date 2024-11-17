<template>
  <section id="section_3" class="section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 text-center mb-4">
          <h2>{{ sectionTitle }}</h2>
        </div>

        <div v-for="(cause, index) in causes"
             :key="index"
             class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
          <div class="custom-block-wrap">
            <img :src="cause.image"
                 class="custom-block-image img-fluid"
                 :alt="cause.title">

            <div class="custom-block">
              <div class="custom-block-body">
                <h5 class="mb-3">{{ cause.title }}</h5>
                <p>{{ cause.description }}</p>

                <div class="progress mt-4">
                  <div class="progress-bar"
                       :style="{ width: `${cause.progress}%` }"
                       role="progressbar"
                       :aria-valuenow="cause.progress"
                       aria-valuemin="0"
                       aria-valuemax="100">
                  </div>
                </div>

                <div class="d-flex align-items-center my-2">
                  <p class="mb-0">
                    <strong>Raised:</strong> ${{ cause.raised.toLocaleString() }}
                  </p>
                  <p class="ms-auto mb-0">
                    <strong>Goal:</strong> ${{ cause.goal.toLocaleString() }}
                  </p>
                </div>
              </div>

              <a :href="cause.donateLink" class="custom-btn btn">Donate now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const sectionTitle = ref('Bilgilendiren Paylaşımalar')

const causes = ref([
  {
    title: 'Children Education',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito',
    image: new URL('@/assets/images/causes/group-african-kids-paying-attention-class.jpg', import.meta.url).href,
    progress: 75,
    raised: 18500,
    goal: 32000,
    donateLink: 'donate.html'
  },
  {
    title: 'Poverty Development',
    description: 'Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor',
    image: new URL('@/assets/images/causes/poor-child-landfill-looks-forward-with-hope.jpg', import.meta.url).href,
    progress: 50,
    raised: 27600,
    goal: 60000,
    donateLink: 'donate.html'
  },
  {
    title: 'Supply drinking water',
    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
    image: new URL('@/assets/images/causes/african-woman-pouring-water-recipient-outdoors.jpg', import.meta.url).href,
    progress: 100,
    raised: 84600,
    goal: 100000,
    donateLink: 'donate.html'
  }
])
</script>
