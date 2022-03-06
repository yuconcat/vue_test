<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!--具名插槽，为每个插槽都设置名字，让vue知道该往那边放，如果不加名字，则会双份出现-->
        <slot name="center">这里可以填一些默认值，当使用者没有传具体结构时，这些字将会出现</slot>

        <slot name="footer">这里可以填一些默认值，当使用者没有传具体结构时，这些字将会出现</slot>
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