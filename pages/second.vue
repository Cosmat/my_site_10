<template>
  <div>
    <v-container>
      <h2 class="title_Slusarev">Примеры моих сайтов</h2>
      <v-row justify="center" align="center">
        <v-col lg="6" sm="12">
          <v-card>
            <v-card-text>Сайт школы</v-card-text>
            <v-carousel cycle interval="21500">
              <v-carousel-item
                v-for="(item, i) in items_0"
                :key="i"
                :src="item.src"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>

        <v-col lg="6" sm="12">
          <v-card>
            <v-card-text>Блог постов</v-card-text>
            <v-carousel cycle interval="4000">
              <v-carousel-item
                v-for="(item, i) in items_1"
                :key="i"
                :src="item.src"
                transition="slide-x-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" align="center">
        <v-col lg="6" sm="12">
          <v-card>
            <v-card-text>Простой интернет магазин</v-card-text>
            <v-carousel cycle interval="3500">
              <v-carousel-item
                v-for="(item, i) in items_2"
                :key="i"
                :src="item.src"
                transition="scale-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>

        <v-col lg="6" sm="12">
          <v-card>
            <v-card-text>Панель администратора</v-card-text>
            <v-carousel cycle interval="5000">
              <v-carousel-item
                v-for="(item, i) in items_3"
                :key="i"
                :src="item.src"
                transition="fab-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items_0: [
        {
          src: require("../static/exemples/school/4.png")
        },
        {
          src: require("../static/exemples/school/5.png")
        },
        {
          src: require("../static/exemples/school/6.png")
        }
      ],
      items_1: [
        {
          src: require("../static/exemples/blog/1.png")
        },
        {
          src: require("../static/exemples/blog/2.png")
        },
        {
          src: require("../static/exemples/blog/3.png")
        }
      ],
      items_2: [
        {
          src: require("../static/exemples/shop/1.png")
        },
        {
          src: require("../static/exemples/shop/2.png")
        },
        {
          src: require("../static/exemples/shop/3.png")
        }
      ],
      items_3: [
        {
          src: require("../static/exemples/admin/1.png")
        },
        {
          src: require("../static/exemples/admin/2.png")
        },
        {
          src: require("../static/exemples/admin/3.png")
        }
      ]
    };
  }
};
</script>
<style scoped>
.title_Slusarev {
  font-size: 0.8em;
}
</style>
