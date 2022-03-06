<template>
    <div id="app">
        <Category></Category>
    </div>
</template>

<script>
    //2.引入第三方库
   import Category from "./components/Category"
    export default {
        name: "App",
        components:{Category},
    }
</script>

<style scoped>
</style>
