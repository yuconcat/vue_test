<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!--作用域插槽，这里的数据可以被插槽的使用者访问到-->
        <slot :gamexxx="games" :msg="hello">这里可以填一些默认值，当使用者没有传具体结构时，这些字将会出现</slot>

    </div>
</template>

<script>
    export default {
        name: "Category",

        props:["title"],
        //此时，数据在插槽定义的组件中
        data(){
            return{
                games:["a","s","d"],
                hello:"hello world"
            }
        }
    }
</script>

<style scoped>
    .category{
        background-color: aqua;
        width: 300px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: coral;
    }
</style>