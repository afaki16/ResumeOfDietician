<template>
  <div id="app">
    <nav-bar />
    <main role="main">
      <hero-section />
      <about-section />
      <welcome-section />
      <logo-slider />
      <testimonial-section />
      <blog-section />
      <contact-section />
    </main>
    <site-footer />
  </div>
</template>

<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import BlogSection from './components/BlogSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import LogoSlider from './components/LogoSlider.vue'
import NavBar from './components/layout/Navbar.vue'
</script>
