<template>
  <div class="user-index">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      data-background-img="/img/full/hair_tools.jpeg"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Stylists</h2>
          <div class="page-breadcrumb">
            <a>Home</a>/<a>Shop</a>/<span>2 Columns</span>
          </div>
        </div>
      </div>
    </section>
    <!-- End Intro Section -->
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

                <p>
                  <strong class="dark-color">Email :</strong>{{ user.email }}
                </p>
                <p>
                  <strong class="dark-color">Phone Number:</strong>
                  {{ user.phone_number }}
                </p>
                <p>
                  <strong class="dark-color">Salon:</strong>{{ user.salon }}
                </p>
                <p>
                  <strong class="dark-color">Specialty:</strong
                  >{{ user.specialty }}
                </p>
                <router-link :to="`/users/${user.id}`">More Info</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
