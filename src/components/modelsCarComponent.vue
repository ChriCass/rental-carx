<template>
    <section class="container py-5 my-5">
      <div class="row gap justify-content-center">
        <div
          class="col-10 col-sm-6 col-md-5 col-xl-3"
          v-for="c in coches"
          :key="c.modelo"
        >
          <div class="card h-100">
            <img class="card-img-top" :src="c.imagen" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ c.modelo }}</h5>
              <p class="card-price">${{ c.precio_por_dia }} <small>per day</small></p>
              <div class="card-details mt-3 text-center">
                <div><i class="fa-solid fa-car"></i> {{ c.marca }}</div>
                <div><i class="fas fa-star"></i>{{ c.calificacion }}</div>
                <div><i class="fa-solid fa-car"></i> {{ c.transmision }}</div>
                <div><i class="fa-solid fa-car"></i> {{ c.combustible }}</div>
              </div>
            </div>
            <div class="card-footer py-4 text-center">
                <router-link to="/" class="btn btn-primary">Book Ride</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script>
export default {
  data() {
    return {
      coches: [
        {
          marca: "Audi",
          modelo: "A1",
          precio_por_dia: 45,
          calificacion: "4/5",
          transmision: "Manual",
          combustible: "Diesel",
          imagen: require("../assets/img/car_type_one.png")
        },
        {
          marca: "VW",
          modelo: "Golf 6",
          precio_por_dia: 37,
          calificacion: "4/5",
          transmision: "Manual",
          combustible: "Diesel",
          imagen: require("../assets/img/car_type_two.png")
        },
        {
          marca: "Toyota",
          modelo: "Camry",
          precio_por_dia: 30,
          calificacion: "4/5",
          transmision: "Manual",
          combustible: "Diesel",
          imagen: require("../assets/img/car_type_three.png")
        },
        {
          marca: "BMW",
          modelo: "320",
          precio_por_dia: 35,
          calificacion: "4/5",
          transmision: "Manual",
          combustible: "Diesel",
          imagen: require("../assets/img/car_type_four.png")
        },
        {
          marca: "Mercedes",
          modelo: "Benz GLK",
          precio_por_dia: 50,
          calificacion: "4/5",
          transmision: "Manual",
          combustible: "Diesel",
          imagen: require("../assets/img/car_type_five.png")
        },
        {
          marca: "VW",
          modelo: "Passat CC",
          precio_por_dia: 25,
          calificacion: "4/5",
          transmision: "Manual",
          combustible: "Diesel",
          imagen: require("../assets/img/car_type_six.png")
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$btn-color: #ff4d30;
$btn-hover-color: #fa4226;

.gap {
  gap: 5rem;
}

.card-img-top {
  object-fit: cover;  
  height: 200px;       
  width: 100%;        
}

.card {
  &-title {
    font-weight: bolder;
    text-align: center;
  }

  &-price {
    text-align: center;
    font-weight: bold;

    small {
      font-weight: normal;
    }
  }

  &-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &-footer {
    background: none;
  }
}

.btn-primary {
  background-color: $btn-color;
  border: 2px solid $btn-color;
  border-radius: 0;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  padding: 1rem 3rem;
  transition: all 0.3s;
  text-transform: uppercase;
  color: #fff;

  &:hover {
    background-color: $btn-hover-color;
    box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.6);
    color: #fff;
  }
}

p {
  margin: 0;
}

</style>
