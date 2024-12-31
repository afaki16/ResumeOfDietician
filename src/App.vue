<template>
  <div id="app">
    <nav-bar />
    <main role="main">
      <welcome-section />
      <about-section />
      <card-section />
      <logo-slider />
      <price-section />
      <blog-section />
      <contact-section />
    </main>
    <site-footer />
  </div>
</template>

<script setup>
import CardSection from './components/CardSection.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import BlogSection from './components/BlogSection.vue'
import PriceSection from './components/PriceSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import LogoSlider from './components/LogoSlider.vue'
import NavBar from './components/layout/Navbar.vue'
</script>
