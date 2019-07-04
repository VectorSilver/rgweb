<template>
  <div>

    <my-header></my-header>

    <div id="left-box">
      <ul>
        <li>
          <router-link to="/myInfo">我的睿购</router-link>
        </li>
        <li>
          <router-link to="">我的订单</router-link>
        </li>
        <li>
          <router-link to="/changePass">修改密码</router-link>
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

<style scoped lang="scss">
  * {
    list-style: none;
    text-decoration: none;
  }

  #left-box {
    width: 200px;
    height: 500px;
    position: absolute;
    top: 50px;
    left: 300px;
  }

  #right-box {
    border: 1px;
    width: 800px;
    height: 300px;
    position: absolute;
    top: 50px;
    left: 500px;
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
</style>
