<template>
  <v-container fluid>
    <!-- Footer content -->
    <v-row :style="BGColor" class="px-md-10 px-6 pb-3 pb-md-0">
      <v-col
        cols="12"
        md="6"
        lg="7"
        class="d-flex align-center justify-center justify-md-start my-md-12 my-8 pa-0"
      >
        <img src="~/assets/icons/Deverra-logo-footer.svg" />
      </v-col>
      <v-col
        class="lists d-flex flex-column flex-md-row justify-space-between align-center pa-0"
      >
        <nuxt-link
          v-for="list in footerList"
          :key="list.id"
          class="pb-4 pt-md-4"
          :to="list.route"
        >
          <p class="route">{{ list.name }}</p>
        </nuxt-link>
      </v-col>
    </v-row>

    <!-- Copy rights -->
    <v-row class="px-md-10 px-6 py-0 align-center">
      <v-col
        class="d-flex align-center justify-center justify-md-start order-md-first pa-0"
        cols="12"
        md="6"
      >
        <p>© Copyright 2022. DEVERRA All Right Reserved</p>
      </v-col>
      <v-col
        class="d-flex justify-md-end justify-space-around align-center order-first"
      >
        <!-- justify-sm-center -->
        <span v-for="item in deverraSocialMedia" :key="item.id">
          <a :href="item.link" class="pl-md-2">
            <img
              :src="require(`~/assets/icons/${item.icon}`)"
              class="iconsImgs"
            />
          </a>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        { name: "Home", route: "/" },
        { name: "About Us", route: "/about" },
        { name: "Our Vendors", route: "/vendors" },
        { name: "Contact Us", route: "/contact" },
      ],
      deverraSocialMedia: [
        { icon: "facebook.svg", link: "/" },
        { icon: "twitter.svg", link: "/" },
        { icon: "instagram.svg", link: "/" },
      ],
    };
  },
  computed: {
    Theme() {
      return this.$store.state.Theme;
    },
    BGColor() {
      return {
        "background-color": this.Theme.color4,
      };
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  img {
    width: 200px;
    height: 50px;
  }
  .iconsImgs {
    width: 100%;
    height: auto;
  }
}
a {
  text-decoration: none;
  color: #525252;
}
a :hover {
  transform: scale(1.2);
  transition: transform 0.5s;
  transition: all 0.8s;
}
.lists {
  font-family: "Inter700";
  font-size: 20px;
}
p {
  color: #5f5f5f;
  font-size: 16px;
  font-family: "Inter400";
}
.route {
  font-family: "Inter700" !important;
  font-size: 20px;
}
</style>
