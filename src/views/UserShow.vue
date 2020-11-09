<template>
  <div class="users-show">
    <h1>{{ user.first_name }} {{ user.last_name }}</h1>
    <p>Email: {{ user.email }}</p>
    <p>Phone Number: {{ user.phone_number }}</p>
    <p>Salon: {{ user.salon }}</p>
    <p>Specialty: {{ user.specialty }}</p>
    <div v-for="product in products">
      <h2>{{ product.name }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Quantity: {{ product.quantity }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      products: [],
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.daxta);
      this.user = response.data;
    });
    axios.get("/api/products").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
  },
};
</script>
