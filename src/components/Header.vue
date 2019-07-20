<template>
  <div>

    <ul>
      <li class="header-li-left">
        <router-link to="/userLogin">您好，请登录</router-link>
      </li>
      <li class="header-li-left">
        <router-link to="/register">注册</router-link>
      </li>
      <li class="header-li-right">
        <router-link to="">关于睿购商城</router-link>
      </li>
      <li class="header-li-right">
        <router-link to="/myRG">我的睿购</router-link>
      </li>
      <li class="header-li-right">
        <router-link to="">我的订单</router-link>
      </li>
      <li class="header-li-right">
        <router-link to="/shoppingCart">购物车(0)</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
}

ul {
  background-color: rgb(240, 226, 226);
  width: 100%;
  height: 30px;
  line-height: 30px;
}
// #bigdiv {
//   position: absolute;
//   width: 100%;
//   height: 30px;
// }

// #header {
//   font-size: 10px;
//   color: gray;
//   background-color: #eeeeee;
//   width: 100%;
//   height: 30px;
//   line-height: 30px;
//   margin-top: 0px;
// }

// #header-img {
//   position: relative;
//   left: 550px;
//   top: 15px;
// }

// #header-btn {
//   background-color: orange;
//   width: 80px;
//   height: 46px;
//   line-height: 46px;
//   font-size: 18px;
//   color: white;
//   margin-left: -5px;
//   border: 0px;
// }

// #header-sousuo {
//   width: 650px;
//   height: 47px;
//   position: relative;
//   left: 820px;
//   top: -60px;
// }

.header-li-left {
  float: left;
  margin-left: 20px;
}

.header-li-right {
  float: right;
  margin-right: 20px;
}
</style>
