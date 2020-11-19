<template>
  <div class="appointments-index">
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
    <div class="container">
      <div id="calendar"></div>
    </div>
    <!-- Service Section -->
    <section id="service" class="wow fadeIn pt pb-80">
      <div class="container text-center">
        <div class="row text-center">
          <div class="col-md-8 offset-md-2">
            <h3 class="h4">Appointments</h3>
            <div class="spacer-15"></div>
          </div>
        </div>
        <div class="row mt-60">
          <div v-for="appointment in appointments" class="col-md-4 mb-45">
            <div v-if="appointment.client">
              <h5>
                {{ appointment.client.first_name }}
                {{ appointment.client.last_name }}
              </h5>
              <p>Client Contact: {{ appointment.client.phone_number }}</p>
              <p>Date and Time: {{ formatDate(appointment.starts_at) }}</p>
              <p>Details: {{ appointment.details }}</p>
            </div>
            <div v-else>
              <h5>
                {{ appointment.stylist.first_name }}
                {{ appointment.stylist.last_name }}
              </h5>
              <p>Stylist Contact: {{ appointment.stylist.phone_number }}</p>
              <p>Date and Time: {{ formatDate(appointment.starts_at) }}</p>
              <p>Details: {{ appointment.details }}</p>
            </div>
            <router-link :to="`/appointments/${appointment.id}/edit`"
              >Edit appointment</router-link
            >
          </div>
        </div>
      </div>
    </section>
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
        if (appointment.client) {
          return {
            title: appointment.client.first_name,
            start: this.formatCalendarDate(appointment.starts_at),
          };
        } else {
          return {
            title: appointment.stylist.first_name,
            start: this.formatCalendarDate(appointment.starts_at),
          };
        }
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
      return moment(date).format("MMMM Do YYYY, h:mm");
    },
    formatCalendarDate: function(date) {
      return moment(date).format();
    },
    editPush: function() {
      this.$router.push(`/users/${this.appointment.user_id}`);
    },
  },
};
</script>
