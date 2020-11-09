<template>
  <div class="appointments-index">
    <h2>Appointments</h2>
    <div v-for="appointment in appointments">
      <h2>Stylist: {{ appointment.stylist }}</h2>
      <p>
        Client: {{ appointment.client.first_name }}
        {{ appointment.client.last_name }}
      </p>
      <p>Client Contact: {{ appointment.client.phone_number }}</p>
      <p>Date and Time: {{ appointment.starts_at }}</p>
      <p>Details: {{ appointment.details }}</p>
      <router-link :to="`/appointments/${appointment.id}`"
        >Edit Appointment</router-link
      >
    </div>
  </div>
</template>

<script>
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
};
</script>
