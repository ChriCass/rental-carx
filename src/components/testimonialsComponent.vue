<template>
  <main>
    <section class="container p-5">
      <div class="row justify-content-center">
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-7 pt-5 text-center mb-lg-5"
        >
          <p class="fw-bold">Reviewed by People</p>
          <p class="fs-1 fw-bolder">Client's Testimonials</p>
          <p class="fw-light">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div class="col-12 pb-5">
          <div class="row justify-content-center">
            <div
              class="col-12 bg-white col-sm-12 my-5 my-sm-5 my-md-5 my-lg-0 col-md-12 col-lg-5 p-5 mx-3 shadow "
            >
              <div class="card-body">
                <p class="card-text fs-4">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
              </div>
              <div class="d-flex justify-content-between mt-5">
                <div class="d-flex align-items-center">
                  <div>
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div class="mx-3">
                    <p class="m-0 fw-bold">jarry popoter</p>
                    <p class="m-0">Belgrade</p>
                  </div>
                </div>

                <i class="fa-solid fa-quote-right fs-1 text-primary"></i>
              </div>
            </div>
            <div class="col-12 bg-white col-sm-12 col-md-12 col-lg-5 p-5 mx-3 shadow ">
              <div class="card-body">
                <p class="card-text fs-4">
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
              </div>
              <div class="d-flex justify-content-between mt-5">
                <div class="d-flex align-items-center">
                  <div>
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div class="mx-3">
                    <p class="m-0 fw-bold">Ron Rizzly</p>
                    <p class="m-0">Novi Sad</p>
                  </div>
                </div>
                <i class="fa-solid fa-quote-right fs-1 text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  background-color: #fafafa;
}

i.fa-regular {
  border-radius: 50%;
  border: 2px solid black;
  padding: 20px;
  background-color: #000;
  color: white;
}
</style>
