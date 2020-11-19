<template>
  <div class="login">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      style="background-image: url(/img/full/razor.jpeg)"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Login</h2>
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
                  <h4>Login</h4>
                  <form v-on:submit.prevent="submit()">
                    <div class="form-field-wrapper">
                      <label for="signup-email">Email </label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter your email"
                        name="signup-email"
                        id="signup-email"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="email"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label for="signup-pass">Choose Password</label>
                      <input
                        type="password"
                        required=""
                        placeholder="Enter Password"
                        name="signup-pass"
                        id="signup-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="password"
                      />
                    </div>
                    <button
                      name="submit"
                      id="form-submit"
                      type="submit"
                      class="btn btn-md btn-black"
                      value="Submit"
                    >
                      Login
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
