<template>
  <div id="app">
    <site-header />
    <nav-bar/>
    <main role="main">
      <hero-section />
      <welcome-section />
      <about-section />
      <causes-section />
      <testimonial-section />
      <volunteer-section />
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
import CausesSection from './components/CausesSection.vue'
import VolunteerSection from './components/VolunteerSection.vue'

import TestimonialSection from './components/TestimonialSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import NavBar from './components/layout/Navbar.vue'
</script>
