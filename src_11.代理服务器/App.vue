<template>
    <div id="app">
        <button @click="getStudent"></button>

    </div>
</template>

<script>
    //2.引入第三方库
   import axios from "axios"
    export default {
        name: "App",
        methods:{
            getStudent(){
                axios.get("url").then(
                    //response是返回的响应对象，response.data才是里面的数据
                    response=>{
                        console.log("请求成功",response.data)
                    },
                    //error是返回的响应对象，error.message才是里面的数据
                    error=>{
                        console.log("请求成功",error.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
    #app{
        background-color: blanchedalmond;
    }
</style>

<!--1.引入axios-->
<!--npm i axios-->
<!--用promise封装了ajax-->

<!--cors解决跨域：8080给5000发信息，5000收到，并在返回的数据上添加一些响应头，
                当浏览器收到返回的数据时，看到响应头，就知道这些数据是服务器专门返回给8080的，
                所以浏览器就不拦截（这种方法前端不用做任何事，由后端来解决跨域）-->

<!--代理服务器也可以解决跨域：浏览器端口8080，设置代理服务器为8080，则这两之间没有跨域问题，
                         代理服务器8080再和服务器5000交互信息，用http，也没有跨域问题-->