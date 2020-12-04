<template>
  <v-app app>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="auto" align="center">
          <v-alert type="error" v-show="error_1">{{mess}}</v-alert>
          <v-row   align="center" justify="center">
            <nuxt />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    error_1: false,
    mess: ''
  }),

  computed: {
    error() {
      return this.$store.getters.error;
      this.showMessage();
    },
  },
  watch: {
    error(value) {
      this.mess = value.response.data.message
      console.log(value.response.data);
      this.showMessage();
    },
  },
  methods: {
    showMessage(val) {
      this.error_1 = true;
      setTimeout(() => {
        this.error_1 = false;
        // this.$router.push("/second");
      }, 2000);
    },
  },
};
</script>
