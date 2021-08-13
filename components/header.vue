<template>
<div class="nav">
    <div v-for="nav in navLinks" :key="nav.id">
    <nuxt-link :to="nav.url" class="brand">{{nav.title}}</nuxt-link>
</div>
</div>
</template>

<script>
    export default {
        data(){
            return{
                navLinks:[{id: 91, title:"Home", url:"/"},
                {id: 92, title:"Jokes", url:"/jokes"},]
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>