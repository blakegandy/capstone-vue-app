<template>
  <div class="signup">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      data-background-img="/img/full/hair_tools.jpeg"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Signup</h2>
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
                  <h4>Create Account</h4>
                  <form v-on:submit.prevent="submit()">
                    <div class="form-field-wrapper">
                      <label for="signup-name">First Name</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter your first name"
                        name="signup-name"
                        id="signup-name"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="firstName"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label for="signup-name">Last Name</label>
                      <input
                        type="name"
                        required=""
                        placeholder="Enter your last name"
                        name="signup-name"
                        id="signup-name"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="lastName"
                      />
                    </div>
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
                      <label for="login-email">Phone</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter your phone no."
                        name="signup-phone"
                        id="signup-phone"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="phoneNumber"
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
                    <div class="form-field-wrapper">
                      <label for="signup-pass">Re-enter Password</label>
                      <input
                        type="password"
                        required=""
                        placeholder="Enter Re-enter Password"
                        name="signup-re-pass"
                        id="signup-re-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="passwordConfirmation"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Are you a Stylist?:</label>
                      <select v-model="stylist" name="stylist_confirmation">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div v-if="stylist === 'true'" class="form-field-wrapper">
                      <label for="signup-pass">Salon</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter Salon name"
                        name="signup-re-pass"
                        id="signup-re-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="salon"
                      />
                    </div>
                    <div v-if="stylist === 'true'" class="form-field-wrapper">
                      <label for="signup-pass">Specialty</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter Specialty"
                        name="signup-re-pass"
                        id="signup-re-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="specialty"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Profile Picture URL</label>
                      <input
                        type="text"
                        required=""
                        placeholder="Enter Image URL here"
                        name="signup-re-pass"
                        id="signup-re-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="imageURL"
                      />
                    </div>
                    <button
                      name="submit"
                      id="form-submit"
                      type="submit"
                      class="btn btn-md btn-black"
                      value="Submit"
                    >
                      Signup Now
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
