<template>
  <v-container
    fluid
    class="comp"
    :class="{
      'left-div ': left,
      'right-div': !left,
      'screen-div': $vuetify.breakpoint.smAndDown,
    }"
  >
    <!-- Title for mobie view  -->
    <v-row class="my-md-12">
      <v-col class="hidden-md-and-up pt-6 pt-md-0" cols="12" md="0">
        <h3 class="text-center" :style="titleStyle">{{ title }}</h3>
      </v-col>

      <!-- Title and description  -->
      <v-col
        class="order-last order-sm-last text-justify pt-md-16"
        :class="{
          'order-md-first padding-left': !left & $vuetify.breakpoint.mdAndUp,
          'padding-right': left & $vuetify.breakpoint.mdAndUp,
        }"
        cols="12"
        md="6"
        :data-aos="textAOS"
        data-aos-duration="1000"
      >
        <h3 class="hidden-sm-and-down" :style="titleStyle">{{ title }}</h3>
        <p class="pt-4 text-center text-md-left" :style="paragraphStyle">
          {{ paragraph }}
        </p>
        <TheButton
          v-if="hasButton"
          class="my-12 text-center text-md-left"
          text="Show more"
          route="/about"
          @click="track"
        />
      </v-col>

      <!-- Image part  -->
      <v-col
        :class="{
          'order-md-first d-flex align-start pr-10':
            left & $vuetify.breakpoint.mdAndUp,
          'd-flex align-end pl-10': !left & $vuetify.breakpoint.mdAndUp,
        }"
        class="img d-flex align-center"
        cols="12"
        md="6"
        :data-aos="imgAOS"
        data-aos-duration="1000"
      >
        <img :src="require(`~/assets/images/about/${img}`)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheButton from "../components/TheButton.vue";
import AOS from "aos";
export default {
  components: {
    TheButton,
  },
  props: {
    title: String,
    paragraph: String,
    img: String,
    imgLeft: Boolean,
    hasButton: Boolean,
  },
  computed: {
    Theme() {
      return this.$store.state.Theme;
    },
    titleStyle() {
      return { color: this.Theme.color1 };
    },
    paragraphStyle() {
      return { color: this.Theme.color3 };
    },
  },
  data() {
    return {
      left: this.imgLeft,
      imgAOS: "",
      textAOS: "",
    };
  },
  created() {
    this.imgAOS = this.imgLeft ? "fade-right" : "fade-left";
    this.textAOS = this.imgLeft ? "fade-left" : "fade-right";
  },
  mounted() {
    AOS.init();
    document
      .querySelectorAll("v-col")
      .forEach((col) => col.addEventListener("load", () => AOS.refresh()));
  },
  methods: {
    track() {
      gtag(
        "event",
        "button_click", // the type of interaction
        {
          event_category: "Button", // the object that user interacted with
          event_label: "show more in About Us", // for categorizing events
        }
      );
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 960px) {
  img {
    width: 100% !important;
  }
  p {
    font-size: 2vmax !important;
  }
  h3 {
    font-size: 3.4vmax !important;
  }
  .comp {
    margin-top: 6vh !important;
  }
}
p {
  font-size: 1.2vmax;
  font-family: "Inter400";
}
h3 {
  font-family: "Inter600";
  font-size: 2.2vmax;
}
img {
  width: 90%;
  height: auto;
}
.text,
.img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.left-div {
  height: 100%;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    color-stop(75%, rgba(248, 248, 248, 1)),
    color-stop(25%, white)
  );
  background: -o-linear-gradient(right, rgba(248, 248, 248, 1) 75%, white 25%);
  background: linear-gradient(-90deg, rgba(248, 248, 248, 1) 75%, white 25%);
  border-radius: 16px 0px 0px 16px;
}
.right-div {
  height: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(75%, rgba(248, 248, 248, 1)),
    color-stop(25%, white)
  );
  background: -o-linear-gradient(left, rgba(248, 248, 248, 1) 75%, white 25%);
  background: linear-gradient(90deg, rgba(248, 248, 248, 1) 75%, white 25%);
  border-radius: 0px 16px 16px 0px;
}
.screen-div {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(100%, rgba(248, 248, 248, 1)),
    color-stop(0%, white)
  );
  background: -o-linear-gradient(left, rgba(248, 248, 248, 1) 100%, white 0%);
  background: linear-gradient(90deg, rgba(248, 248, 248, 1) 100%, white 0%);
}
</style>