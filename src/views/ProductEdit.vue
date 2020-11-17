<template>
  <div class="products-edit">
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
    <div class="form-group">
      <label>Image URL:</label>
      <input type="text" class="form-control" v-model="product.image_url" />
    </div>
    <div class="form-group">
      <label>Name:</label>
      <input type="text" class="form-control" v-model="product.name" />
    </div>
    <div class="form-group">
      <label>Description:</label>
      <input type="text" class="form-control" v-model="product.description" />
    </div>
    <div class="form-group">
      <label>Price:</label>
      <input type="decimal" class="form-control" v-model="product.price" />
    </div>
    <div class="form-group">
      <label>Quantity:</label>
      <input type="number" class="form-control" v-model="product.quantity" />
    </div>
    <button v-on:click="updateProduct()">Update Product</button>
    <button v-on:click="destroyProduct()">Remove Product</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      product: {},
    };
  },
  created: function() {
    axios.get(`/api/products/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.product = response.data;
    });
  },
  methods: {
    updateProduct: function() {
      var params = {
        image_url: this.product.image_url,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        quantity: this.product.quantity,
      };
      axios
        .patch(`/api/products/${this.product.id}`, params)
        .then((response) => {
          this.$router.push(`/users/${this.$parent.getUserId()}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyProduct: function() {
      if (confirm("Are you sure you want to delete this product?")) {
        axios.delete(`/api/products/${this.product.id}`).then((response) => {
          console.log("Success", response.data);
          this.$router.push(`/users/${this.$parent.getUserId()}`);
        });
      }
    },
  },
};
</script>
