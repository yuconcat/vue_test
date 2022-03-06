<template>
    <div class="category">
        <h1>当前求和为：{{sum}}</h1>
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increament">+</button>
        <button @click="decreament">-</button>
        <button @click="increamentOdd">当前求和为奇数再加</button>
        <button @click="increamentWait">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data(){
            return{
                n:1,
                sum:0
            }
        },
        methods:{
            increament(){
                this.sum += this.n
            },
            decreament(){
                this.sum -= this.n
            },
            increamentOdd(){
                if(this.sum%2){
                    this.sum+=this.n
                }
            },
            increamentWait(){
                setTimeout(()=>{
                    this.sum += this.n
                },1000)
            },
        }

    }
</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>