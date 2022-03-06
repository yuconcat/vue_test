<template>
    <div id="app">
        <!--决定数据生成的结构的由插槽的使用者来确定-->
        <Category title="游戏">
            <!--必须要使用<template scope="obj">
                App可以通过这种方式从组件中获取数据,
                可以用obj来接收组件传过来的数据-->
            <template scope="obj">
                <ul>
                    <li v-for="(item,index) in obj.gamexxx" :key="index">{{item}}</li>
                </ul>
                <h2>{{obj.msg}}</h2>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="obj">
                <ol>
                    <li v-for="(item,index) in obj.gamexxx" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="obj">
                <h3>
                    <li v-for="(item,index) in obj.gamexxx" :key="index">{{item}}</li>
                </h3>
            </template>
        </Category>
    </div>
</template>

<script>
    //2.引入第三方库
   import Category from "./components/Category"
    export default {
        name: "App",
        components:{Category},
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
