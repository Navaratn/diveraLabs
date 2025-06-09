<template>
  <div>
    <AboutScreen
      class="my-0 my-md-16 px-md-10 px-6"
      title="About Us"
      :paragraph="aboutUs"
      :imgLeft="false"
      img="about-img2.png"
      :hasButton="false"
    />
    <!--  Mission screen-->
    <AboutScreen
      class="my-md-16 px-md-10 px-6"
      title="Mission"
      :paragraph="mission"
      :imgLeft="true"
      img="mission.png"
    />
    <!--  Company screen -->
    <AboutScreen
      class="my-md-16 px-md-10 px-6"
      title="Our Company"
      :paragraph="ourCompany"
      :imgRight="false"
      img="company.png"
    />
  </div>
</template>

<script>
import AboutScreen from "../screens/AboutUs.vue";

export default {
  components: {
    AboutScreen,
  },
  head: {
    title: "About Us",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Deverra Lab is a professional services arm based in Dubai covering the MENA region,it is a technical driven company aiming to deliver top notch services with an affordable price. Ensuring the customer will have seamless hassle-free implementation services. The mission is to help both vendors and customer to have a seamless implementation service up to standard. ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://deverralab.net/about",
      },
    ],
  },
  data() {
    return {
      aboutUs:
        "Deverra Lab is a professional services arm based in Dubai covering the MENA region.",
      mission:
        "Deverra Lab is an implementation service arm aimed to help both vendors and customer to have a seamless implementation service up to standard. ",
      ourCompany:
        "Deverra Lab is a technical driven company aiming to deliver top notch services with an affordable price. Ensuring the customer will have seamless hassle-free implementation services.",
    };
  },
};
</script>
