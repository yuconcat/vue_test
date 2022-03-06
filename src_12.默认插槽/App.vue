<template>
    <div id="app">
        <Category title="美食">
            <!--这个会被解析，并放入子组件中-->
            <img src="./微信图片_20220303160712.jpg">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <ul>
                <li v-for="(item,index) in films" :key="index">{{item}}</li>
            </ul>
        </Category>
    </div>
</template>

<script>
    //2.引入第三方库
   import Category from "./components/Category"
    export default {
        name: "App",
        components:{Category},
        data(){
            return{
                foods:["z","x","c"],
                games:["a","s","d"],
                films:["q","w","e"]
            }
        }
    }
</script>

<style scoped>
    #app{
        background-color: blanchedalmond;
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
        height: 60%;
    }
</style>
