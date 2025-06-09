<template>
  <GetInTouch title="Contact Us" class="mt-md-5"></GetInTouch>
</template>

<script>
import GetInTouch from "../screens/GetInTouch.vue";
export default {
  components: { GetInTouch },
  head: {
    title: 'Contact Us',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Have a question about our seamless implementation services? Don’t hesitate to contact us and Deverra Lab Team will get in touch with you shortly',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://deverralab.net/contact',
      },
    ],
  },
};
</script>
