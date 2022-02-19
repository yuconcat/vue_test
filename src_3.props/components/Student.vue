<template>
    <div>
        <h1>{{mag}}</h1>
        <h2>{{name}}</h2>
        <h2>{{address}}</h2>

        <!--（4）页面展示中转变量-->
        <h2>{{MyAge}}</h2>
        <button @click="ChangeAge">点我修改年龄</button>
    </div>
</template>

<script>
    export default {
        name: "School",
        data(){
            return{
                msg:"hellow",

                //（2）创建中转变量
                MyAge:this.age
            }
        },
        methods:{
            ChangeAge(){
                //（3）对中转变量进行数据操作
                this.MyAge += 1
            }
        },
        // 简单接收
        // props:['name','age','address']

        // （1）指定接收类型
        props:{
            name:String,
            age:Number,
            address:String
        }

        // 使用props可以让每个复用模板的数据都不一样


    }
</script>

<style scoped>

</style>