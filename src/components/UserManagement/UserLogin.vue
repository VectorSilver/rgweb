<template>
  <div>

    <my-header></my-header>

    <div id="top-div">
      <h1>上 睿 购，买 个 够！</h1>
      <div id="inner-div">
        <h3>用户登录</h3>
        <hr />
        <form>
          <input type="text" placeholder="请输入用户名" class="login-input" v-model="form.name">
          <br />
          <input type="password" placeholder="请输入密码" class="login-input" v-model="form.pass">
          <br />
          <button class="login-input" id="login-button" @click="onSubmit">登 录</button>
        </form>
        <!-- <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form> -->
        <div id="a-div">
          <router-link to="/findPass">忘记密码 </router-link>
          <router-link to="/register">免费注册</router-link>
        </div>
      </div>
    </div>

    <my-footer></my-footer>

  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";

export default {
  data() {
    return {
      form: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  components: {
    "my-header": Header,
    "my-footer": Footer
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
  width: 254px;
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
