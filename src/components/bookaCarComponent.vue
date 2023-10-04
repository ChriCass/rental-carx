<template>
  <div id="book-a-car"></div>
  <main class="d-flex justify-content-center mt-5"  >
    <section class="container bg px-5 py-4 shadow">
      <div class="row">
        <h3 class="fw-bolder my-3">Book a car</h3>

        <!-- Bootstrap Alert with close button -->
        <div
          v-if="showAlert"
          class="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          Please fill in all required fields!
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            @click="closeAlert"
          ></button>
        </div>
        <!-- Alerta para la validación de fecha -->
        <div
          v-if="showDateAlert"
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Remember: Drop-Off date cannot be earlier than Pick-Up date!
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            @click="closeAlert"
          ></button>
        </div>

        <div class="col-12">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
              <div class="d-flex align-items-center mb-3">
                <i class="fa-solid fa-car"></i>
                <p class="mx-2 fw-bold">
                  select your car type<span class="text-primary">*</span>
                </p>
              </div>
              <div class="mb-3">
                <select
                  class="form-select p-3"
                  aria-label="Default select example"
                  v-model="selectedCar"
                  @change="updateSelectedCarImage"
                  required
                >
                  <option disabled value="">Choose your car type</option>
                  <option v-for="car in cars" :key="car.Car" :value="car.Car">
                    {{ car.Car }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
              <div class="d-flex align-items-center mb-3">
                <i class="fa-solid fa-location-dot"></i>
                <p class="mx-2 fw-bold">
                  Pick-up<span class="text-primary">*</span>
                </p>
              </div>
              <div class="mb-3">
                <select
                  class="form-select p-3"
                  aria-label="Default select example"
                  v-model="SelectedPickUpPlace"
                  required
                >
                  <option disabled value="">Select pick up location</option>
                  <option v-for="p in pickUpPlace" :key="p" :value="p">
                    {{ p }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
              <div class="d-flex align-items-center mb-3">
                <i class="fa-solid fa-location-dot"></i>
                <p class="mx-2 fw-bold">
                  Drop-off<span class="text-primary">*</span>
                </p>
              </div>
              <div class="mb-3">
                <select
                  class="form-select p-3"
                  aria-label="Default select example"
                  v-model="SelectedDropOffPlace"
                  required
                >
                  <option disabled value="">Select pick up location</option>
                  <option v-for="p in pickUpPlace" :key="p" :value="p">
                    {{ p }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
              <div class="d-flex align-items-center mb-3">
                <i class="fa-solid fa-calendar-days"></i>
                <p class="mx-2 fw-bold">
                  Pick-up<span class="text-primary">*</span>
                </p>
              </div>
              <div class="mb-3">
                <input
                  v-model="pickUpdate"
                  required
                  type="date"
                  class="form-control p-3"
                  :min="currentDate"
                  @change="validateDropOffDate"
                />
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
              <div class="d-flex align-items-center mb-3">
                <i class="fa-solid fa-calendar-days"></i>
                <p class="mx-2 fw-bold">
                  Drop-off<span class="text-primary">*</span>
                </p>
              </div>
              <div class="mb-3">
                <input
                  v-model="dropOffdate"
                  required
                  type="date"
                  class="form-control p-3"
                  :min="currentDate"
                  @change="validateDropOffDate"
                />
              </div>
            </div>

            <div
              class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 d-flex align-items-center"
            >
              <button
                type="button"
                class="fw-bold btn p-3 mt-3 w-100 btn-primary"
                @click="search"
                :data-bs-toggle="showModal ? 'modal' : ''"
                :data-bs-target="showModal ? '#exampleModal' : ''"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="custom-modal-header modal-header"  v-if="!showThankYouMessage">
          <h1 class="modal-title fw-bold fs-5" id="exampleModalLabel">
            COMPLETE RESERVATION
          </h1>
          <button
            type="button"
            class="btn-close text-light"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-5"  v-if="!showThankYouMessage">
          <div class="alert-simulation">
            <i class="fas fa-question-circle text-primary"></i>
            <!-- Ícono Font Awesome -->
            <strong class="text-primary"
              >Upon completing this reservation enquiry, you will
              receive:</strong
            >
            <p class="p-simulation">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div class="row mt-5">
            <div class="col-md-6">
              <div class="info-section mb-3">
                <div>
                  <i class="fas fa-map-marker-alt"></i>
                  <strong>Pick-Up Date & Time</strong>
                </div>
                <div class="d-flex align-items-center">
                  <span class="mr-2">{{ this.pickUpdate }}</span>
                  <div class="col-auto p-0">
                    <input type="time" class="form-control" value="15:00" />
                  </div>
                </div>
              </div>
              <div class="info-section mb-3">
                <div>
                  <i class="fas fa-map-marker-alt"></i>
                  <strong>Drop-Off Date & Time</strong>
                </div>
                <div class="d-flex align-items-center">
                  <span class="mr-2">{{ this.dropOffdate }}</span>
                  <div class="col-auto p-0">
                    <input type="time" class="form-control" value="10:00" />
                  </div>
                </div>
              </div>

              <div class="info-section mb-3">
                <div>
                  <i class="fas fa-map-marker-alt"></i>
                  <strong>Pick-Up Location</strong>
                </div>
                <p>{{ this.SelectedPickUpPlace }}</p>
              </div>
              <div class="info-section mb-3">
                <div>
                  <i class="fas fa-map-marker-alt"></i>
                  <strong>Drop-Off Location</strong>
                </div>
                <p>{{ this.SelectedDropOffPlace }}</p>
              </div>
            </div>

            <div class="col-md-6 mt-5 mt-md-0 d-flex flex-column">
              <strong>{{ this.selectedCar }}</strong>
              <img :src="selectedCarImage" alt="Car Image" class="img-fluid" />
            </div>
          </div>

          <hr />
          <div v-if="showAlert" class="alert alert-danger" role="alert">
            Please fill in all the required fields.
          </div>
          <form @submit.prevent="validateForm">
            <div class="row g-3">
              <strong class="text-primary">Personal information</strong>
              <div class="col-md-6">
                <label for="firstName" class="form-label required-field"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                  v-model="firstName"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="secondName" class="form-label required-field"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="secondName"
                  placeholder="Last Name"
                  v-model="lastName"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="phoneNumber" class="form-label required-field"
                  >Phone Number</label
                >
                <input
                  type="tel"
                  v-model="phoneNumber"
                  class="form-control"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="age" class="form-label required-field">Age</label>
                <input
                  type="number"
                  class="form-control"
                  id="age"
                  placeholder="Age"
                  v-model="age"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label required-field"
                  >Email</label
                >
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="address" class="form-label required-field"
                  >Address</label
                >
                <input
                  v-model="address"
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Address"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="city" class="form-label required-field">City</label>
                <input
                  v-model="city"
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="City"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="zipCode" class="form-label required-field"
                  >Zip Code</label
                >
                <input
                  v-model="zipCode"
                  type="text"
                  class="form-control"
                  id="zipCode"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div class="col-12 mt-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="newsUpdates"
                    required
                  />
                  <label
                    class="form-check-label required-field"
                    for="newsUpdates"
                  >
                    I'm agree with terms and conditions
                  </label>
                </div>
              </div>
            </div>
            <div class="custom-modal-footer modal-footer">
          <button type="submit" class="btn btn-primary">RESERVE NOW</button>
        </div>
          </form>
        </div>
        <div v-if="showThankYouMessage" class="text-center p-5">
        <i class="fas fa-check-circle fa-5x text-success mb-3"></i>
        <h3>Thank you!</h3>
        <p>We will get in touch with you soon. You can close this modal and continue exploring our website.</p>
      </div>

        <!-- ... other HTML code ... -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlert: false,
      showModal: false,
      showDateAlert: false,
      showThankYouMessage: false,
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
      modalShown: false, // Variable para rastrear si el modal se ha mostrado
      selectedCar: null,
      pickUpPlace: ["Belgrade", "Novi Sad", "Nis", "Kragujevac", "Subotica"],
      SelectedPickUpPlace: null,
      SelectedDropOffPlace: null,
      selectedCarImage: null,
      pickUpdate: null,
      dropOffdate: null,
      currentDate: "",
      pickUptime: null,
      dropOffTime: null,
      showDateAlert: false,
      firstName: "", // add data properties for each v-model
      lastName: "",
      phoneNumber: "",
      age: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
    };
  },
  mounted() {
    this.selectedCar = "";
    this.SelectedPickUpPlace = "";
    this.SelectedDropOffPlace = "";
  },
  methods: {
    closeAlert() {
      this.showAlert = false;
    },
    reserveNow() {
      // Or toggle Bootstrap alert
      this.showThankYouMessage = true;

      // Optional: Hide it after few seconds
      if (this.showThankYouMessage) {
        setTimeout(() => {
          this.showThankYouMessage = false;
        }, 5000); // hides after 5 seconds
      }
    },
    search() {
      // Validar que todos los campos tengan datos
      if (
        this.selectedCar &&
        this.SelectedPickUpPlace &&
        this.SelectedDropOffPlace &&
        this.dropOffdate &&
        this.pickUpdate
      ) {
        // Todos los campos tienen datos, ocultar la alerta
        this.showAlert = false;

        // Establecer showModal en true para mostrar el modal
        this.showModal = true;
      } else {
        // Al menos un campo no tiene datos, mostrar la alerta
        this.showAlert = true;
        // Establecer showModal en false para no mostrar el modal
        this.showModal = false;
      }
    },
    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    updateSelectedCarImage() {
      // Busca el automóvil seleccionado en la lista de autos
      const selectedCarObj = this.cars.find(
        (car) => car.Car === this.selectedCar
      );

      // Actualiza la propiedad selectedCarImage con la URL de la imagen
      if (selectedCarObj) {
        this.selectedCarImage = selectedCarObj.Image;
      }
    },
    validateDropOffDate() {
      const pickUpDate = new Date(this.pickUpdate);
      const dropOffDate = new Date(this.dropOffdate);

      if (dropOffDate < pickUpDate) {
        this.showDateAlert = true;
      } else {
        this.showDateAlert = false;
      }
    },
    validateForm() {
    // reset the alert on each submission attempt
    this.showAlert = false;

    // Checks if all necessary fields are filled
    if (
      !this.firstName ||
      !this.lastName || 
      !this.phoneNumber ||
      !this.age ||
      !this.email ||
      !this.address ||
      !this.city ||
      !this.zipCode
    ) {
      this.showAlert = true;
    } else {
      // Handle successful validation here
      this.showAlert = false;
      this.showThankYouMessage = true;
    }
  },
  },
  created() {
    this.currentDate = this.getCurrentDate();
  },
};
</script>

<style lang="scss" scoped>
section {
  position: absolute;
  z-index: 4;
  border-radius: 10px;
}

select.form-select.p-3 option {
  color: #ababab;
}

select.form-select.p-3 option:checked {
  color: #ababab !important; /* Cambia el color cuando está seleccionado */
}

p {
  margin: 0;
  text-transform: capitalize;
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

.bg {
  background-image: url(../assets/img/bg-rent-a-car.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
}

.custom-modal-header {
  background-color: #ff4d30;
  color: #fff;
  text-transform: uppercase;
}

.custom-modal-footer {
   
  justify-content: flex-end;
  width: 100%;
}

.required-field::after {
  content: "*";
  color: #ff4d30;
  margin-left: 2px;
}

button.btn-close {
  color: white !important;
}

.form-control {
  background-color: #f2f2f2;
}

.alert-simulation {
  background-color: #ffeae6;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px; /* Espaciado entre el ícono y el texto */

  i {
    font-size: 1.5em; /* Ajusta el tamaño del ícono según prefieras */
  }
}

.p-simulation {
  font-size: 12px;
}

.info-section {
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  i {
    font-size: 1.2em;
  }
}

@media (min-width: 992px) {
  /* A partir del breakpoint de Bootstrap para pantallas grandes (lg) */
  .modal-dialog {
    max-width: 80%; /* Ajusta según prefieras, esto hará que el modal ocupe el 80% del ancho de la ventana */
  }
}
</style>
