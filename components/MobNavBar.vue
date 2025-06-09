<template>
  <v-main>
    <v-container class="nav-bar pa-0" fluid>
      <!-- Mob Nav Bar -->
      <v-row class="bar mb-3">
        <v-col cols="2">
          <nuxt-link to="/">
            <img src="~assets/icons/Deverra-logo-mob.svg" class="px-6" />
          </nuxt-link>
        </v-col>
        <v-col>
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="2" sm="1">
          <img
             v-if="!showDrawer"
            @click="controlDrawer()"
            src="~assets/icons/bar-chart.svg"
          />
          <img v-else @click="controlDrawer()" src="~assets/icons/close.svg" />
        </v-col>
      </v-row>
      <!-- Drawer -->
      <transition name="fade">
        <v-row v-if="showDrawer">
          <v-col>
            <div class="drawer ma-5" cols="12">
              <nuxt-link
                v-for="tab in tabs"
                :key="tab.route"
                :to="tab.route"
                class="my-3"
              >
                <p class="route-text" :style="{ color: tab.color }">
                  {{ tab.name }}
                </p></nuxt-link
              >
              <nuxt-link to="/contact" class="my-3">
                <div class="contact-div px-8 py-8 py-xs-8">
                  <p class="py-3">Contact Us</p>
                  <v-icon color="white">mdi-phone</v-icon>
                </div>
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
      </transition>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      showDrawer: false,
      routeColor: "white",
      routFontWeight: "",
      tabs: [
        { name: "Home", route: "/", color: "#492293" },
        { name: "About Us", route: "/about", color: "rgba(255, 183, 77, 1)" },
        {
          name: "Our Vendors",
          route: "/vendors",
          color: "rgba(255, 183, 77, 1)",
        },
      ],
    };
  },
  watch: {
    $route() {
      if (this.$route.path == "/") {
        this.tabs[0].color = "#492293";
        this.tabs[2].color = "rgba(255, 183, 77, 1)";
        this.tabs[1].color = "rgba(255, 183, 77, 1)";
      }
      if (this.$route.path == "/about") {
        this.tabs[0].color = "rgba(255, 183, 77, 1)";
        this.tabs[2].color = "rgba(255, 183, 77, 1)";
        this.tabs[1].color = "#492293";
      }
      if (this.$route.path == "/vendors") {
        this.tabs[0].color = "rgba(255, 183, 77, 1)";
        this.tabs[1].color = "rgba(255, 183, 77, 1)";
        this.tabs[2].color = "#492293";
      }
    },
  },
  methods: {
    controlDrawer() {
      this.showDrawer = !this.showDrawer;
    },
  },
};
</script>
<style scoped>
.nav-bar {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.bar {
  height: 60px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: space-between;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
a {
  text-decoration: none;
}
.drawer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
}
p {
  font-size: 4.5fvw !important;
  color: rgba(86, 86, 86, 1);
  font-family: "Inter700";
}
.contact-div {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  background-color: #492293;
  width: 90vw;
  height: 50px;
  border-radius: 30px;
  text-align: center;
}
.contact-div p {
  color: white !important;
  margin: 20px !important;
}
</style>
