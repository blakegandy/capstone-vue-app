<template>
  <div class="products-show">
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
