<template>
    <!--结构-->
    <div id="box">
        <h2>学校名称:{{schoollName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <h2>来自兄弟组件的信息{{da}}</h2>
    </div>
</template>

<script>
    import pubsub from "pubsub-js"
    export default {
        name:"School",
        data(){
            return {
                schoollName:"尚硅谷",
                address:"石家庄",
                da:""
            }
        },
        mounted(){
            //1.订阅消息，消息名“hello”,name参数为消息名,value为传过来的数据
            //  和定时器一样，每个订阅消息都是不同的
            //  如果不使用箭头函数，则这里面的this指向为undefined
            this.pubId = pubsub.subscribe("hello", (name,value)=> {
                console.log("有人发布了hello消息，hello消息的回调执行了",name,value)
            })
        },
        beforeDestroy(){
            // 3.如果传消息的组件消失了，就取消订阅消息
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
    #box{
        background-color: aquamarine;
    }
</style>