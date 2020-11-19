<template>
  <div class="products-new">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      style="background-image: url(/img/full/hair_products.jpeg)"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">New Product</h2>
          <div class="page-breadcrumb">
            <a>Home</a>/<a>Shop</a>/<span>2 Columns</span>
          </div>
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
                  <h4>Create Product</h4>
                  <form v-on:submit.prevent="submit()">
                    <div class="form-field-wrapper">
                      <label for="signup-name">First Name</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter the image URL"
                        name="signup-name"
                        id="signup-name"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="imageURL"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label for="signup-name">Product Name</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter the product name"
                        name="signup-name"
                        id="signup-name"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="name"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Description </label>
                      <input
                        type="text"
                        placeholder="Enter product description"
                        name="signup-email"
                        id="signup-email"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="description"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Price</label>
                      <input
                        type="decimal"
                        required=""
                        placeholder="Enter the product price"
                        name="signup-phone"
                        id="signup-phone"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="price"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Quantity</label>
                      <input
                        type="number"
                        required=""
                        placeholder="Enter Quantity"
                        name="signup-pass"
                        id="signup-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="quantity"
                      />
                    </div>
                    <button
                      name="submit"
                      id="form-submit"
                      type="submit"
                      class="btn btn-md btn-black"
                      value="Submit"
                    >
                      Create Product
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
