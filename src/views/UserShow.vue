<template>
  <div class="users-show">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      style="background-image: url(/img/full/hair_tools.jpeg)"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Profile</h2>
        </div>
      </div>
    </section>
    <!-- End Intro Section -->

    <!-- Work Detail Section -->
    <section class="pt pt-sm-80">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img class="item-container" :src="user.image_url" alt="1" />
          </div>
        </div>

        <div class="row mtb-60 mtb-xs-30">
          <div class="col-md-4 mb-30">
            <div class="project-detail-block">
              <p>
                <strong class="dark-color">Name:</strong>

                {{ user.first_name }}
                {{ user.last_name }}
              </p>

              <p><strong class="dark-color">Email :</strong>{{ user.email }}</p>
              <p>
                <strong class="dark-color">Phone Number:</strong>
                {{ user.phone_number }}
              </p>
              <p><strong class="dark-color">Salon:</strong>{{ user.salon }}</p>
              <p>
                <strong class="dark-color">Specialty:</strong
                >{{ user.specialty }}
              </p>
              <div>
                <router-link
                  v-if="user.id === $parent.getUserId()"
                  :to="`/users/${user.id}/edit`"
                  >Edit Profile</router-link
                >
                |
                <router-link
                  v-if="
                    user.stylist === true && user.id === $parent.getUserId()
                  "
                  to="/products"
                  >New Product</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Login Section -->
    <section id="Pricing" class="ptb ptb-sm-80">
      <div v-if="user.id != $parent.getUserId()" class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
            <div class="tabs b-lrb-none">
              <div class="ui-tab-content">
                <div id="tabs-1" class="plr-0"></div>
                <div id="tabs-2" class="plr-0">
                  <h4>Schedule An Appointment</h4>
                  <form>
                    <div class="form-field-wrapper">
                      <label for="event-time">Date & Time </label>
                      <input
                        name="event-time"
                        class="input-sm form-full"
                        aria-required="true"
                        type="datetime-local"
                        id="event-time"
                        min="2020-01-01T00:00"
                        max="2021-12-31T11:59"
                        v-model="newStartsAt"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Details</label>
                      <input
                        required=""
                        placeholder="Enter Appointment Details"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="newDetails"
                      />
                    </div>
                  </form>
                  <button
                    name="submit"
                    id="form-submit"
                    type="submit"
                    class="btn btn-md btn-black"
                    v-on:click="createAppointment()"
                  >
                    Create Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Login Section -->

    <!-- Shop Item Section -->
    <section id="shop-item" class="ptb ptb-sm-80">
      <div class="container">
        <!-- Sort List -->
        <div class="row"></div>
        <!-- End Sort List -->

        <!-- Shop Item -->
        <div class="row container-grid">
          <div
            v-for="product in user.products"
            class="nf-item col-md-6 col-sm-6 mb-30"
          >
            <div class="item-box">
              <!-- Shop item images -->
              <div class="shop-item">
                <div class="item-img">
                  <img :src="product.image_url" />
                </div>
              </div>
              <!-- End Shop item images -->

              <!-- Shop item info -->
              <div class="shop-item-info">
                <router-link :to="`/products/${product.id}`">
                  <h6 class="shop-item-name">{{ product.name }}</h6>
                </router-link>
                <div class="shop-item-price">
                  <span>${{ product.price }}</span>
                </div>
                <router-link
                  v-if="product.user_id === $parent.getUserId()"
                  :to="`/products/${product.id}/edit`"
                  >Edit Product</router-link
                >
              </div>
              <!-- Shop item info -->
            </div>
          </div>
        </div>
        <!-- End Shop Item -->
      </div>
    </section>
    <!-- End Shop Item Section -->
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      products: [],
      appointments: [],
      newStartsAt: "",
      newDetails: "",
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
    axios.get("/api/products").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {
    createAppointment: function() {
      var params = {
        stylist_id: this.user.id,
        client_id: this.newClientId,
        starts_at: moment(this.newStartsAt).format(),
        details: this.newDetails,
      };
      axios.post("/api/appointments", params).then((response) => {
        console.log("Success", response.data);
        this.appointments.push(response.data);
        this.$router.push("/appointments");
      });
    },
  },
};
</script>
