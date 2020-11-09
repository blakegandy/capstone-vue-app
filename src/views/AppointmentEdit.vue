<template>
  <div class="appointments-edit">
    <h1>Edit Your Appointment</h1>
    <div class="form-group">
      <label>Time:</label>
      <input
        type="datetime"
        class="form-control"
        v-model="appointment.starts_at"
      />
    </div>
    <div class="form-group">
      <label>Details:</label>
      <input type="text" class="form-control" v-model="appointment.Details" />
    </div>
    <button v-on:click="updateAppointment()">Update Appointment</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      appointment: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/appointments/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.recipe = response.data;
    });
  },
  methods: {
    updateAppointment: function() {
      var params = {
        starts_at: this.appointment.starts_at,
        details: this.appointment.details,
      };
      axios
        .patch(`/api/appointments/${this.appointment.id}`, params)
        .then((response) => {
          this.$router.push(`/appointments/${this.appoinment.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
