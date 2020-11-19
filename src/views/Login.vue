<template>
  <div class="login">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      data-background-img="/img/full/hair_tools.jpeg"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Login</h2>
          <div class="page-breadcrumb">
            <a>Home</a>/<a>Shop</a>/<span>2 Columns</span>
          </div>
        </div>
      </div>
    </section>
    <!-- End Intro Section -->
    <div id="tabs-1" class="plr-0">
      <h4>Customer Login</h4>
      <form v-on:submit.prevent="submit()">
        <div class="form-field-wrapper">
          <label for="login-email">Email address</label>
          <input
            type="email"
            required=""
            placeholder="Enter your Email"
            name="login-email"
            id="login-email"
            class="input-sm form-full"
            aria-required="true"
            v-model="email"
          />
        </div>
        <div class="form-field-wrapper">
          <label for="login-pass">Password</label>
          <input
            type="password"
            required=""
            placeholder="Enter your Password"
            name="login-pass"
            id="login-pass"
            class="input-sm form-full"
            aria-required="true"
            v-model="password"
          />
          <button
            name="submit"
            id="form-submit"
            type="submit"
            class="btn btn-md btn-black"
            value="Submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
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
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push(`/users/${this.$parent.getUserId()}`);
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
