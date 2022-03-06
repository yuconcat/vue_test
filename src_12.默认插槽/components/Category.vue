<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!--1.插槽，用来告诉vue，把父组件要穿进来的标签放这里,挖个坑，等着组件的使用者进行填充-->
        <slot>这里可以填一些默认值，当使用者没有传具体结构时，这些字将会出现</slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        //这里只要接收传过来的标题就可以了
        props:["title"]
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