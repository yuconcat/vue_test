<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!--3.在name里引入库-->
        <!--4.enter-active-class="在官网上找想要的进入的效果"-->
        <!--5.enter-active-class="在官网上找想要的离开的效果"-->
        <transition-group
                appear
                name="animate__animated animate__bounce"
                enter-active-class="animate__swing"
                leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow" class="come" key="1">hellow</h1>
            <h1 v-show="isShow" class="come" key="2">world</h1>
        </transition-group>
    </div>
</template>

<script>
    //2.引入第三方css库
    import "animate.css"
    export default {
        name: "Test3",
        data(){
            return {
                isShow:true
            }
        }
    }
</script>

<style scoped>
    h1{
        background-color: olive;
    }
</style>


<!--可以直接使用第三方动画库-->
<!--这是npm里的animate库，还有其他库-->
<!--1.npm install animate.css-->