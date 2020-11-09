<template>
  <div class="user-index">
    <h1>Stylists</h1>
    <div v-for="user in users">
      <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
      <img :src="user.image_url" alt="" />
      <p>Email: {{ user.email }}</p>
      <p>Phone Number: {{ user.phone_number }}</p>
      <p>Salon: {{ user.salon }}</p>
      <p>Specialty: {{ user.specialty }}</p>
      <router-link :to="`/users/${user.id}`">More Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      users: [],
    };
  },
  created: function() {
    axios.get("/api/users").then((response) => {
      console.log(response.data);
      this.users = response.data;
    });
  },
};
</script>
