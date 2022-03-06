<template>
    <div id="app">
        <Category title="美食">
            <!--slot="center" 指定放在那个插槽里-->
            <img slot="center" src="./微信图片_20220303160712.jpg">
            <a slot="footer" href="#">点我转跳</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
            <!--可以复用一个插槽且不会覆盖,使用template不影响结构-->
            <div slot="footer" class="xxx">
                <a href="#">网游</a>
                <a href="#">单击</a>
            </div>
        </Category>
        <Category title="电影">
            <ul slot="center">
                <li v-for="(item,index) in films" :key="index">{{item}}</li>
            </ul>
            <!--可以复用一个插槽且不会覆盖-->
            <a slot="footer" href="#">电视</a>
            <a slot="footer" href="#">平板</a>
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
    .xxx{
        text-align: center;
    }
</style>
