<template>
    <!--结构-->
    <div id="box">
        <h2>学校名称:{{schoollName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    //暴露:简写形式
    export default {
        //暴露名称：和文件名保持一致
        name:"School",
        data(){
            return {
                schoollName:"尚硅谷",
                address:"石家庄"
            }
        },
        methods:{
            showName(){
                alert(this.schoollName)
            }
        }
    }
</script>

<style scoped>
    /*样式*/
    #box{
        background-color: aquamarine;
    }
</style>