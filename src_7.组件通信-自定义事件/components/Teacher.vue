<template>
    <div id="box">
        <h2>老师名称:{{teacherName}}</h2>
        <h2>教学科目:{{address}}</h2>
        <button @click="getparentmsg">获取父组件的data</button>
    </div>
</template>

<script>
    export default {
        name:"Teacher",
        data(){
            return {
                teacherName:"张三",
                address:"数学"
            }
        },
        methods:{
            getparentmsg(){
                //可以在自组件中使用this.$parent.属性值
                console.log(this.$parent.$data.msg)
            }
        }
    }
</script>

<style scoped>
    #box{
        background-color: olivedrab;
    }
</style>