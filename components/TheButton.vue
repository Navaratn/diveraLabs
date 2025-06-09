<template>
  <div class="btn">
    <NuxtLink :to="route">
      <button :style="buttonColor">
        {{ text }}
      </button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    route: {
      type: [String],
      default: "",
    },
    width: String,
    height: String,
  },
  computed: {
    Theme() {
      return this.$store.state.Theme;
    },

    buttonColor() {
      return {
        "background-color": this.Theme.color1,
        width: this.width,
        height: this.height,
      };
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 990px) {
  button {
    width: 150px !important;
    height: 45px !important;
  }
}
button {
  width: 220px;
  height: 52px;
  border-radius: 139px;
  color: white;
  text-decoration: none;
  font-family: "Inter600";
  font-size: 18px;
  line-height: 21.94px;
}

.btn :hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  -o-transition: transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  background: white;
}
/* .btn a:hover {
    color: #cb2a1d;
  } */
</style>
