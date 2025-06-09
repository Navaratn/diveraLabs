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
          class="mt-12"
        />
      </div>

    </v-row>
    <v-row>
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
        { img: "home3.png", id: "img", class: "" },
        {
          img: "home5.png",
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
          if (window.innerWidth < 960) {
            nextImage = (imgTurnIndex + 1) % 3;
          }
        
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
.main {
  background-image: url("~/assets/images/home/bg.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
img {
  width: 75%;
  height: 60vw;
  object-fit: cover;
  object-position: 0% 100%;
  border-radius: 8px;
  transition: width 3s linear;
}
.initialStateImage {
  width: 4%;
  height: 60vw;
  max-width: 100%;
  max-height: 100%;
  transition: none !important;
}
.transition {
  animation: animate-right 3s linear;
  -webkit-animation: animate-right 3s linear;
}
.imgAnimation {
  height: 60vw;
  float: right;
  animation: animate-left 3s linear;
  -webkit-animation: animate-left 3s linear;
}
.imgs {
  position: relative;
}
@-webkit-keyframes animate-right {
  0% {
    width: 4%;
  }
  100% {
    width: 75%;
  }
}
@keyframes animate-right {
  0% {
    width: 4%;
  }
  100% {
    width: 75%;
  }
}
@-webkit-keyframes animate-left {
  0% {
    width: 75%;
  }
  100% {
    width: 4%;
  }
}
@keyframes animate-left {
  0% {
    width: 75%;
  }
  100% {
    width: 4%;
  }
}
</style>