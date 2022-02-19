<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我</button>
        <School ref="sch" id="schoo"></School>
    </div>
</template>

<script>
    import School from "./components/School"
    export default {
        name: "App",
        components:{School},
        data(){
            return{
                msg:"hellow world"
            }
        },
        methods:{
            //ref可以用来定位元素，类似id选择器，可以用来操作DOM
            showDOM(){
                console.log(this.$refs.title) //获得该组件下的对应DOM元素
                console.log(this.$refs.btn)   //获得该组件下的对应DOM元素

                console.log(this.$refs.sch)   //得到School的vc
                console.log(document.getElementById("schoo"))  //得到的是<School ref="sch" id="schoo">
                                                                    //<h2>张三</h2>
                                                                    //<h2>北京</h2>
                                                                    // </School>
            }
        }

    }
</script>

<style scoped>

</style>