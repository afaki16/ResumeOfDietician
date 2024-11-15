<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <!-- Logo ve Marka -->
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/images/logo.png" class="logo img-fluid" alt="Kind Heart Charity">
        Kind Heart Charity
        <small class="small">Non-profit Organization</small>
      </router-link>

      <!-- Mobil Menü Butonu -->
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigasyon Menüsü -->
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li v-for="(item, index) in menuItems"
              :key="index"
              class="nav-item">
            <template v-if="item.children">
              <!-- Dropdown Menü -->
              <a class="nav-link click-scroll dropdown-toggle"
                 href="#"
                 :id="item.id"
                 role="button"
                 data-bs-toggle="dropdown"
                 aria-expanded="false">
                {{ item.text }}
              </a>
              <ul class="dropdown-menu" :aria-labelledby="item.id">
                <li v-for="(child, childIndex) in item.children"
                    :key="childIndex">
                  <router-link :to="child.link" class="dropdown-item">
                    {{ child.text }}
                  </router-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <!-- Normal Menü Öğesi -->
              <a v-if="item.scroll"
                 :href="item.link"
                 class="nav-link click-scroll"
                 @click="scrollToSection(item.link)">
                {{ item.text }}
              </a>
              <router-link v-else
                          :to="item.link"
                          :class="['nav-link', item.classes]">
                {{ item.text }}
              </router-link>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { text: 'Home', link: '#top', scroll: true },
  { text: 'About', link: '#section_2', scroll: true },
  { text: 'Causes', link: '#section_3', scroll: true },
  { text: 'Volunteer', link: '#section_4', scroll: true },
  {
    text: 'News',
    id: 'navbarLightDropdownMenuLink',
    children: [
      { text: 'News Listing', link: '/news' },
      { text: 'News Detail', link: '/news-detail' }
    ]
  },
  { text: 'Contact', link: '#section_6', scroll: true },
  { text: 'Donate', link: '/donate', classes: 'nav-link custom-btn custom-border-btn btn' }
])

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.navbar {
  background: var(--white-color);
  padding: 20px;
  transition: all 0.3s;
}

.navbar-brand {
  font-size: var(--h5-font-size);
  font-weight: var(--font-weight-bold);
  color: var(--dark-color);
  text-transform: uppercase;
  padding-top: 0;
  padding-bottom: 0;
}

.logo {
  max-width: 120px;
  margin-right: 15px;
}

.navbar .custom-btn {
  padding: 8px 20px;
}

@media screen and (max-width: 991px) {
  .navbar-brand {
    font-size: var(--h6-font-size);
  }

  .navbar .custom-btn {
    margin-top: 10px;
  }
}
</style>
