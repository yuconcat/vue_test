<template>
    <div>
        <h2>上方组件的求和为{{sum1}}</h2>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name"/>
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    //nanoid就是一个生成唯一标识的一个插件，在前面讲key的时候用过
    import {nanoid} from "nanoid"
    export default {
        name: "Person",
        data(){
            return{
                name:""
            }
        },
        computed:{
            sum1(){
                return this.$store.state.sum
            },
            personList(){
                return this.$store.state.personList
            }
        },
        methods:{
            add(){
                const personOBJ={id:nanoid(),name:this.name}
                this.$store.commit("ADD_PERSON",personOBJ)
                this.name = ""
            }
        }
    }
</script>

<style scoped>

</style>