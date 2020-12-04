<template>
<div id="app">
  <v-app app>
    <v-container>
      <v-card shaped >
        <v-toolbar  shaped  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-toolbar-title class="title_Slusarev">Слюсарев Алексей</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text @click="redirect_to_login" v-if="btn_login" small>Вход</v-btn>
          <v-btn text @click="redirect_to_registr" v-if="btn_login" small>Регистрация</v-btn>
          <v-btn text @click="redirect_to_logout" v-if="!btn_login" small>Выйти</v-btn>
          <!-- <v-btn @click="test">Test</v-btn> -->
        </v-toolbar>
      </v-card>

      <v-card  class="" color="purple lighten-3" cols="12">
        <v-row class="mobil1 d-flex justify-space-around">

          
          <v-col cols="2" class="col-lg-1 d-none d-sm-flex  align-center">
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-card class=" mt-8 d-flex align-center" :elevation="hover ? 24 : 0" flat color="purple lighten-3">
                <v-img :src="imgs[0]" contain></v-img>
              </v-card>
            </v-hover>
          </v-col>

          <v-tooltip bottom>
            <template v-slot:activator="{on}">
              <v-col cols="2" class="col-lg-2  d-flex align-center pl-5">
                <v-card
                  flat
                  class="d-flex align-center"
                  :elevation="watc0"
                  color="purple lighten-3"
                >
                  <v-img :src="imgs[1]" contain v-on="on"></v-img>
                  <v-card-subtitle class="text-center" v-if="flag0">JS</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <span>JAVASCRIPT</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{on}">
              <v-col cols="2" class="col-lg-2 d-flex align-center">
                <v-card
                  flat
                  class="d-flex align-center"
                  :elevation="watc1"
                  color="purple lighten-3"
                >
                  <v-img :src="imgs[2]" contain v-on="on"></v-img>
                  <v-card-subtitle class="text-center" v-if="flag1">VUE.JS</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <span>VUE.JS</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{on}">
              <v-col cols="2" class="col-lg-2 d-flex align-center">
                <v-card
                  flat
                  class="d-flex align-center"
                  :elevation="watc2"
                  color="purple lighten-3"
                >
                  <v-img :src="imgs[3]" contain v-on="on"></v-img>
                  <v-card-subtitle class="text-center" v-if="flag2">NODE.JS</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <span>NODE.JS</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{on}">
              <v-col cols="2" class="col-lg-2 d-flex align-center">
                <v-card
                  flat
                  class="d-flex align-center "
                  :elevation="watc3"
                  color="purple lighten-3"
                >
                  <v-img :src="imgs[4]" contain v-on="on"></v-img>
                  <v-card-subtitle class="text-center" v-if="flag3">MONGODB</v-card-subtitle>
                </v-card>
              </v-col>
            </template>
            <span>MONGODB</span>
          </v-tooltip>
          
        </v-row>
      </v-card>

      <body>
        <v-card min-height="500">
          <nuxt />
        </v-card>
      </body>

      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
            <strong class="subheading">Мои контакты</strong>

            <v-spacer></v-spacer>
            <a href="https://vk.com/id35962245" target="blank">
              <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </a>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }}
            <strong>Slyusarev. junior fullstack developer</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </v-app>
</div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require("../static/lesha.png"),
        require("../static/js.png"),
        require("../static/vue.png"),
        require("../static/node.png"),
        require("../static/mongo.png"),
      ],
      flag0: false,
      flag1: false,
      flag2: false,
      flag3: false,
      btn_login: true,

      icons: ["mdi-vk", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
     
    }
  },
  computed: {
    watc0: function () {
      if (this.flag0) {
        return 24;
      } else {
        return 0;
      }
    },
    watc1: function () {
      if (this.flag1) {
        return 24;
      } else {
        return 0;
      }
    },
    watc2: function () {
      if (this.flag2) {
        return 24;
      } else {
        return 0;
      }
    },
    watc3: function () {
      if (this.flag3) {
        return 24;
      } else {
        return 0;
      }
    },
  },

  mounted() {
    this.btn_login = !this.$store.getters["auth/isAuthenticated"];

    setInterval(() => {
      setTimeout(() => {
        this.flag0 = true;
      }, 1000);
      setTimeout(() => {
        this.flag0 = false;
      }, 3500);

      setTimeout(() => {
        this.flag1 = true;
      }, 4000);
      setTimeout(() => {
        this.flag1 = false;
      }, 6500);

      setTimeout(() => {
        this.flag2 = true;
      }, 7000);
      setTimeout(() => {
        this.flag2 = false;
      }, 9500);

      setTimeout(() => {
        this.flag3 = true;
      }, 10000);
      setTimeout(() => {
        this.flag3 = false;
      }, 12500);
    }, 12600);
  },
  methods: {
    redirect_to_registr() {
      this.$router.push("/registr");
    },
    redirect_to_login() {
      this.$router.push("/login");
    },
    redirect_to_logout() {
      this.$router.push("/logout");
    },
    test() {

    },
   
  },
};
</script>
<style scoped>
  .title_Slusarev{
    font-size: inherit;
  }
  
  /* .mobil1{
     height: 500px;
     
  } */
  /* .mobil2{
     height: 500px;
  } */
  @media only screen 
  and (min-device-width : 320px)
  and (max-device-width : 568px) {
  
    .mobil1 {
      height: 80px;
      color: #64DD17;
    }
    .title_Slusarev{
      font-size: 0.8em;
    }
    .morda{
      /* display: none; */
    }

  }
</style>