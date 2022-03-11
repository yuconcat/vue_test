<template>
    <div>
        <h1>当前求和为：{{sum1}}</h1>
        <h3>乘十后为：{{bigSum}}</h3>
        <h3>{{school1}} {{subject1}}</h3>
        <h2>下方组件的人数{{personList1.length}}</h2>
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <!--这里的(n)主要是用来传值的，不然vue会传鼠标事件-->
        <button @click="increament(n)">+</button>
        <button @click="decreament(n)">-</button>
        <button @click="increamentOdd(n)">当前求和为奇数再加</button>
        <button @click="increamentWait(n)">等一等再加</button>
    </div>
</template>

<script>
    //要先引入库
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name: "Category",
        data(){
            return{
                n:1
            }
        },
        computed:{
            // sum1(){
            //     return this.$store.state.sum
            // },
            //
            // school1(){
            //     return this.$store.state.school
            // },
            // subject1(){
            //     return this.$store.state.subject
            // },

            //简写形式（对象写法）
            //mapState：用于帮助我们映射state中的数据属性
            ...mapState({sum1:"sum",school1:"school",subject1:"subject",personList1:"personList"}),

            //简写形式（数组写法）
            //当计算属性名和读取的属性名一致时用
            // ...mapState(["sum","school","subject"]),

 //============================================================================

            // bigSum(){
            //     return this.$store.getters.bigSum
            // },

            //简写形式（数组写法）
            ////mapGetters：用于帮助我们映射Getters中的数据属性
            ...mapGetters(["bigSum"])

        },
        methods:{
            // increament(){
            //     //使用第一步
            //     //不需要业务逻辑的可以不用走actions而直接和mutations对话
            //     console.log("actions中的jia被调用了1")
            //     this.$store.commit("JIA",this.n)
            // },
            // decreament(){
            //     console.log("actions中的jian被调用了1")
            //     this.$store.commit("JIAN",this.n)
            //
            // },
            //使用第一步
            //上面代码的简写形式（对象形式）
            //不需要业务逻辑的可以不用走actions而直接和mutations对话
            //mapMutations：用于帮助我们调用commit去联系mutations
            ...mapMutations({increament:"JIA",decreament:"JIAN"}),

//===========================================================================

            // increamentOdd(){
            //     this.$store.dispatch("odd",this.n)
            // },
            // increamentWait(){
            //     this.$store.dispatch("timerout",this.n)
            // },

            //上面代码的简写形式（对象形式）
            //要和actions对话
            //mapActions：用于帮助我们调用dispatch去联系Actions
            ...mapActions({increamentOdd:"odd",increamentWait:"timerout"})
        }

    }
</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>