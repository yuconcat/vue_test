<template>
    <div id="box">
        <h2>学生姓名:{{studentName}}</h2>
        <h2>年龄:{{age}}</h2>
        <button @click="sendStudentName">把学生组件的信息传给学校组件</button>
    </div>
</template>

<script>
    import pubsub from "pubsub-js"
    export default {
        name: "Student",
        data(){
            return {
                studentName:"张三",
                age:20
            }
        },
        methods:{
            sendStudentName(){
                //2.发布消息，消息名“hello”
                pubsub.publish("hello",666)
            }
        }

    }

</script>

<style scoped lang="less">
    #box{
        background-color: blueviolet;
    }
</style>

