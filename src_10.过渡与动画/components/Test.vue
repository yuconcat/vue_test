<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!--1.使用transition，vue会在特定的时候调用动画效果-->
        <!--name="xxx"   对使用的动画效果起名-->
        <!--appear       使之一上来就有这个效果-->
        <!--transition标签在解析时会被清掉-->
        <transition name="xxx" appear>
            <h1 v-show="isShow" class="come">hellow</h1>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "Test",
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
    /*3.进入时激活的动画(进入的过程)    linear匀速*/
    /*要使用相应的名字，不起名就用默认的v-*/
    .xxx-enter-active{
        animation: animo 1s linear;
    }
    /*4.离开时激活的动画(进入的过程)    reverse反转*/
    /*要使用相应的名字*/
    .xxx-leave-active{
        animation: animo 1s reverse;
    }

    /*2.动画效果*/
    @keyframes animo {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>