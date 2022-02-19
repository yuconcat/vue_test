<template>
    <div>
        <school></school>
        <Student></Student>
        <button @click="test">点我测试</button>
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
        methods:{
            test(){
                this.hello()
            }
        }
    }
</script>

<style scoped>

</style>