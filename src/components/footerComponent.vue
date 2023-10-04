<template>
  <footer
    class="container-fluid bg-white text-dark p-5 text-center text-sm-center text-md-center text-lg-start"
  >
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
        <div class="mb-3">
          <h5><b>CAR</b> Rental</h5>
        </div>
        <div class="mb-5">
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
        </div>
        <div
          class="d-flex align-items-center mb-3 justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start"
        >
          <i class="fa-solid fa-phone"></i>
          <p class="mx-2">(123)-456-789</p>
        </div>
        <div
          class="d-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start"
        >
          <i class="fa-regular fa-envelope"></i>
          <p class="mx-2">carrental@rental.com</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
        <h5 class="mb-3"><strong>COMPANY</strong></h5>
        <div class="list-footer">
          <a href="#">New York</a>
          <a href="#">Careers</a>
          <a href="#">mobile</a>
          <a href="#">Blog</a>
          <a href="#">How we work</a>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
        <h5 class="mb-3"><strong>WORKING HOURS</strong></h5>
        <div class="list-footer">
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
        <h5><strong>Suscription</strong></h5>
        <p>Subscribe your email address for latest news & updates:</p>
        <div class="input-group mb-3">
          <input
            type="email"
            class="w-100 mt-3 form-control p-3"
            placeholder="email"
            aria-label="Tu correo electrónico"
            aria-describedby="basic-addon2"
          />
          <button class="btn mt-3 p-3 btn-primary w-100" type="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  color: #706f7b;
}

.list-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #010103;
    transition: color 0.3s;

    &:hover {
      color: #ff4d30;
    }
  }
}

.btn-primary {
  background-color: #ff4d30;
  border: none;
  box-shadow: 0 10px 15px rgba(255, 83, 48, 0.35);
  color: #fff;
  cursor: pointer;
  border-radius: 0;
  text-transform: capitalize;
}
.btn-primary:hover {
  background-color: #fa4226 !important;
  color: #fff !important;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.6) !important;
}

strong {
  text-transform: uppercase;
}
</style>
