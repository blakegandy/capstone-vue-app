<template>
  <div class="products-show">
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
    <router-link :to="`/users/${product.user_id}`">Back</router-link>
    <img :src="product.image_url" alt="" />
    <h2>{{ product.name }}</h2>
    <p>Description: {{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Quantity: {{ product.quantity }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      product: {},
    };
  },
  created: function() {
    axios.get(`/api/products/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.product = response.data;
    });
  },
};
</script>
