<template>
<v-container>
  <v-row class="justify-center align-center">
    <v-col  class="wrapper pa-14">
      <img src="~assets/images/error.gif" alt="404 error" />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
img {
  width:100%;
  height: auto;
}
.wrapper {
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 800px;
  height:800px;
}
</style>
