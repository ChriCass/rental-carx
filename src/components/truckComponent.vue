<template>
  <section class="choose-section">
    <div class="container d-flex mb-5 mt-5 justify-content-center">
      <img src="../assets/img/cars.png" alt="trucks and cars" />
    </div>
    <div class="container">
      <div class="row justify-content-around">
        <div
          class="col-11 col-sm-11 d-flex flex-column text-center text-lg-start align-items-center align-items-lg-start col-md-11 mb-5 pb-5 col-lg-5"
        >
          <h4 class="fw-bold">Why Choose Us</h4>
          <h2 class="fw-bold fs-1 mb-4">
            Best valued deals you will ever find
          </h2>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <div>
            <button
              type="button"
              class="fw-bold btn mt-md-4 mt-lg-4 btn-primary"
            >
              find details
            </button>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
          <div
            class="row justify-content-center justify-content-md-center justify-content-lg-center"
          >
            <div
              class="col-12 col-sm-12 col-md-9 col-lg-12 d-flex flex-column flex-sm-column flex-md-row align-items-center text-center text-sm-center text-md-center text-lg-start align-items-sm-center align-items-md-center align-items-lg-start mb-5"
            >
              <div>
                <img
                  class="icons"
                  src="../assets/img/icon_taxi.png"
                  alt="taxi"
                />
              </div>
              <div>
                <h4 class="fw-bold">Cross Country Drive</h4>
                <p>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div
              class="col-12 col-sm-12 col-md-9 col-lg-12 d-flex flex-column flex-sm-column flex-md-row align-items-center text-center text-sm-center text-md-center text-lg-start align-items-sm-center align-items-md-center align-items-lg-start mb-5"
            >
              <div>
                <img
                  class="icons"
                  src="../assets/img/icon_four.png"
                  alt="four"
                />
              </div>
              <div>
                <h4 class="fw-bold">All Inclusive Pricing</h4>
                <p>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div
              class="col-12 col-sm-12 col-md-9 col-lg-12 d-flex flex-column flex-sm-column flex-md-row align-items-center text-center text-sm-center text-md-center text-lg-start align-items-sm-center align-items-md-center align-items-lg-start mb-5"
            >
              <div>
                <img
                  class="icons"
                  src="../assets/img/icon_plate.png"
                  alt="plate"
                />
              </div>
              <div>
                <h4 class="fw-bold">No Hidden Charges</h4>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.choose-section {
  background-color: #fff;
  background-image: url(../assets/img/bg-truck.png);
  background-position: -225px 255px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 0 5rem;
}

img {
  height: auto;
  margin: 0 auto;
  width: 90%;
  object-fit: contain;
}

.btn-primary {
  background-color: #ff4d30;
  border: 2px solid #ff4d30;
  border-radius: 0.3rem;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  color: #fff;
  display: flex;
  font-weight: 700;
  padding: 1rem 2.5rem;
  text-decoration: none;
  transition: all 0.3s;
  text-transform: capitalize;
}

.btn-primary:hover {
  background-color: #fa4226 !important;
  color: #fff !important;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.6) !important;
}
.icons {
  height: 110px;
  width: 110px;
  margin-right: 1.1rem;
  object-fit: contain;
}

@media screen and (max-width: 500px){
  .icons {
  margin-right: 0;
}
}

</style>
