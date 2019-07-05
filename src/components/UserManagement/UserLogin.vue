<template>
  <div>

    <!-- <el-container>
      <el-header> -->
        <my-header></my-header>
      <!-- </el-header> -->

      <!-- <el-main> -->
        <div id="top-div">
          <h1>上 睿 购，买 个 够！</h1>
          <div id="inner-div">
            <h3>用户登录</h3>
            <hr />
            <form action>
              <input type="text" placeholder="请输入用户名" name class="login-input" />
              <!-- <el-input
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                v-model="userName"
                class="inputs"></el-input> -->
              <br />
              <input type="password" placeholder="请输入密码" name class="login-input" />
              <br />
              <button class="login-input" id="login-button">登 录</button>
            </form>
            <div id="a-div">
              <router-link to="/findPass">忘记密码 </router-link>
              <router-link to="/register">免费注册</router-link>
            </div>
          </div>
        </div>
      <!-- </el-main>
    </el-container> -->

    <my-footer></my-footer>

  </div>
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';

export default {
  data() {
    return {
      userName: ""
    };
  },
  methods: {},
  components: {
    "my-header": Header,
    'my-footer': Footer
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}

#top-div {
  height: 500px;
  width: 100%;
  background-color: #409eff;
}

h1 {
  position: absolute;
  top: 150px;
  left: 400px;
  color: rgb(255, 255, 255);
}

#inner-div {
  height: 300px;
  width: 400px;
  background-color: rgb(255, 255, 255);
  position: relative;
  top: 100px;
  left: 1200px;
  border: 1px;
}

h3 {
  text-align: center;
  line-height: 50px;
  color: #606266;
}

.login-input {
  height: 35px;
  width: 250px;
  margin-top: 20px;
  margin-left: 75px;
}

#login-button {
  width: 255px;
  background-color: #67c23a;
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
