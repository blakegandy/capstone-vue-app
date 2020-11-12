<template>
  <div class="products-edit">
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
    <button v-on:click="updateProduct()">Update Appointment</button>
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
      imageURL: "",
      name: "",
      description: "",
      price: "",
      quantity: "",
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
        imageURL: this.product.image_url,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        quantity: this.product.quantity,
      };
      axios
        .patch(`/api/products/${this.appointment.id}`, params)
        .then((response) => {
          this.$router.push(`/product/${this.product.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyProduct: function() {
      if (confirm("Are you sure you want to delete this product?")) {
        axios.delete(`/api/products/${this.product.id}`).then((response) => {
          console.log("Success", response.data);
          this.$router.push("/users");
        });
      }
    },
  },
};
</script>
