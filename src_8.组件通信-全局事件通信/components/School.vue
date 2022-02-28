<template>
    <!--结构-->
    <div id="box">
        <h2>学校名称:{{schoollName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <h2>来自兄弟组件的信息{{da}}</h2>
    </div>
</template>

<script>
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
            //3.用来接收数据，事件名为xxxx
            this.$bus.$on("xxxx",(data)=>{
                this.da = data
                console.log("我是学校组件，收到了来自学生的数据："+data)
            })
        },
        beforeDestroy(){
            //4.防止当组件销毁时，这个事件xxxx还绑在总线上，浪费命名空间
            //这个用完了就解绑
            //不加参数就是把总线上的全部事件都解绑
            this.$bus.$off("xxxx")
        }
    }
</script>

<style scoped>
    #box{
        background-color: aquamarine;
    }
</style>