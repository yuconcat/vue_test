<template>
    <div id="app">
        <Category></Category>
        <hr>
        <Person></Person>
    </div>
</template>

<script>
    //2.引入第三方库
    import Category from "./components/Category"
    import Person from "./components/Person"
    export default {
        name: "App",
        components:{Category,Person},
    }
</script>

<style scoped>
</style>
