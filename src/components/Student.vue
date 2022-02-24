<template>
    <div id="box">
        <h2>学生姓名:{{studentName}}</h2>
        <h2>年龄:{{age}}</h2>
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
        }
    }

</script>

<style scoped lang="less">
    #box{
        background-color: blueviolet;
    }
</style>

<!--
   scoped:  实现组件的私有化，不对全局造成样式污染，表示当前style属性只属于当前模
            块，vue通过在DOM结构以及css样式上加上唯一的标记，保证唯一，达到样式私有化

   lang="less"：这个style用less写,
   要提前安装npm i less-loader@7

-->