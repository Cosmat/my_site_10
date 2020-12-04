<template>
  <div column justify-center align-center>
    <v-flex>
      <v-row align="center" justify="center">
        <h1 class="text-center mt-12" v-if="mark0">Но сначало вот об ЭТОМ человеке...</h1>
      </v-row>
      <v-card v-if="mark1">
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="3">
              <v-img :src="imgs[0]"></v-img>
            </v-col>

            <v-col cols="8" class="text-center pa-0 ma-0">
              <v-row class="flex align-center">
                <v-col class="px-0 height_m" v-if="mark2">
                  <v-card-subtitle class="height_max pa-0 ma-0">Это ВЛАДИЛЕН МИНИН!</v-card-subtitle>
                </v-col>

                <v-col cols="8" class="px-0" v-if="mark3">
                  <v-card-text class="height_s pa-0 ma-0">
                    Это очень крутой создатель различных курсов и образовательных программ в области вебразработки.
                    Владилен огромное тебе спавсибо за твою деятельность!
                  </v-card-text>
                </v-col>

                <v-col cols="8" class="px-0" v-if="mark4">
                  <v-card-text class="height_m pa-0 ma-0" cols="8">Вот его координаты</v-card-text>
                  <v-row justify="space-around">
                    <a icon href="https://vk.com/vladilen.minin" target="blank">
                      <v-icon x-large class="ml-5 pt-8">mdi-vk</v-icon>
                    </a>
                    <a
                      icon
                      href="https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw"
                      target="blank"
                    >
                      <v-icon x-large class="pt-8">mdi-youtube</v-icon>
                    </a>
                    <a icon href="https://www.instagram.com/vladilen.minin/" target="blank">
                      <v-icon x-large class="pt-8">mdi-instagram</v-icon>
                    </a>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [require("../static/Minin.png")],
      mark0: false,
      mark1: false,
      mark2: false,
      mark3: false,
      mark4: false,
      icons: ["mdi-vk", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  },
  mounted() {
    setTimeout(() => {
      this.mark0 = true;
    }, 500);
    setTimeout(() => {
      this.mark0 = false;
    }, 4000);
    setTimeout(() => {
      this.mark1 = true;
      this.mark2 = true;
    }, 4500);

    setTimeout(() => {
      this.mark2 = false;
    }, 7500);

    setTimeout(() => {
      this.mark3 = true;
    }, 7500);

    setTimeout(() => {
      this.mark3 = true;
    }, 11000);

    setTimeout(() => {
      this.mark3 = false;
    }, 14000);

    setTimeout(() => {
      this.mark4 = true;
    }, 14000);

    setTimeout(() => {
      this.$router.push("/second");
    }, 19000);

  }
};
</script>
<style scoped>
.height_s {
  font-size: 1.3vw;
  line-height: 3vw;
}
.height_m {
  font-size: 2vw;
  line-height: 3.5vw;
}
.height_max {
  font-size: 3vw;
  line-height: 5.5vh;
}
a {
  text-decoration: none;
}
</style>