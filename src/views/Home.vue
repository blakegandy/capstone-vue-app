<template>
  <div class="home">
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
    <h1>{{ message }}</h1>
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
