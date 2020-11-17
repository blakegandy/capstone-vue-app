<template>
  <div class="users-show">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      data-background-img="/img/full/hair_tools.jpeg"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Shop</h2>
          <div class="page-breadcrumb">
            <a>Home</a>/<a>Shop</a>/<span>2 Columns</span>
          </div>
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
                <strong class="dark-color">Name:</strong>{{ user.first_name }}
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
                <h2 v-if="user.id != $parent.getUserId()">
                  Schedule an Appointment!
                </h2>
                <div v-if="user.id != $parent.getUserId()" class="form-group">
                  <label for="event-time">Date and Time:</label>
                  <input
                    type="datetime-local"
                    id="event-time"
                    min="2020-01-01T00:00"
                    max="2021-12-31T11:59"
                    class="form-control"
                    v-model="newStartsAt"
                  />
                </div>
                {{ newStartsAt }}
                <div v-if="user.id != $parent.getUserId()" class="form-group">
                  <label>Details:</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="newDetails"
                  />
                </div>
                <button
                  v-if="user.id != $parent.getUserId()"
                  v-on:click="createAppointment()"
                >
                  Create Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                  <img src="/img/product/01.jpg" />
                </div>
                <div class="item-mask">
                  <div class="item-mask-detail">
                    <div class="item-mask-detail-ele">
                      <a class="btn btn-line-xs btn-white-line"
                        ><i class="fa fa-shopping-cart"></i>Add To Cart</a
                      >
                    </div>
                  </div>
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
