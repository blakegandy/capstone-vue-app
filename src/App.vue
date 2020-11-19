<template>
  <div id="app">
    <!-- Nav Bar -->
    <nav id="navigation" class="header-nav">
      <div class="container">
        <div class="row d-flex flex-md-row align-items-center">
          <div class="logo mr-auto">
            <!--logo-->
            <a href="/index.html">
              <img class="logo-dark" src="/img/logo-black.png" alt="Mazel" />
              <img class="logo-light" src="/img/logo-white.png" alt="Mazel" />
            </a>
            <!--End logo-->
          </div>
          <div class="nav-menu ml-auto">
            <ul class="">
              <li class="nav-menu-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-menu-item mega-menu">
                <router-link to="/appointments">Appointments</router-link>
              </li>
              <li class="nav-menu-item">
                <router-link to="/users">Stylists</router-link>
              </li>
              <li v-if="!isLoggedIn()" class="nav-menu-item">
                <router-link to="/signup">Signup</router-link>
              </li>
              <li v-if="!isLoggedIn()" class="nav-menu-item">
                <router-link to="/login">Login</router-link>
              </li>
              <li v-if="isLoggedIn()" class="nav-menu-item">
                <router-link to="/logout">Logout</router-link>
              </li>
              <li class="nav-menu-item">
                <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`"
                  >My Profile</router-link
                >
              </li>
            </ul>
          </div>
          <div class="nav-icons">
            <div class="nav-icon-item d-lg-none">
              <span class="nav-icon-trigger menu-mobile-btn align-middle"
                ><i class="ion"></i
              ></span>
            </div>
            <div class="nav-icon-item"></div>
          </div>
        </div>
      </div>
    </nav>
    <!-- End Nav Bar -->

    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
    getUserId: function() {
      return parseInt(localStorage.getItem("user_id"));
    },
  },
};
</script>
