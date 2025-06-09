<template>
    <v-container >
      <v-row class="justify-center flex-wrap">
        <v-col
          lg="4"
          md="4"
          cols="12"
          v-for="service in services"
          :key="service.icon"
        >
          <div class="card" data-aos="zoom-in" data-aos-duration="1000">
            <div class="icon-div">
              <img :src="require(`../assets/icons/${service.icon}`)" alt="" />
            </div>
            <p class="title py-3" :style="titleStyle">{{ service.title }}</p>
            <p class="text text-center">{{ service.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "assistant.svg",
          title: "Scope",
          description: "Deverra Lab will properly scope the service",
        },
        {
          icon: "engineering.svg",
          title: "Implement",
          description: "Our Experts aims to deliver a seamless implementation",
        },
        {
          icon: "approval.svg",
          title: "Review",
          description:
            "Ensuring that the implementation is up to best practice",
        },
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
};
</script>
<style scoped>
.icon-div {
  width: 200px;
  height: 200px;
  padding: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 50px rgba(185, 174, 163, 0.22) !important;
}

img {
  width: 100px;
  height: 100px;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-family: "Inter700";
  font-size: 30px !important;
}
.text {
  font-size: 20px;
  font-family: "Inter400";
}
</style>
