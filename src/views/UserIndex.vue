<template>
  <div class="user-index">
    <h1>Stylists</h1>
    <input
      type="text"
      v-model="nameFilter"
      placeholder="Search by name"
      list="users"
    />
    <datalist id="users">
      <option v-for="user in users"
        >{{ user.first_name }} {{ user.last_name }}
      </option>
    </datalist>
    <div class="<div" v-for="user in filterBy(users, nameFilter)">
      <img :src="user.image_url" alt="" />
      <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone Number: {{ user.phone_number }}</p>
      <p>Salon: {{ user.salon }}</p>
      <p>Specialty: {{ user.specialty }}</p>
      <router-link :to="`/users/${user.id}`">More Info</router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vue2Filters from "vue2-filters";
import axios from "axios";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      users: [],
      nameFilter: "",
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
