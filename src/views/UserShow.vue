<template>
  <div class="users-show">
    <h1>{{ user.first_name }} {{ user.last_name }}</h1>
    <p>Email: {{ user.email }}</p>
    <p>Phone Number: {{ user.phone_number }}</p>
    <p>Salon: {{ user.salon }}</p>
    <p>Specialty: {{ user.specialty }}</p>
    <div>
      <h2>Schedule an Appointment!</h2>
      <input type="hidden" id="timezone" name="timezone" value="-06:00" />
      <div class="form-group">
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
      <div class="form-group">
        <label>Details:</label>
        <input type="text" class="form-control" v-model="newDetails" />
      </div>
      <button v-on:click="createAppointment()">Create Appointment</button>
    </div>
    <div v-for="product in user.products">
      <h2>{{ product.name }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <router-link :to="`/products/${product.id}`">More Info</router-link> |
      <router-link
        v-if="product.user_id === $parent.getUserId()"
        :to="`/products/${product.id}/edit`"
        >Edit product</router-link
      >
    </div>
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
        starts_at: this.newStartsAt,
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
