<template>
    <div>
        <!--v-bind:age="20"就是传冒号里的表达式，age="20"是传字符串-->
        <Student name="李四" address="南昌" :age="20"></Student>
        <Student name="王五" address="石家庄" :age="40"></Student>
    </div>


</template>

<script>
    import Student from "./components/Student"
    export default {
        name: "App",
        components:{Student},

    }
</script>

<style scoped>

</style>