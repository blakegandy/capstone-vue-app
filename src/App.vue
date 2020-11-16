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
                <a href="/">Home</a>
              </li>
              <li class="nav-menu-item">
                <a href="/about">About</a>
              </li>
              <li class="nav-menu-item mega-menu">
                <a href="/appointments">Appointments</a>
              </li>
              <li class="nav-menu-item">
                <a href="/users">Stylists</a>
              </li>
              <li v-if="!isLoggedIn()" class="nav-menu-item">
                <a href="/signup">Signup</a>
              </li>
              <li v-if="!isLoggedIn()" class="nav-menu-item">
                <a href="/login">Login</a>
              </li>
              <li v-if="isLoggedIn()" class="nav-menu-item">
                <a href="/logout">Logout</a>
              </li>
              <li class="nav-menu-item">
                <a :href="`/users/${getUserId()}`">My Profile</a>
              </li>
            </ul>
          </div>
          <div class="nav-icons">
            <div class="nav-icon-item d-lg-none">
              <span class="nav-icon-trigger menu-mobile-btn align-middle"
                ><i class="ion"></i
              ></span>
            </div>
            <div class="nav-icon-item">
              <span class="nav-icon-trigger sidebar-menu_btn align-middle"
                ><i class="ion ion-navicon"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- End Nav Bar -->
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Sign Up</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link to="/appointments">Appointments</router-link> |
      <router-link to="/users">Stylists</router-link> |
      <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`"
        >My Profile</router-link
      > -->
    </div>
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
