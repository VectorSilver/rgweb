<template>
  <div>

    <my-header></my-header>

    <!-- 响应式布局 -->
    <el-row>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content"></div></el-col>
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
        <!-- <el-col :span="6"><div class="grid-content"></div></el-col>
        <el-col :span="12"> -->
          <div class="grid-content">

            <el-page-header @back="goBack" content="我的信息" id="PageHeader" title="首页"></el-page-header>
            <div id="left-box">
              <ul>
                <li>
                  <router-link to="/myInfo">我的信息</router-link>
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
        <!-- </el-col>
        <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col> -->
        <!-- </div> -->
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content"></div></el-col>
    </el-row>

    </div>
</template>

<script>
  import Header from '../Header'

  export default {
    data() {
      return {
        
      }
    },
    methods:{
      goBack(){

      }
    },
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
    width: 10%;
    position: absolute;
    top: 100px;
  }

  #right-box {
    width: 90%;
    position: absolute;
    top: 100px;
    left: 100px;
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

  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    position: relative;
  }
</style>
