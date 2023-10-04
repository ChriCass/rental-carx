<template>
  <nav class="navbar navbar-expand-lg bg-transparent text-dark py-4">
    <div class="container">
      <!-- Iconos a la izquierda siempre visibles -->
      <div class="d-flex align-items-center">
        <router-link to="/">
          <img
            src="@/assets/img/logo.png"
            alt="Logo"
            width="150"
            height="50"
            class="d-inline-block align-text-top"
          />
        </router-link>
      </div>

      <!-- Logo en el centro siempre visible -->
      <div class="d-none d-lg-flex align-items-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-dark fw-bold"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link text-dark fw-bold"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/models" class="nav-link text-dark fw-bold"
              >Vehicle Models</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/testimonials" class="nav-link text-dark fw-bold"
              >Testimonials</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/team" class="nav-link text-dark fw-bold"
              >Our Team</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link text-dark fw-bold"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Botón para menú desplegable solo en móviles y tabletas -->
      <button
        class="navbar-toggler no-border d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Enlaces de navegación solo en escritorio -->
      <div class="d-none d-lg-flex align-items-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-dark fw-bold" href="#">Sign in </a>
          </li>
          <li class="nav-item">
            <button class="btn text-light mx-3 btn-primary fw-bold">
              Register
            </button>
          </li>
        </ul>
      </div>

      <!-- Offcanvas solo para móviles y tabletas -->
      <div
        class="offcanvas text-white offcanvas-end d-lg-none"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link my-3 fw-bold text-dark"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link my-3 fw-bold text-dark"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/models" class="nav-link my-3 fw-bold text-dark"
                >Vehicle Models</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/testimonials"
                class="nav-link my-3 fw-bold text-dark"
                >Testimonials</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/team" class="nav-link my-3 fw-bold text-dark"
                >Our Team</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link my-3 fw-bold text-dark"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 999999;
}

img{
  cursor: pointer;
}

.btn-primary {
  background-color: #ff4d30;
  border: 2px solid #ff4d30;
  border-radius: 0.3rem;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);

  transition: all 0.3s;
  text-transform: capitalize;
  color: #fff;
}

.nav-link:hover {
  color: #ff4d30 !important;
}
</style>
