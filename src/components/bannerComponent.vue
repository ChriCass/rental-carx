<template>
  <section class="bg">
    <main class="container padding-extreme">
      <img
        src="../assets/img/bg.png"
        alt="bg"
        class="d-none d-sm-none d-md-none d-lg-none d-xl-block bg-shape"
      />
      <div class="row">
        <div
          class="col-12 col-md-12 text-center text-sm-center text-md-center text-lg-center text-xl-start col-lg-12 col-xl-5  pb-5 d-flex justify-content-center justify-content-sm-center justify-content-lg-center justify-content-xl-start flex-column align-items-lg-center align-items-xl-start"
        >
          <h5 class="fw-bold">Plan your trip now</h5>
          <h1 class="fw-bolder mb-4 ">
            Save <span class="text-primary">big</span> with our car rental
          </h1>
          <p class="text-secondary">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div role="group" class="mt-4" aria-label="Basic example">
            <button @click="scrollToBookACar"  type="button" class="btn fw-bold btn-primary">
              book ride &#10003;
            </button>
            <button type="button" class="btn fw-bold mx-3 btn-dark">
              Learn more
            </button>
          </div>
        </div>
        <div class="col-lg-7 d-none d-sm-none d-md-none d-lg-none d-xl-block">
          <div class="car">
            <img
              src="../assets/img/main_banner.png"
              class="img_car"
              alt="car"
            />
          </div>
        </div>
      </div>
    </main>

  </section>
 
</template>
<script>
export default {
  methods: {
    scrollToBookACar() {
      const bookACarElement = document.getElementById('book-a-car');
      if (bookACarElement) {
        bookACarElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-shape {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.car {
  display: flex;
  justify-content: end;
}

.car img {
  z-index: 2;
}

.pb-5 {
  padding-bottom: 5rem !important;
}
.padding-extreme {
  padding: 3.5rem 0;
}

.btn-dark {
  background-color: #010103;
  border: 2px solid #010103;
  border-radius: 0.3rem;
  padding: 1rem 3rem;
  transition: all 0.3s;
  text-transform: capitalize;
}

.btn-dark:hover {
  background-color: initial;
  color: #010103;
}
.btn-primary {
  background-color: #ff4d30;
  border: 2px solid #ff4d30;
  border-radius: 0.3rem;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  padding: 1rem 3rem;
  transition: all 0.3s;
  text-transform: capitalize;
  color: #fff;
}

.btn-primary:hover {
  background-color: #fa4226 !important;
  color: #fff !important;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.6) !important;
}
.img_car {
  height: 474px;
  width: 832px;
  margin-bottom: 2rem;
}

.responsive-title {
  font-size: calc(3.5rem + (16 - 3.5) * ((100vw - 320px) / (1920 - 320)));
}

.corner-container {
  position: fixed;
  bottom: 55px;
  right: 55px;
  background-color: #fa4226;
  padding: 20px;
  color: #fff;
  z-index: 99999;
  cursor: pointer;
}
</style>
