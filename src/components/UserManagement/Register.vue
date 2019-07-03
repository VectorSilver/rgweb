<template>
  <div>

    <my-header></my-header>

    <div id="top-div">
        <h1>上 睿 购，买 个 够！</h1>
        <div id="inner-div">
            <h3>用户注册</h3>
            <hr />
            <form action>
                <input type="text" placeholder="请输入用户名" name="" class="login-input" />
                <br />
                <input type="password" placeholder="请输入密码" name="" class="login-input" />
                <br />
                <input type="password" placeholder="请再次输入密码" name="" class="login-input" />
                <br>
                <input type="number" placeholder="请输入手机号" name="" class="login-input" />
                <br>
                <input type="email" placeholder="请输入邮箱" name="" class="login-input" />
                <br>
                <input type="text" placeholder="请输入密码提示问题" name="" class="login-input" />
                <br>
                <input type="text" placeholder="请输入密码提示问题答案" name="" class="login-input" />
                <button class="login-input" id="login-button">立即注册</button>
            </form>
            <div id="a-div">
                <a href>已有帐号，去登陆>></a>
            </div>
        </div>
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
  };
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}

#top-div {
  height: 800px;
  width: 100%;
  background-color: #e72955;
}

h1 {
  position: absolute;
  top: 150px;
  left: 400px;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 20px #fdec84, 10px -10px 30px #ffae35,
    20px -20px 40px #ec760c, -20px -60px 50px #cd4607, 0px -80px 60px #973717,
    10px -40px 70px #451b0e;
}

#inner-div {
  height: 600px;
  width: 400px;
  background-color: rgb(255, 255, 255);
  position: relative;
  top: 50px;
  left: 1200px;
  border: 1px;
}

h3 {
  text-align: center;
  line-height: 50px;
  color: rgb(105, 98, 100);
}

.login-input {
  height: 35px;
  width: 250px;
  margin-top: 20px;
  margin-left: 75px;
}

#login-button {
  width: 255px;
  background-color: #ff8800;
  border: 0px;
  color: rgb(255, 255, 255);
  font-size: 15px;
}

#a-div {
  margin-left: 200px;
}

a {
  text-decoration: none;
  font-size: 15px;
  color: rgb(105, 98, 100);
}
</style>
