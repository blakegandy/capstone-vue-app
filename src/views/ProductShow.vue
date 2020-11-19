<template>
  <div class="products-show">
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
    <div class="container">
      <button class="btn btn-md btn-black" v-on:click="profilePush()">
        Back
      </button>
    </div>
    <section class="pt pt-sm-80">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img class="item-container" :src="product.image_url" alt="1" />
          </div>
        </div>

        <div class="row mtb-60 mtb-xs-30">
          <div class="col-md-4 mb-30">
            <div class="project-detail-block">
              <p>
                <strong class="dark-color">Name:</strong>

                {{ product.name }}
              </p>

              <p>
                <strong class="dark-color">Description:</strong
                >{{ product.description }}
              </p>
              <p>
                <strong class="dark-color">Price:</strong>
                {{ product.price }}
              </p>
              <p>
                <strong class="dark-color">Quantity:</strong
                >{{ product.quantity }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  methods: {
    profilePush: function() {
      this.$router.push(`/users/${this.product.user_id}`);
    },
  },
};
</script>
