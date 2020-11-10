<template>
  <div class="appointments-edit">
    <h1>Edit Your Appointment</h1>
    <div class="form-group">
      <label for="event-time">Date and Time:</label>
      <input
        type="datetime-local"
        id="event-time"
        min="2020-01-01T00:00"
        max="2021-12-31T11:59"
        class="form-control"
        v-model="formattedStartsAt"
      />
    </div>
    {{ formattedStartsAt }}
    <div class="form-group">
      <label>Details:</label>
      <input type="text" class="form-control" v-model="appointment.details" />
    </div>
    <button v-on:click="updateAppointment()">Update Appointment</button>
  </div>
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
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
