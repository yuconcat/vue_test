<template>
    <!--结构-->
    <div>
        <h2>学校名称:{{schoollName}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    export default {

        name:"School",
        data(){
            return {
                schoollName:"尚硅谷",
                address:"石家庄"
            }
        }
    }
</script>

<style scoped>

</style>