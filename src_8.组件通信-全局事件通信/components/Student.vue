<template>
    <div id="box">
        <h2>学生姓名:{{studentName}}</h2>
        <h2>年龄:{{age}}</h2>
        <button @click="sendStudentName">把学生组件的信息传给学校组件</button>
    </div>
</template>

<script>
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
                //2.用来发送数据，事件名为xxxx,发送端和接收端事件名不同无法传输数据
                this.$bus.$emit("xxxx",this.age)
            }
        }

    }

</script>

<style scoped lang="less">
    #box{
        background-color: blueviolet;
    }
</style>

