<template>
  <div class="pa-6 mt-md-5 py-14 my-8">
    <p :style="titleStyle" class="text-center text-md-left padding">
      Our Vendors
    </p>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="partner in ourVendors"
          :key="partner.id"
          class="pa-auto ma-auto"
          cols="12"
          sm="auto"
        >
          <a :href="partner.link">
            <!-- <div class="img-div" data-aos="fade-up" duration="1500">
            <img
              class="logo my-5"
              :src="require(`~/assets/images/vendors/${partner.icon}`)"
            />
          </div> -->
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      ourVendors: [
        // add vendors
        { icon: "", link: "" },
      ],
    };
  },
  computed: {
    Theme() {
      return this.$store.state.Theme;
    },
    titleStyle() {
      return { color: this.Theme.color1 };
    },
  },
  head: {
    title: "Our Vendors",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://deverralab.net/vendors",
      },
    ],
  },
  mounted() {
    AOS.init();
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1000px) {
  img {
    width: 80%;
    height: auto;
  }
  .padding {
    padding-left: 24px !important;
  }
}

.padding {
  padding-left: 90px;
}
p {
  font-family: "Inter600";
  font-size: 30px;
}
.img-div {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
}
.logo {
  width: max(200px, 20%);
}
</style>
