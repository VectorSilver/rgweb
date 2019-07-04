<template>
    <div>

        <my-header></my-header>

        <div id="outbox">
            <h3>找回密码</h3>
            <hr>
            <p>请输入用户名：</p>
            <input type="text" placeholder="请输入用户名"> <br><br>
            <button>下一步</button> <br>
            <router-link to="/userLogin">返回登陆>></router-link>
        </div>

    </div>
</template>

<script>
    import Header from '../Header'

    export default {
        data() {
            return {
                
            }
        },
        methods:{},
        components:{
            'my-header': Header
        }
    }
</script>

<style lang="scss" scoped>
    * {
        text-decoration: none;
    }

    #outbox {
        border: 1px;
        width: 500px;
        height: 500px;
        position: absolute;
        top: 50px;
        left: 700px;
        text-align: center;
    }

    h3 {
        text-align: center;
        color: rgb(105, 98, 100);
    }

    button{
        width: 200px;
        height: 40px;
        background-color: #ff8800;
        border: 0px;
        color: white;
        font-family: '黑体';
        font-size: 20px;
    }

    input {
        width: 400px;
        height: 30px;
    }
</style>
