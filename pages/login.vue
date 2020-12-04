<template>
  <div class="form_width_m form_width_d">
    <v-card class="pa-5">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card-title>
            Войти в систему
          </v-card-title>
        </v-col>
      </v-row>
      <v-form ref="form" v-model="valid" class="form_width">
        <v-text-field
          ref="nickk"
          v-model="nick"
          label="Ник"
          required
          :rules="nickRules"
        ></v-text-field>

        <v-text-field v-model="name" label="Имя"></v-text-field>

        <v-text-field v-model="surname" label="Фамилия"></v-text-field>

        <v-text-field
          ref="email"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="onSubmit"
          :loading="loading"
          small
          >Войти в систему</v-btn
        >
        <v-btn small color="primary" class="mr-4" @click="toMain"
          >на главную</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: "empty",
  data: () => ({
    loading: false,
    valid: false,
    nick: "",
    nickRules: [
      v => !!v || "Ник обязателен",
      v => (v && v.length <= 10) || "Ник не может быть длиннее 10 символов"
    ],
    name: "",
    nameRules: [
      v => (v && v.length <= 10) || "Имя не может быть длиннее 10 символов"
    ],

    surname: "",
    surnameRules: [
      v => (v && v.length <= 10) || "Фамилия не может быть длиннее 10 символов"
    ],

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    async vspomogatelhaya_func() {
      try {
        const formData = {
          nick: this.nick,
          name: this.name,
          surname: this.surname,
          email: this.email
        };

        await this.$store.dispatch("auth/login", formData);
        // await this.$store.dispatch("/api/auth/admin/login", formData);
        this.$router.push("/second");
      } catch (e) {
        this.loading = false;
        console.log("error");
      }
    },
    onSubmit() {
      if (this.$refs.form.validate) {
        this.loading = true;
        this.vspomogatelhaya_func();
      }
    },

    toMain() {
      this.$router.push("/second");
    }
  }
};
</script>
<style scoped>
.form_width_d {
  height: 100%;
  /* min-width: 500px; */
}
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
  .form_width_m {
    height: 100%;
    width: 100%;
  }
}
</style>
