<template>
  <section id="section_4" class="section volunteer-section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <h2 class="text-white mb-4">{{ title }}</h2>
          <h3 class="text-white mb-4">{{ subtitle }}</h3>

          <form class="custom-form volunteer-form" @submit.prevent="handleSubmit">
            <div class="row">
              <div class="col-lg-6 col-12">
                <input type="text"
                       v-model="formData.name"
                       class="form-control"
                       placeholder="Name"
                       required>
              </div>

              <div class="col-lg-6 col-12">
                <input type="email"
                       v-model="formData.email"
                       class="form-control"
                       placeholder="Email"
                       required>
              </div>

              <div class="col-lg-6 col-12">
                <input type="text"
                       v-model="formData.subject"
                       class="form-control"
                       placeholder="Subject"
                       required>
              </div>

              <div class="col-lg-6 col-12">
                <div class="input-group input-group-file">
                  <input type="file"
                         class="form-control"
                         @change="handleFileUpload"
                         accept=".pdf,.doc,.docx">
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload your CV
                  </label>
                </div>
              </div>
            </div>

            <textarea v-model="formData.message"
                      class="form-control"
                      rows="5"
                      placeholder="Comment (Optional)"></textarea>

            <button type="submit" class="custom-btn btn">Submit</button>
          </form>
        </div>

        <div class="col-lg-6 col-12">
          <img :src="volunteerImage"
               class="volunteer-image img-fluid"
               alt="Volunteer">

          <div class="custom-block-body text-center">
            <h4 class="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>
            <p class="text-white">{{ aboutText }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const title = ref('Volunteer')
const subtitle = ref('Become a volunteer today')
const aboutText = ref('Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based')
const volunteerImage = new URL('@/assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg', import.meta.url).href

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  cv: null
})

const handleFileUpload = (event) => {
  formData.cv = event.target.files[0]
}

const handleSubmit = async () => {
  try {
    // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
    console.log('Form submitted:', formData)

    // FormData objesi oluşturarak dosya yüklemesi yapabilirsiniz
    const submitData = new FormData()
    submitData.append('name', formData.name)
    submitData.append('email', formData.email)
    submitData.append('subject', formData.subject)
    submitData.append('message', formData.message)
    if (formData.cv) {
      submitData.append('cv', formData.cv)
    }

    // API çağrısı örneği:
    // const response = await fetch('/api/volunteer', {
    //   method: 'POST',
    //   body: submitData
    // })

    // Form başarıyla gönderildikten sonra formu temizle
    Object.keys(formData).forEach(key => formData[key] = '')

    // Başarı mesajı göster
    alert('Thank you for volunteering! We will contact you soon.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('An error occurred. Please try again.')
  }
}
</script>

<style scoped>
.volunteer-section {
  background: var(--section-bg-color);
  position: relative;
  overflow: hidden;
}

.volunteer-form {
  background: var(--white-color);
  padding: 35px;
  border-radius: var(--border-radius-medium);
}

.volunteer-image {
  border-radius: var(--border-radius-medium);
  vertical-align: top;
}

.input-group-file {
  border-radius: var(--border-radius-small);
  position: relative;
  overflow: hidden;
}

.input-group-file input[type="file"] {
  position: relative;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
}

.input-group-file label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--grey-color);
  color: var(--white-color);
  cursor: pointer;
}
</style>
