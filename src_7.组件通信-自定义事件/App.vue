<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <!--通过父组件给子组件传递函数类型的props实现：父给子传递数据-->
        <!--父组件通过import引入子组件，并注册，在子组件标签上添加要传递的属性，
            子组件通过props接收，接收有两种形式
            一是通过数组形式[‘要接收的属性’ ]，
            二是通过对象形式{ }-->
        <school :msg_to_school="msg"></school>


        <!--给Student组件绑定一个自定义事件实现：包括父子、兄弟、跨级传递数据
            VM.$on('事件名',callback)
            callback回调$emit要传送的数据
            事件的回调在这里
            监听当前实例上自定义事件
            若想让自定义事件只触发一次可以使用once修饰符-->
        <Student @xxxxxx="getStudentName" ></Student>


        <!-- 首先给你的子组件做标记 ref="tea"-->
        <!-- 放在组件中的@click="demo2" 不会被识别为原生DOM事件
            @click.native="demo2"这样才会被识别-->
        <Teacher ref="tea" @click.native="demo2">xxx</Teacher>
        <button @click="demo">点我获取教师名</button>
    </div>
</template>

<script>
    //引入组件
    import School from "./components/School.vue"
    import Student from "./components/Student.vue"
    import Teacher from "./components/Teacher.vue"
    export default {
        name: "App",
        components:{
            School:School,
            Student:Student,
            Teacher:Teacher
        },
        data(){
            return {
                msg:"十七中"
            }
        },
        methods:{
            getStudentName(name){
                console.log("App收到了学生名:",name)
            },
            demo(){
                //在父组件中可以使用this.$refs.组件的标记访问子组件
                //包括访问自组件的data里面的数据，调用它的函数
                console.log(this.$refs.tea.$data.teacherName)
            },
            demo2(){
                alert(123)
            }
        }
    }
</script>

<style scoped>
    #app{
        background-color: blanchedalmond;
    }
</style>