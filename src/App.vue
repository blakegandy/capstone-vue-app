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
                <a href="#">Blog</a>
                <div class="nav-dropdown col3-dropdown center">
                  <div class="row">
                    <div class="col-lg-4">
                      <ul>
                        <li><span class="dropdown-title">Grid</span></li>
                        <li>
                          <a href="/blog-grid-2col.html">2 Columns</a>
                        </li>
                        <li>
                          <a href="/blog-grid-2col-sidebar.html"
                            >2 Columns - sidebar</a
                          >
                        </li>
                        <li>
                          <a href="/blog-grid-3col.html">3 Columns</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-4">
                      <ul>
                        <li><span class="dropdown-title">Masonry</span></li>
                        <li>
                          <a href="/blog-masonry-2col.html">2 Columns</a>
                        </li>
                        <li>
                          <a href="/blog-masonry-2col-sidebar.html"
                            >2 Columns - sidebar</a
                          >
                        </li>
                        <li>
                          <a href="/blog-masonry-3col.html">3 Columns</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span class="dropdown-title">One Columns</span>
                        </li>
                        <li><a href="/blog-1col.html">no-sidebar</a></li>
                        <li>
                          <a href="/blog-1col-sidebar.html">with sidebar</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-4">
                      <ul>
                        <li>
                          <span class="dropdown-title">Blog Detail</span>
                        </li>
                        <li>
                          <a href="/blog-single-image-post.html">Image Post</a>
                        </li>
                        <li>
                          <a href="/blog-single-slider-post.html"
                            >Slider Post</a
                          >
                        </li>
                        <li>
                          <a href="/blog-single-video-post.html">Video Post</a>
                        </li>
                        <li>
                          <a href="/blog-single-audio-post.html">Audio Post</a>
                        </li>
                        <li>
                          <a href="/blog-single-youtube-post.html"
                            >Youtube Post</a
                          >
                        </li>
                        <li>
                          <a href="/blog-single-vimeo-post.html">Vimeo Post</a>
                        </li>
                        <li>
                          <a href="/blog-single-quote-post.html">Quote Post</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-menu-item">
                <a href="#">Elements</a>
                <div class="nav-dropdown">
                  <ul>
                    <li>
                      <a href="/element-components.html">Components</a>
                    </li>
                    <li>
                      <a href="/element-tabs-and-accordian.html"
                        >Tabs & Accordian</a
                      >
                    </li>
                    <li><a href="/element-slider.html">Slider</a></li>
                    <li><a href="/element-team.html">Team</a></li>
                    <li><a href="/element-pricing.html">Pricing</a></li>
                    <li>
                      <a href="/element-video-and-audio.html">Video / Audio</a>
                    </li>
                    <li>
                      <a href="/element-typography.html">Typography</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-menu-item">
                <a href="#">Shop</a>
                <div class="nav-dropdown col2-dropdown left">
                  <div class="row">
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <a href="/shop-2col.html">Shop 2 Columns</a>
                        </li>
                        <li>
                          <a href="/shop-3col.html">Shop 3 Columns</a>
                        </li>
                        <li>
                          <a href="/shop-4col.html">Shop 4 Columns</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <a href="/shop-left-sidebar.html">Left Sidebar</a>
                        </li>
                        <li>
                          <a href="/shop-right-sidebar.html">Right Sidebar</a>
                        </li>
                        <li><a href="/shop-detail.html">Shop Detail</a></li>
                        <li><a href="/shop-checkout.html">Checkout</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
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
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Sign Up</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link to="/appointments">Appointments</router-link> |
      <router-link to="/users">Stylists</router-link> |
      <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`"
        >My Profile</router-link
      >
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
