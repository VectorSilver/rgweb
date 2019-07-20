<template>
  <div>

    <el-page-header content="我的信息" id="PageHeader" title="首页"></el-page-header>
    <br />

    <el-card>
      <div slot="header" class="clearfix">
        <span>我的信息</span>
      </div>用户名：张三
      <br />电 话：123456789
      <br />邮 箱：张三@abc.com
      <br />问 题：222
      <br />答 案：222
      <br />
      <button>编 辑</button>
    </el-card>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  background-color: #409eff;
  border: 0px;
  color: rgb(255, 255, 255);
  width: 50px;
  height: 30px;
}

// .clearfix:after {
//   clear: both
// }
</style>