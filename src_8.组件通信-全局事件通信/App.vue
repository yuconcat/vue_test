<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    //引入组件
    import School from "./components/School.vue"
    import Student from "./components/Student.vue"
    export default {
        name: "App",
        components:{
            School:School,
            Student:Student
        },
        data(){
            return {
                msg:"十七中"
            }
        }
    }
</script>

<style scoped>
    #app{
        background-color: blanchedalmond;
    }
</style>