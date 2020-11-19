<template>
  <div class="products-edit">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      style="background-image: url(/img/full/hair_products.jpeg)"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Products</h2>
        </div>
      </div>
    </section>
    <!-- End Intro Section -->
    <!-- Login Section -->
    <section id="Pricing" class="ptb ptb-sm-80">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
            <div class="tabs b-lrb-none">
              <div class="ui-tab-content">
                <div id="tabs-1" class="plr-0"></div>
                <div id="tabs-2" class="plr-0">
                  <h4>Edit Product</h4>
                  <form v-on:submit.prevent="submit()">
                    <div class="form-field-wrapper">
                      <label>Image URL</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter the image URL"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="product.image_url"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Product Name</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter the product name"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="product.name"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Description </label>
                      <input
                        type="text"
                        placeholder="Enter product description"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="product.description"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Price</label>
                      <input
                        type="decimal"
                        required=""
                        placeholder="Enter the product price"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="product.price"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Quantity</label>
                      <input
                        type="number"
                        placeholder="Enter Quantity"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="product.quantity"
                      />
                    </div>
                    <button
                      name="submit"
                      id="form-submit"
                      type="submit"
                      class="btn btn-md btn-black"
                      v-on:click="updateProduct()"
                    >
                      Update Product
                    </button>
                    <button
                      class="btn btn-md btn-black"
                      v-on:click="destroyProduct()"
                    >
                      Delete Product
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- End Login Section -->
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
