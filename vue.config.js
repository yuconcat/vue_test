module.exports={
    pages:{
        index:{
            //入口
            entry:"src/main.js",
        },
    },
    //关闭语法检查
    lintOnSave:false,


//     //方法一
//     //开启代理服务器
//     devServer:{
//          //要请求的服务器路径
//          //缺点，只有请求前端不存在的资源，那么该请求才会转发给服务器
//         proxy:"http://localhost:5000"
//     }


//    方法二
    devServer:{
        proxy:{
            //有这个前缀，代理服务器会强制去请求服务器
            "/xxx":{
                //要请求的服务器路径
                target:"http://localhost:5000",
                //在请求到达服务器时，把前缀去掉
                PathRewrite:{"^/xxx":""}
            }
        }
    }


}