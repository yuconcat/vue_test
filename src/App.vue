<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <!--通过父组件给子组件传递函数类型的props实现：父给子传递数据-->
        <!--父组件通过import引入子组件，并注册，在子组件标签上添加要传递的属性，
            子组件通过props接收，接收有两种形式
            一是通过数组形式[‘要接收的属性’ ]，
            二是通过对象形式{ }-->
        <school :msg_to_school="msg"></school>


        <!--给Student组件绑定一个自定义事件实现：子给父传递数据-->
        <Student @xxxxxx="getStudentName"></Student>
    </div>
</template>

<script>
    //引入组件
    import School from "./components/School.vue"
    import Student from "./components/Student.vue"
    export default {
        name: "App",
        components:{
            School:School,
            Student:Student
        },
        data(){
            return {
                msg:"hellow"
            }
        },
        methods:{
            getStudentName(name){
                console.log("App收到了学生名:",name)
            }
        }
    }
</script>

<style scoped>
    #app{
        background-color: blanchedalmond;
    }
</style>