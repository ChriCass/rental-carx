<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center mb-5">
        <p class="fs-4 fw-bold">Plan your trip now</p>
        <p class="fs-1 fw-bolder">Quick & easy car rental</p>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-4">
        <div class="card text-center d-flex flex-column align-items-center">
          <div>
            <img src="../assets/img/icon_one.png" alt="card" />
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bolder fs-4">Select Car</h5>
            <p class="card-text p-3">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-4">
        <div class="card text-center d-flex flex-column align-items-center">
          <div>
            <img src="../assets/img/icon_two.png" alt="card" />
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bolder fs-4">Contact Operator</h5>
            <p class="card-text p-3 ">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-4">
        <div class="card text-center d-flex flex-column align-items-center">
          <div>
            <img src="../assets/img/icon_three.png" alt="card" />
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bolder fs-4">Let's Drive</h5>
            <p class="card-text p-3">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
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
section {
  margin-top: 30rem;
}

.card {
  border: none;
}

img {
  width: 170px;
  height: 170px;
}

h5 {
  margin: 0;
}


p.card-text{
    color: #706f7b !important;
}

@media screen and (max-width: 500px) {
  section {
    margin-top: 60rem !important;
  }
}

@media screen and (max-width: 768px) {
  section {
    margin-top: 40rem;
  }
}
</style>
