<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!--如果要两个标签一起实现动画效果，要用transition-group标签，而且还要添加key-->
        <!--transition只能为一个标签使用动画效果-->
        <transition-group name="xxx" appear>
            <h1 v-show="!isShow" class="come" key="1">hellow</h1>
            <h1 v-show="isShow" class="come" key="2">world</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "Test2",
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
    /*进入时激活的动画(进入的过程),离开时激活的动画(进入的过程)*/
    .xxx-enter-active,.xxx-leave-active{
        transition: 1s linear;    /*给这个元素设置过渡动画效果*/
    }
    /*动画进入的开始,动画离开的结束(静态)*/
    .xxx-enter,.xxx-leave-to{
        transform: translateX(-100%);
    }
    /*动画进入的结束,动画离开的开始*/
    .xxx-enter-to,.xxx-leave{
        transform: translateX(0);
    }
</style>