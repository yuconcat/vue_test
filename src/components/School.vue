<template>
    <!--结构-->
    <div id="box">
        <h2>学校名称:{{schoollName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="getSchoolName">把学校名给App</button>
    </div>
</template>

<script>
    export default {
        name:"School",
        //定义接收父组件传递过来的参数
        props:{
            msg_to_school:String
        },
        data(){
            return {
                schoollName:"尚硅谷",
                address:"石家庄"
            }
        },
        methods:{
            getSchoolName(){
                console.log(this.msg_to_school)
            },
        }
    }
</script>

<style scoped>
    #box{
        background-color: aquamarine;
    }
</style>