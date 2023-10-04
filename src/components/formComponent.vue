<template>
  <section class="container bg py-5 my-5">
    <div class="row justify-content-around">
      <div class="col-10 col-xl-4 text-center text-xl-start">
        <div class="mb-4">
          <h2 class="fs-1 fw-bold">Need additional information?</h2>
        </div>
        <div>
          <p>
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
        </div>
        <div class="mt-5">
          <div
            class="d-flex fw-bold align-items-center mb-3 justify-content-center justify-content-sm-center justify-content-md-center justify-content-xl-start"
          >
            <i class="fa-solid fa-phone"></i>
            <p class="mx-2 text-dark">(123)-456-789</p>
          </div>
          <div
            class="d-flex fw-bold align-items-center justify-content-center justify-content-sm-center justify-content-md-center justify-content-xl-start"
          >
            <i class="fa-regular fa-envelope"></i>
            <p class="mx-2 text-dark">carrental@rental.com</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-xl-6 mt-5 mt-xl-0 text-center text-xl-start">
        <form>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label fw-bold"
              >Full Name <span>*</span></label
            >
            <input
              type="text"
              placeholder="Joe Cantinflas"
              class="form-control py-3"
            />
          </div>
          <div class="mb-4">
            <label for="exampleInputPassword1" class="form-label fw-bold"
              >Email <span>*</span></label
            >
            <input
              type="email"
              placeholder="youremail@gmail.com"
              class="form-control py-3"
            />
          </div>
          <div class="mb-4">
            <label for="" class="form-label fw-bold"
              >Tell us about it <span> *</span></label
            >
            <textarea
              class="form-control"
              placeholder="write here..."
              name=""
              id=""
              rows="9"
            ></textarea>
          </div>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn py-3 w-100 btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>

          <!-- Modal -->
          <div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          We'll be in touch very soon! <span>:)</span>
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        This is just a test of a modal. Keep enjoying the website.
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-dark"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>

        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  color: #706f7b;
  margin: 0;
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

.form-control {
  background-color: #f2f2f2;
}

span {
  color: #ff4d30;
}

.bg {
  background: url(../assets/img/bg-form.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto;
}
</style>
