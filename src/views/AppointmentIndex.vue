<template>
  <div class="appointments-index">
    <h2>Appointments</h2>
    <div v-for="appointment in appointments">
      <div v-if="appointment.stylist">
        <h2>
          Stylist: {{ appointment.stylist.first_name }}
          {{ appointments.stylist.last_name }}
        </h2>
        <p>Stylist Contact: {{ appointment.stylist.phone_number }}</p>
        <p>Date and Time: {{ formatDate(appointments.starts_at) }}</p>
        <p>Details: {{ appointment.details }}</p>
        <router-link :to="`/appointments/${appointment.id}/edit`"
          >Edit Appointment</router-link
        >
      </div>
      <div v-if="appointment.client">
        <h2>
          Client: {{ appointment.client.first_name }}
          {{ appointment.client.last_name }}
        </h2>
        <p>Client Contact: {{ appointment.client.phone_number }}</p>
        <p>Date and Time: {{ formatDate(appointments.starts_at) }}</p>
        <p>Details: {{ appointment.details }}</p>
        <router-link :to="`/appointments/${appointment.id}/edit`"
          >Edit Appointment</router-link
        >
      </div>
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
