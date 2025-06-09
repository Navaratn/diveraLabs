<template>
  <div class="app">
    <home v-if="$vuetify.breakpoint.mdAndUp"/>
    <homeMobile v-else />
    <AboutScreen
      class="my-12 px-md-10 px-6 "
      title="About Us"
      :paragraph="aboutUs"
      :imgLeft="false"
      img="about-img1.png"
      :hasButton="true"
    />
    <GetInTouch title="Get in Touch"></GetInTouch>
  </div>
</template>

<script>
import home from "../screens/Home.vue";
import homeMobile from "../screens/HomeMobile.vue";
import AboutScreen from "../screens/AboutUs.vue";
import GetInTouch from "../screens/GetInTouch.vue";

export default {
  name: "IndexPage",
  components: {
    AboutScreen,
    GetInTouch,
    home,
    homeMobile,
  },
  head: {
    title: "Home",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Deverra Lab offers seamless implementation services ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://deverralab.net",
      },
    ],
  },
  data() {
    return {
      aboutUs:
        "Deverra Lab is a professional services arm based in Dubai covering the MENA region",
    };
  },
  mounted() {
    const chatBotScript = document.createElement("script");
    chatBotScript.setAttribute(
      "src",
      "//code.tidio.co/bp4qa3ima2py7p960pxpgan4c8l9dlnd.js"
    );
    document.head.appendChild(chatBotScript);
  },
};
</script>
<style scoped>
</style>
