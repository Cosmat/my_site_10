<template>
    <div>
        Очищаем данные
    </div>
</template>
<script>
export default {
     layout: "empty",
     beforeCreate() {
        this.$store.dispatch('auth/logout')
        this.$router.push("/second");
     }
}
</script>