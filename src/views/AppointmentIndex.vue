<template>
  <div class="appointments-index">
    <h2>Appointments</h2>
    <div v-for="appointment in appointments">
      <h2>Stylist: {{ appointment.stylist }}</h2>
      <p>
        Client: {{ appointment.client }}
        {{ appointment.client }}
      </p>
      <p>Client Contact: {{ appointment.client.phone_number }}</p>
      <p>Date and Time: {{ formatDate(appointments.starts_at) }}</p>
      <p>Details: {{ appointment.details }}</p>
      <router-link :to="`/appointments/${appointment.id}/edit`"
        >Edit Appointment</router-link
      >
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  data: function() {
    return {
      appointments: [],
    };
  },
  created: function() {
    axios.get("/api/appointments").then((response) => {
      console.log(response.data);
      this.appointments = response.data;
    });
  },
  methods: {
    formatDate: function() {
      return moment().format("LLL");
    },
  },
};
</script>
