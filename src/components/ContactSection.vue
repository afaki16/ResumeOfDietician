<template>
  <section id="section_6" class="section contact-section section-padding">
    <div class="container">
      <div class="row">
        <!-- İletişim Bilgileri Kartı -->
        <div class="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
          <div class="contact-info-wrap">
            <h2>{{ title }}</h2>

            <!-- Kişi Bilgileri -->
            <div class="contact-image-wrap d-flex flex-wrap">
              <img
                :src="contactPerson.image"
                class="img-fluid avatar-image"
                :alt="contactPerson.name">

              <div class="d-flex flex-column justify-content-center ms-3">
                <h6 class="mb-0">{{ contactPerson.name }}</h6>
                <p class="mb-0">{{ contactPerson.position }}</p>
              </div>
            </div>

            <!-- İletişim Detayları -->
            <div class="contact-info">
              <h5 class="mb-3">Contact Information</h5>

              <div class="d-flex flex-wrap">
                <div class="contact-info-item" v-for="(info, index) in contactInfo" :key="index">
                  <div class="contact-info-icon">
                    <i :class="info.icon"></i>
                  </div>
                  <div class="contact-info-text">
                    <template v-if="info.type === 'link'">
                      <a :href="info.href" :class="info.linkClass">{{ info.text }}</a>
                    </template>
                    <template v-else>
                      <p>{{ info.text }}</p>
                    </template>
                  </div>
                </div>
              </div>

              <a href="#"
                 class="custom-btn btn mt-3"
                 @click.prevent="handleGetDirection">
                Get Direction
              </a>
            </div>
          </div>
        </div>

        <!-- İletişim Formu -->
        <div class="col-lg-5 col-12 mx-auto">
          <form class="custom-form contact-form"
                @submit.prevent="handleSubmit"
                ref="contactForm">
            <h2>{{ formTitle }}</h2>

            <p class="mb-4">
              Or, you can just send an email:
              <a href="mailto:info@charity.org" class="text-primary">info@charity.org</a>
            </p>

            <div class="row">
              <!-- İsim Alanı -->
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="formData.name"
                    class="form-control"
                    placeholder="Name"
                    required>
                  <label for="name">Name</label>
                </div>
              </div>

              <!-- Email Alanı -->
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-floating">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="formData.email"
                    class="form-control"
                    placeholder="Email"
                    required>
                  <label for="email">Email</label>
                </div>
              </div>

              <!-- Konu Alanı -->
              <div class="col-lg-12 col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    v-model="formData.subject"
                    class="form-control"
                    placeholder="Subject"
                    required>
                  <label for="subject">Subject</label>
                </div>
              </div>

              <!-- Mesaj Alanı -->
              <div class="col-lg-12 col-12">
                <div class="form-floating">
                  <textarea
                    id="message"
                    name="message"
                    v-model="formData.message"
                    class="form-control"
                    placeholder="Message"
                    required
                    style="height: 120px"></textarea>
                  <label for="message">Message</label>
                </div>
              </div>

              <!-- Gönder Butonu -->
              <div class="col-lg-12 col-12">
                <button type="submit" class="form-control" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Başarı Mesajı Modal -->
    <div class="modal fade"
         id="successModal"
         tabindex="-1"
         ref="successModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Success!</h5>
            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Your message has been sent successfully. We'll get back to you soon!
          </div>
          <div class="modal-footer">
            <button type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Modal } from 'bootstrap'

// Başlıklar
const title = ref('Get in touch')
const formTitle = ref('Contact form')

// İletişim kişisi bilgileri
const contactPerson = ref({
  name: 'Clara Barton',
  position: 'HR & Office Manager',
  image: new URL('@/assets/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg', import.meta.url).href
})

// İletişim bilgileri
const contactInfo = ref([
  {
    type: 'text',
    icon: 'bi bi-geo-alt',
    text: 'Akershusstranda 20, 0150 Oslo, Norway'
  },
  {
    type: 'link',
    icon: 'bi bi-telephone',
    text: '120-240-9600',
    href: 'tel: 120-240-9600',
    linkClass: 'contact-link'
  },
  {
    type: 'link',
    icon: 'bi bi-envelope',
    text: 'donate@charity.org',
    href: 'mailto:donate@charity.org',
    linkClass: 'contact-link'
  }
])

// Form verisi
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const contactForm = ref(null)
const successModal = ref(null)

// Form gönderimi
const handleSubmit = async () => {
  try {
    isSubmitting.value = true

    // API çağrısı simülasyonu
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Form verilerini konsola yazdır (gerçek uygulamada API'ye gönderilecek)
    console.log('Form submitted:', formData)

    // Formu temizle
    Object.keys(formData).forEach(key => formData[key] = '')

    // Başarı modalını göster
    const modal = new Modal(successModal.value)
    modal.show()

  } catch (error) {
    console.error('Error submitting form:', error)
    alert('An error occurred. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// Yol tarifi
const handleGetDirection = () => {
  // Google Maps URL'si
  const address = encodeURIComponent('Akershusstranda 20, 0150 Oslo, Norway')
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`
  window.open(mapsUrl, '_blank')
}
</script>

<style scoped>
.contact-section {
  background: var(--section-bg-color);
}

.contact-info-wrap {
  background: var(--white-color);
  border-radius: var(--border-radius-medium);
  padding: 2rem;
}

.contact-image-wrap {
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
}

.avatar-image {
  border-radius: var(--border-radius-medium);
  width: 75px;
  height: 75px;
  object-fit: cover;
}

.contact-info {
  padding-top: 1rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
}

.contact-info-icon {
  background: var(--secondary-color);
  border-radius: var(--border-radius-small);
  color: var(--white-color);
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.contact-info-text {
  flex: 1;
}

.contact-link {
  color: var(--p-color);
  text-decoration: none;
  transition: all 0.3s;
}

.contact-link:hover {
  color: var(--primary-color);
}

/* Form Stilleri */
.contact-form {
  background: var(--white-color);
  border-radius: var(--border-radius-medium);
  padding: 2rem;
}

.form-floating {
  margin-bottom: 1rem;
}

.form-control {
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-small);
  box-shadow: none;
  padding: 1rem;
  transition: all 0.3s;
}

.form-control:hover,
.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.25rem rgb(var(--primary-rgb) / 25%);
}

textarea.form-control {
  min-height: 120px;
}

.form-floating > label {
  padding: 1rem;
}

button[type="submit"] {
  background: var(--primary-color);
  border: none;
  border-radius: var(--border-radius-large);
  color: var(--white-color);
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 1rem;
}

button[type="submit"]:hover {
  background: var(--custom-btn-bg-hover-color);
}

button[type="submit"]:disabled {
  background: var(--border-color);
  cursor: not-allowed;
}

/* Modal Stilleri */
.modal-content {
  border-radius: var(--border-radius-medium);
}

.modal-header {
  border-bottom: none;
  padding-bottom: 0;
}

.modal-footer {
  border-top: none;
  padding-top: 0;
}

/* Responsive */
@media (max-width: 991px) {
  .contact-info-wrap {
    margin-bottom: 2rem;
  }
}

@media (max-width: 576px) {
  .contact-form,
  .contact-info-wrap {
    padding: 1rem;
  }
}
</style>
