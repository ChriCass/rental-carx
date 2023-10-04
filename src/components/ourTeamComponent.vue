<template>
  <section class="container py-5 my-5">
    <div class="row justify-content-center gap">
      <div class="col-10 col-sm-10 col-md-4 col-xl-3" v-for="p in team" :key="p.nombre">
        <div class="card shadow">
          <img :src="p.imagen" class="card-img-top" :alt="p.nombre" />
          <div class="card-body d-flex flex-column align-items-center justify-content-center">
            <h5 class="card-title fw-bolder">{{ p.nombre }}</h5>
            <p class="card-text">
              {{ p.ocupacion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      team: [
    {
      nombre: "Luke Miller",
      ocupacion: "Salesman",
      imagen: require("../assets/img/teamone.png")
    },
    {
      nombre: "Michael Diaz",
      ocupacion: "Business Owner",
      imagen: require("../assets/img/teamtwo.png")
    },
    {
      nombre: "Briana Ross",
      ocupacion: "Photographer",
      imagen: require("../assets/img/teamthree.png")
    },
    {
      nombre: "Lauren Rivera",
      ocupacion: "Car Detailist",
      imagen: require("../assets/img/teamfour.png")
    },
    {
      nombre: "Martin Rizz",
      ocupacion: "Mechanic",
      imagen: require("../assets/img/teamfive.png")
    },
    {
      nombre: "Caitlyn Hunt",
      ocupacion: "Manager",
      imagen: require("../assets/img/teamsix.png")
    }
  ],
    }
  }
};
</script>


<style lang="scss" scoped>
.card {
  border: none !important;
  width: auto;
}

template {
  background-color: #f2f2f2;
}

.gap{
    gap: 2rem;
}

</style>
