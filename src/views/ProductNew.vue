<template>
  <div class="products-new">
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
    <h2>New Product</h2>
    <form v-on:submit.prevent="submit()">
      <div class="form-group">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="imageURL" />
      </div>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="description" />
      </div>
      <div class="form-group">
        <label>Price:</label>
        <input type="decimal" class="form-control" v-model="price" />
      </div>
      <div class="form-group">
        <label>Quantity:</label>
        <input type="number" class="form-control" v-model="quantity" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      imageURL: "",
      name: "",
      description: "",
      price: "",
      quantity: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        imageURL: this.image_url,
        name: this.name,
        description: this.description,
        price: this.price,
        quantity: this.quantity,
        image_url: this.imageURL,
      };
      axios
        .post("/api/products", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/users/${this.$parent.getUserId()}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
