<template>
  <div>

    <my-header></my-header>
    <my-searchBox></my-searchBox>

    <div id="left-box">
      <ul>
        <li>
          <router-link to="/myRG/myInfo">我的信息</router-link>
        </li>
        <li>
          <router-link to>我的订单</router-link>
        </li>
        <li>
          <router-link to="/myRG/changePass">修改密码</router-link>
        </li>
      </ul>
    </div>

    <div id="right-box">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import Header from '../Header'
import SearchBox from '../SearchBox'

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    'my-header': Header,
    'my-searchBox': SearchBox
  }
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  text-decoration: none;
}

#left-box {
  width: 200px;
  position: relative;
  top: 130px;
  left: 25%;
}

#right-box {
  width: 800px;
  position: relative;
  top: 20px;
  left: 30%;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

#PageHeader {
  position: absolute;
  top: 50px;
  left: 100px;
}

.grid-content {
  min-height: 100px;
  position: relative;
}
</style>
