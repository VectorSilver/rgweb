<template>
  <div>

    <my-header></my-header>
    <!-- <div>
      <router-link>个人中心</router-link>
      <router-link>我的订单</router-link>
      <router-link>修改密码</router-link>
    </div> -->
    <div id="box-info">
      <h5>我的信息</h5>
      <hr />
      <br />
      用户名：张三 <br>
      电 话：123456789 <br>
      邮 箱：张三@abc.com <br>
      问 题：222 <br>
      答 案：222 <br>
      <button>编 辑</button>
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
  #box-info {
    border: 1px;
    width: 800px;
    height: 300px;
    position: absolute;
    top: 50px;
    left: 500px;
  }

  button {
    background-color: #ec760c;
    border: 0px;
    color: rgb(255, 255, 255);
    width: 50px;
    height: 30px;
  }
</style>
