<template>
  <div class="padding py-14 my-8" >
    <p :style="titleStyle" class="text-center text-md-left">{{ title }}</p>
    <v-form
      id="contact"
      ref="form"
      v-model="isValid"
      class="form-container"
      action="/contact"
      method="post"
      data-aos="fade-right" data-aos-duration="1200"
    >
      <v-text-field
        v-model="name"
        class="input-field mt-9 mb-1"
        :rules="nameRules"
        name="name"
        label=" Your Name"
        outlined
        autocomplete="off"
        color="rgba(0, 0, 0, 0.6)"
      ></v-text-field>
      <v-text-field
        v-model="email"
        class="input-field mt-2 mb-1"
        :rules="emailRules"
        name="email"
        label="Your Email"
        outlined
        autocomplete="off"
        color="rgba(0, 0, 0, 0.6)"
      ></v-text-field>

      <v-text-field
        v-model="subject"
        class="input-field mt-2 mb-1"
        :rules="subjectRules"
        name="subject"
        label="Subject"
        outlined
        autocomplete="off"
        color="rgba(0, 0, 0, 0.6)"
      ></v-text-field>

      <v-textarea
        id="msg"
        v-model="message"
        class="input-field mt-2 mb-1"
        :rules="messageRules"
        name="message"
        label="Message"
        outlined
        auto-grow
        counter="500"
        autocomplete="off"
        color="rgba(0, 0, 0, 0.6)"
      ></v-textarea>
      <recaptcha />
      <v-btn
        id="custom-disabled"
        class="btn-submit white--text"
        type="submit"
        :style="ButtonStyle"
        :disabled="!isValid"
        @click="onSubmit"
      >
        Send
      </v-btn>
      <v-dialog
        v-model="showDialog"
        transition="dialog-bottom-transition"
        scrollable
        width="450"
      >
        <v-card class="round pa-9">
          <div class="dialogCon">
            <img src="~assets/icons/email-check.svg" />
            <p class="tit mx-5 mt-3">Message sent!</p>
            <p class="text-pop text-center mx-5">
              Your Message was successfully sent! We’ll contact you soon.
            </p>
            <button @click="hideMe">Ok</button>
          </div>
        </v-card>
      </v-dialog>
    </v-form>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  props: {
    title: String,
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isValid: false,
      showDialog: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/.test(
            v
          ) || "Invalid Email",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
        (v) => /^[A-Za-z\s]+$/.test(v) || "Please insert a right name",
      ],
      subjectRules: [
        (v) => !!v || "Subject is required",
        (v) =>
          (v && v.length <= 30) || "Subject must be less than 30 characters",
      ],
      messageRules: [
        (v) => !!v || "Message is required",
        (v) =>
          (v && v.length <= 500) || "Message must be less than 500 characters",
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
    ButtonStyle() {
      return {
        "background-color": this.Theme.color1,
      };
    },
  },
  methods: {
    onSubmit() {
      this.showDialog = true;
      gtag(
        'event',
        'button_click', //the type of interaction
        {
          event_category: 'Button', //the object that user interacted with
          event_label: 'Mail is sent to contact deverra', //for categorizing events
        }
      )
    },
    hideMe() {
      this.showDialog = false;
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 960px) {
  .btn-submit {
    width: 150px !important;
    height: 32px !important;
    font-size: 13px !important;
    border-radius: 110px;
  }

  .padding {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
}

.padding {
  padding-left: 115px;
  padding-right: 115px;
}
.form-container {
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  align-items: center;
}
.btn-submit {
  height: 40px;
  width: 170px;
  border-radius: 50px;
  margin-bottom: 20px;
  text-transform: unset !important;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
}
.btn-submit:hover {
  transform: scale(1.2);
  font-size: 20px;
  color: white;
}
.input-field {
  width: 100%; 
  border-radius: 10px;
  border-width: 20px;
}
#msg {
  height: 70px;
}
.v-text-field .v-textarea {
  font-size: 20px;
  color: #525252;
}
#custom-disabled.v-btn--disabled {
  background-color: #492293 !important;
  color: white !important;
  opacity: 0.7;
}
.dialogCon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  justify-items: baseline;
  overflow-x: hidden;
  overflow-y: hidden;
}
.v-card {
  overflow-x: hidden;
  overflow-y: hidden;
}
html {
  overflow-y: auto;
}
p {
  font-weight: 600;
  font-size: 30px;
}
.round {
  border-radius: 30px;
}
button {
  width: 150px;
  height: 50px;
  border-radius: 139px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  line-height: 21.94px;
  background-color: #492293;
}
.btn :hover {
  transform: scale(1.1);
  transition: transform 0.5s;
  background: white;
}
.btn a:hover {
  color: #492293;
}
.v-text-field--outlined:deep(fieldset) {
   border-radius: 8px;
   border: 1px solid #e5e5e5;
 }

 .error--text:deep(fieldset) {
   border: 1px solid red;
 }

.text-pop{
  font-size:16px;
  font-family: "Inter400";
}
</style>
