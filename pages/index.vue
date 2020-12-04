<template>
  <v-row>
    <v-col>
      <h3 class="anim_1 mt-10 text-center" >Здравствуйте, Уважаемый посетитель!</h3>
      <h3 class="anim_1 mt-10 text-center" v-show="mark1" >Меня зовут Слюсарев Алексей. Я начинающий fullstack разработчик</h3>
      <h3 class="anim_1 mt-10 text-center" v-show="mark2" >Этот сайт создан чтобы немного рассказать обо мне)))...</h3>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data(){
    return{
      mark0: false,
      mark1: false,
      mark2: false
    }
  },
  mounted() {
    if(!this.$store.getters['auth/isAuthenticated']){
    setTimeout(() => {
      this.mark0 = true
    }, 3000)
    setTimeout(() => {
      this.mark1 = true
    }, 6000)
    setTimeout(() => {
      this.mark2 = true
    }, 9000)
    setTimeout(() => {
      this.$router.push('/first')
    }, 11000)
    } else {
      this.$router.push('/second') 
    } 


   


  }
  
}
</script>
<style>


</style>