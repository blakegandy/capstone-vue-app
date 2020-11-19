<template>
  <div class="users-edit">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      style="background-image: url(/img/full/hair_tools.jpeg)"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Edit Profile</h2>
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
                  <h4>Create Account</h4>
                  <form v-on:submit.prevent="updateUser()">
                    <div class="form-field-wrapper">
                      <label for="signup-name">First Name</label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        name="signup-name"
                        id="signup-name"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.first_name"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label for="signup-name">Last Name</label>
                      <input
                        type="name"
                        placeholder="Enter your last name"
                        name="signup-name"
                        id="signup-name"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.last_name"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label for="signup-email">Email </label>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        name="signup-email"
                        id="signup-email"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.email"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label for="login-email">Phone</label>
                      <input
                        type="text"
                        placeholder="Enter your phone no."
                        name="signup-phone"
                        id="signup-phone"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.phone_number"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label for="signup-pass">Choose Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        name="signup-pass"
                        id="signup-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.password"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label for="signup-pass">Re-enter Password</label>
                      <input
                        type="password"
                        placeholder="Enter Re-enter Password"
                        name="signup-re-pass"
                        id="signup-re-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.password_confirmation"
                      />
                    </div>
                    <div v-if="stylist === 'true'" class="form-field-wrapper">
                      <label for="signup-pass">Salon</label>
                      <input
                        type="text"
                        placeholder="Enter Salon name"
                        name="signup-re-pass"
                        id="signup-re-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.salon"
                      />
                    </div>
                    <div v-if="stylist === 'true'" class="form-field-wrapper">
                      <label for="signup-pass">Specialty</label>
                      <input
                        type="text"
                        placeholder="Enter Specialty"
                        name="signup-re-pass"
                        id="signup-re-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.specialty"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Profile Picture URL</label>
                      <input
                        type="text"
                        placeholder="Enter Image URL here"
                        name="signup-re-pass"
                        id="signup-re-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="user.image_url"
                      />
                    </div>
                    <button
                      name="submit"
                      id="form-submit"
                      type="submit"
                      class="btn btn-md btn-black"
                      value="Submit"
                    >
                      Confirm Changes
                    </button>
                    <button
                      v-on:click="destroyUser()"
                      class="btn btn-md btn-black"
                    >
                      Delete Account
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
      user: {},

      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function() {
      var params = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        phone_number: this.user.phone_number,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation,
        salon: this.user.salon,
        specialty: this.user.specialty,
        image_url: this.user.image_url,
      };
      axios
        .patch(`/api/users/${this.user.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/users/${this.user.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function() {
      if (confirm("Are you sure you want to delete your account?")) {
        axios.delete(`/api/users/${this.user.id}`).then((response) => {
          console.log("Success", response.data);
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem("jwt");
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
