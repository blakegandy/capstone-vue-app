<template>
  <div class="appointments-edit">
    <!-- Intro Section -->
    <section
      class="inner-intro bg-image overlay-light parallax parallax-background1"
      style="background-image: url(/img/full/salon.jpeg)"
    >
      <div class="container">
        <div class="row title">
          <h2 class="h2">Appointments</h2>
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
                  <h4>Edit Appointment</h4>
                  <form>
                    <div class="form-field-wrapper">
                      <label for="event-time">Date & Time </label>
                      <input
                        name="event-time"
                        class="input-sm form-full"
                        aria-required="true"
                        type="datetime-local"
                        id="event-time"
                        min="2020-01-01T00:00"
                        max="2021-12-31T11:59"
                        v-model="formattedStartsAt"
                      />
                    </div>
                    <div class="form-field-wrapper">
                      <label>Details</label>
                      <input
                        required=""
                        placeholder="Enter Appointment Details"
                        name="signup-pass"
                        id="signup-pass"
                        class="input-sm form-full"
                        aria-required="true"
                        v-model="appointment.details"
                      />
                    </div>
                  </form>
                  <button
                    class="btn btn-md btn-black"
                    v-on:click="updateAppointment()"
                  >
                    Update Appointment
                  </button>
                  <button
                    class="btn btn-md btn-black"
                    v-on:click="destroyAppointment()"
                  >
                    Cancel Appointment
                  </button>
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
import moment from "moment";
import axios from "axios";

export default {
  data: function() {
    return {
      appointment: {},
      errors: [],
      formattedStartsAt: "",
    };
  },
  created: function() {
    axios.get(`/api/appointments/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.appointment = response.data;
      this.formattedStartsAt = moment(this.appointment.starts_at)
        .format()
        .substring(0, 19);
    });
  },
  methods: {
    updateAppointment: function() {
      var params = {
        starts_at: moment(this.formattedStartsAt).format(),
        details: this.appointment.details,
      };
      axios
        .patch(`/api/appointments/${this.appointment.id}`, params)
        .then((response) => {
          this.$router.push("/appointments");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyAppointment: function() {
      if (confirm("Are you sure you want to cancel this appointment?")) {
        axios
          .delete(`/api/appointments/${this.appointment.id}`)
          .then((response) => {
            console.log("Success", response.data);
            this.$router.push("/appointments");
          });
      }
    },
  },
};
</script>
