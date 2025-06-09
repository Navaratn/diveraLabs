<template>
  <v-container fluid class="main pt-10">
    <v-row class="pa-md-10 pa-6">
      <div class="d-flex flex-row justify-space-between imgs" id="row">
        <img
          v-for="image in images"
          :key="image.name"
          :src="require(`~/assets/images/home/${image.img}`)"
          :class="image.class"
          :id="image.id"
        />
      </div>
    </v-row>
    <v-row class="margin">
      <CircleCards />
    </v-row>
  </v-container>
</template>

<script>
import CircleCards from "../components/CircleCard.vue";
export default {
  components: {
    CircleCards,
  },
  data() {
    return {
      timer: null,
      images: [
        { img: "home1.png", id: "img", class: "" },
        {
          img: "home2.png",
          id: "temp",
          class: "initialStateImage",
        },
        {
          img: "home3.png",
          id: "temp",
          class: "initialStateImage",
        },
        {
          img: "home4.png",
          id: "temp",
          class: "initialStateImage",
        },
        {
          img: "home5.png",
          id: "temp",
          class: "initialStateImage",
        },
        {
          img: "home6.png",
          id: "temp",
          class: "initialStateImage",
        },
        {
          img: "home7.png",
          id: "temp",
          class: "initialStateImage",
        },
      ],
    };
  },

  mounted() {
    if (this.$route.path === "/") {
      this.animateImage();
    }
  },

  methods: {
    animateImage() {
      this.timer = setInterval(() => {
        if (this.$route.path === "/") {
          let imgTurnIndex = this.images.findIndex((img) => img.id === "img");
          var nextImage = (imgTurnIndex + 1) % this.images.length;

          if (this.images[imgTurnIndex].class === "imgAnimation") {
            this.images[imgTurnIndex].class = "initialStateImage";
            this.images[imgTurnIndex].id = "temp";
            this.images[nextImage].id = "img";
            this.images[nextImage].class = "";
          } else {
            this.images[imgTurnIndex].class = "imgAnimation";
            this.images[nextImage].class = "transition";
          }
        }
      }, 3000);
    },
  },
};
</script>

<style scoped>

.margin{
  margin-bottom:300px !important;
}
@media only screen and (max-width: 1160px) {
  img {
    object-position: 1% 100% !important;
  }
}
.main {
  background-image: url("~/assets/images/home/bg.png");
  background-size: 100% 100%;
  height: 800px;
  margin-bottom: 300px;
}

img {
  width: 50%;
  height: 80vh;
  object-fit: cover;
  object-position: 0% 100%;
  transition: width 3s linear;
}

.initialStateImage {
  object-fit: cover;
  object-position: 0% 100%;
  width: 3%;
  transition: none !important;
}

.transition {
  animation: animate-right 3s linear;
  -webkit-animation: animate-right 3s linear;
}
.imgAnimation {
  object-fit: cover;
  object-position: 0% 100%;
  float: right;
  animation: animate-left 3s linear;
  -webkit-animation: animate-left 3s linear;
}

.imgs {
  position: relative;
}

@-webkit-keyframes animate-right {
  0% {
    width: 3%;
  }
  100% {
    width: 50%;
  }
}

@keyframes animate-right {
  0% {
    width: 3%;
  }
  100% {
    width: 50%;
  }
}

@-webkit-keyframes animate-left {
  0% {
    width: 50%;
  }
  100% {
    width: 3%;
  }
}

@keyframes animate-left {
  0% {
    width: 50%;
  }
  100% {
    width: 3%;
  }
}
</style>
