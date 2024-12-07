<template>
  <div class="slider-wrapper">
    <h2 class="section-title">Online Diyet Programları</h2>
    <p class="section-subtitle">Size en uygun programı seçin</p>

    <div class="pricing-container">
      <!-- İlk Kart -->
      <div class="price-card">
        <div class="plan-title">Tekli Paketi</div>
        <div class="duration">1 Seans</div>
        <div class="price-container">
          <div class="price-content">
            <div class="price">600₺<span>/Seans</span></div>
            <div class="divider"></div>
            <p class="profit-label">Öğrenci İndirimi İle</p>
            <p class="profit-detail">%50 İndirim Avantajı</p>
          </div>
          <div class="profit-content">
            <span class="profit-label">Toplam Kazanç</span>
            <span class="profit-value">0₺</span>
            <span class="profit-detail">4 Seans × 552₺</span>
            <div class="profit-divider"></div>
            <span class="profit-label">Toplam 2.208₺</span>
            <span class="profit-detail">Öğrenci İndirimi: 1.104₺</span>
          </div>
        </div>
      </div>
      <!-- İlk Kart -->
      <div class="price-card">
        <div class="plan-title">Başlangıç Paketi</div>
        <div class="duration">1 Ay / 4 Seans</div>
        <div class="price-container">
          <div class="price-content">
            <div class="price">552₺<span>/Seans</span></div>
            <div class="divider"></div>
            <p class="profit-label">Öğrenci İndirimi İle</p>
            <p class="profit-detail">%50 İndirim Avantajı</p>
          </div>
          <div class="profit-content">
            <span class="profit-label">Aylık Kazanç</span>
            <span class="profit-value">2.208₺</span>
            <span class="profit-detail">4 Seans × 552₺</span>
            <div class="profit-divider"></div>
            <span class="profit-label">Toplam 2.208₺</span>
            <span class="profit-detail">Öğrenci İndirimi: 1.104₺</span>
          </div>
        </div>
      </div>

      <!-- İkinci Kart -->
      <div class="price-card">
        <div class="ribbon">En Avantajlı</div>
        <div class="plan-title">Avantajlı Paket</div>
        <div class="duration">2 Ay / 8 Seans</div>
        <div class="price-container">
          <div class="price-content">
            <div class="price">528₺<span>/Seans</span></div>
            <div class="divider"></div>
            <p class="profit-label">Toplam 4.224₺</p>
            <p class="profit-detail">Öğrenci İndirimi: 2.112₺</p>
          </div>
          <div class="profit-content">
            <span class="profit-label">2 Aylık Kazanç</span>
            <span class="profit-value">4.224₺</span>
            <span class="profit-detail">8 Seans × 528₺</span>
            <div class="profit-divider"></div>
            <span class="profit-label">Öğrenci İndirimi İle</span>

            <span class="profit-detail">%50 İndirim Avantajı</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-wrapper {
  width: 100%;
  text-align: center;
  padding: 4rem 0;
  background: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: bold;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
}

.pricing-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.price-card {
  width: 100%;
  max-width: 350px;
  padding: 2rem;
  background: linear-gradient(145deg, var(--primary-color), #2980b9);
  border-radius: 20px;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.price-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.ribbon {
  position: absolute;
  top: 20px;
  right: -30px;
  transform: rotate(45deg);
  background: #e74c3c;
  color: white;
  padding: 5px 40px;
  font-size: 0.9rem;
  font-weight: bold;
}

.plan-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.duration {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.price-container {
  position: relative;
  min-height: 200px;
}

.price-content,
.profit-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 0.3s ease;
}

.price-content {
  opacity: 1;
}

.profit-content {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.price-card:hover .price-content {
  opacity: 0;
}

.price-card:hover .profit-content {
  opacity: 1;
}

.price {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
}

.price span {
  font-size: 1rem;
  opacity: 0.8;
}

.divider,
.profit-divider {
  width: 50px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  margin: 1rem auto;
}

.total,
.student {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.profit-label {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
}

.profit-value {
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
}

.profit-value.highlight {
  color: #2ecc71;
  text-shadow: 0 0 10px rgba(46, 204, 113, 0.3);
}

.profit-detail {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.details-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  border-radius: 25px;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
}

.details-btn:hover {
  background: white;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .price-card {
    max-width: 320px;
  }

  .plan-title {
    font-size: 1.5rem;
  }

  .price {
    font-size: 2rem;
  }

  .profit-value {
    font-size: 1.8rem;
  }

  .profit-label {
    font-size: 1rem;
  }

  .profit-detail {
    font-size: 0.8rem;
  }
}
</style>
