<template>
  <main class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-5 text-center mb-5">
        <h3 class="fs-4">Vehicle Models</h3>
        <h2 class="fs-1 fw-bold">Our rental fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div class="col-12 p-0">
        <div class="d-flex flex-column flex-lg-row justify-content-center">
          <div class="d-flex gap-05em column flex-column mx-5 pick-box">
            <!-- Generar dinámicamente los botones desde los datos -->
            <button
              v-for="car in cars"
              :class="{ active: car === selectedCar }"
              :key="car.Car"
              @click="selectCar(car)"
            >
              {{ car.Car }}
            </button>
          </div>
          <div class="pick-car row justify-content-around">
            <div
              class="col-10 col-lg-10 col-xl-7 d-flex mt-5 justify-content-start"
            >
              <img :src="selectedCar ? selectedCar.Image : ''" alt="car" />
            </div>
            <div class="col-10 col-lg-10 mt-5 col-xl-5">
              <div class="pick-description__price">
                <!-- Mostrar el precio del vehículo seleccionado -->
                <span class="fw-bold fs-4">{{
                  selectedCar ? selectedCar.PriceDay : ""
                }}</span
                >/ rent per day
              </div>
              <div class="pick-description__table">
                <div
                  class="pick-description__table__col"
                  v-for="(value, key) in selectedCar"
                  :key="key"
                  :class="{ 'd-none': key === 'Image' || key === 'PriceDay' }"
                >
                  <span>{{ key }}</span
                  ><span>{{ value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <button type="button"  @click="scrollToBookACar"  class="btn fw-bold btn-primary">reserve now</button>
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {
      cars: [
        {
          Car: "Audi A1 S-Line",
          PriceDay: "$45",
          Model: "Audi",
          Mark: "A1",
          Year: 2012,
          Doors: "4/5",
          AC: "Yes",
          Transmission: "Manual",
          Fuel: "Gasoline",
          Image: require("@/assets/img/card.jpg"),
        },
        {
          Car: "VW Golf 6",
          PriceDay: "$37",
          Model: "Golf 6",
          Mark: "Volkswagen",
          Year: 2008,
          Doors: "4/5",
          AC: "Yes",
          Transmission: "Manual",
          Fuel: "Diesel",
          Image: require("@/assets/img/vw-gol.jpg"),
        },
        {
          Car: "Toyota Camry",
          PriceDay: "$30",
          Model: "Camry",
          Mark: "Toyota",
          Year: 2006,
          Doors: "4/5",
          AC: "Yes",
          Transmission: "Automatic",
          Fuel: "Hybrid",
          Image: require("@/assets/img/toyota.jpg"),
        },
        {
          Car: "BMW 320 ModernLine",
          PriceDay: "$35",
          Model: "320",
          Mark: "BMW",
          Year: 2012,
          Doors: "4/5",
          AC: "Yes",
          Transmission: "Manual",
          Fuel: "Diesel",
          Image: require("@/assets/img/bmw.jpg"),
        },
        {
          Car: "Mercedes-Benz GLK",
          PriceDay: "$50",
          Model: "Benz GLK",
          Mark: "Mercedes",
          Year: 2006,
          Doors: "4/5",
          AC: "Yes",
          Transmission: "Manual",
          Fuel: "Diesel",
          Image: require("@/assets/img/meche.jpg"),
        },
        {
          Car: "Passat CC",
          PriceDay: "$25",
          Model: "Passat CC",
          Mark: "Volkswagen",
          Year: 2008,
          Doors: "4/5",
          AC: "Yes",
          Transmission: "Automatic",
          Fuel: "Gasoline",
          Image: require("@/assets/img/passat.jpg"),
        },
      ],
      selectedCar: null,
    };
  },
  methods: {
    scrollToBookACar() {
      const bookACarElement = document.getElementById('book-a-car');
      if (bookACarElement) {
        bookACarElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    selectCar(car) {
      this.selectedCar = car;
    },
  },
  created() {
    // Establecer el primer vehículo como seleccionado por defecto
    if (this.cars.length > 0) {
      this.selectedCar = this.cars[0];
    }
  },
};
</script>
<style lang="scss" scoped>
main {
  padding: 10rem 0;
}

img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.active {
  background-color: #ff4d30 !important;
  color: #fff;
}

.pick-box button {
  background-color: #e9e9e9;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 1.5rem 3rem;
  text-align: left;
  transition: all 0.2s;
}

.pick-box button:hover {
  background-color: #ff4d30;
  color: #fff;
}

.pick-description__price {
  align-items: center;
  background-color: #ff4d30;
  color: #fff;
  display: flex;
  font-size: 1rem;
  gap: 1.5rem;
  padding: 0.9rem 1.9rem;
  white-space: nowrap;
  width: 100%;
}

.pick-description__table {
  display: flex;
  flex-direction: column; /* Cambia la dirección de la fila a columna */
  font-size: 1rem;
  /* No necesitas definir grid-template-columns ni grid-template-rows */
}

.pick-description__table__col {
  border-bottom: 2px solid #706f7b;
  border-left: 2px solid #706f7b;
  display: flex;
  flex-direction: row; /* Cambia la dirección de columna a fila */
  font-size: 1rem;
  padding: 0.7rem 0.5rem;
  text-align: center;
}

/* Si deseas establecer una separación entre las dos columnas */
.pick-description__table__col > * {
  flex: 1; /* Distribuye el espacio disponible de manera equitativa entre los elementos internos */
  margin: 0.2rem; /* Añade un pequeño margen entre los elementos internos */
}

.btn-primary {
  background-color: #ff4d30;
  border: 2px solid #ff4d30;
  border-radius: 0 !important;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  padding: 1rem 3rem;
  transition: all 0.3s;
  text-transform: uppercase;
  color: #fff;
}

.btn-primary:hover {
  background-color: #fa4226 !important;
  color: #fff !important;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.6) !important;
}

.gap-05em {
  gap: 0.5em;
}
</style>
