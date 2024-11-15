<template>
  <div id="app">
    <site-header />
    <main role="main">
      <hero-section />
      <welcome-section />
      <about-section />
      <causes-section />
      <volunteer-section />
      <news-section />
      <testimonial-section />
      <contact-section />
    </main>
    <site-footer />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import CausesSection from './components/CausesSection.vue'
import VolunteerSection from './components/VolunteerSection.vue'
import NewsSection from './components/NewsSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
