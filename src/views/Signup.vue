<template>
  <div class="signup">
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
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="firstName" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="lastName" />
      </div>
      <div class="form-group">
        <label>Phone Number:</label>
        <input type="text" class="form-control" v-model="phoneNumber" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input
          type="password"
          class="form-control"
          v-model="passwordConfirmation"
        />
      </div>
      <div class="form-group">
        <label>Are you a Stylist?:</label>
        <select v-model="stylist" name="stylist_confirmation">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div v-if="stylist === 'true'" class="form-group">
        <label>Salon:</label>
        <input type="text" class="form-control" v-model="salon" />
      </div>
      <div v-if="stylist === 'true'" class="form-group">
        <label>Specialty:</label>
        <input type="text" class="form-control" v-model="specialty" />
      </div>
      <div class="form-group">
        <label>Profile Picture</label>
        <input type="text" class="form-control" v-model="imageURL" />
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
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      stylist: null,
      salon: "",
      specialty: "",
      imageURL: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone_number: this.phoneNumber,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        stylist: this.stylist,
        salon: this.salon,
        specialty: this.specialty,
        image_url: this.imageURL,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
