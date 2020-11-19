<template>
  <div class="home">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      data-background-img="/img/full/hair_tools.jpeg"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Welcome to Cosmoschedule</h2>
          <div class="page-breadcrumb">
            <router-link to="/signup">Signup</router-link>/<router-link
              to="/users"
              >Stylists</router-link
            >/<router-link to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- End Intro Section -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to CosmoSchedule!",
    };
  },
  created: function() {},
  methods: {},
};
</script>
