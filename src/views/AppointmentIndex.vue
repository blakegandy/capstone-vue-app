<template>
  <div class="appointments-index">
    <h2>Appointments</h2>
    <div v-for="appointment in appointments">
      <div v-if="appointment.stylist">
        <h2>
          Stylist: {{ appointment.stylist.first_name }}
          {{ appointment.stylist.last_name }}
        </h2>
        <p>Stylist Contact: {{ appointment.stylist.phone_number }}</p>
        <p>Date and Time: {{ formatDate(appointment.starts_at) }}</p>
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
        <p>Date and Time: {{ formatDate(appointment.starts_at) }}</p>
        <p>Details: {{ appointment.details }}</p>
        <router-link :to="`/appointments/${appointment.id}/edit`"
          >Edit Appointment</router-link
        >
      </div>
    </div>
    <div id="calendar"></div>
  </div>
</template>

<script>
// import Calendar from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
import axios from "axios";

export default {
  data: function() {
    return {
      appointments: [],
      calendarFormattedEvents: [],
    };
  },
  created: function() {
    axios.get("/api/appointments").then((response) => {
      console.log(response.data);
      this.appointments = response.data;
      this.calendarFormattedEvents = this.appointments.map((appointment) => {
        return {
          title: appointment.client.first_name,
          start: this.formatDate(appointment.starts_at),
        };
      });
      console.log(this.calendarFormattedEvents);
      var calendarEl = document.getElementById("calendar");
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        events: this.calendarFormattedEvents,
      });
      calendar.render();
    });
  },
  mounted: function() {
    document.addEventListener("DOMContentLoaded", function() {});
  },
  methods: {
    formatDate: function(date) {
      return moment(date).format();
    },
  },
};
</script>
