<template>
  <div>

    <header>
      <el-row>
        <el-col :span="24">
          <h2 style="color:white;">睿购后台管理系统</h2>
        </el-col>
      </el-row>
    </header>

    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">
              <router-link to="/background/addGoods">新增商品</router-link> 
              </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/background/findGoods">查询商品列表</router-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">商品类目管理</span>
            </template>
            <el-menu-item index="2-1">新增商品类目</el-menu-item>
            <el-menu-item index="2-2">查询商品类目</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">商品描述管理</span>
            </template>
            <el-menu-item index="3-1">查询商品描述</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">商品规格模板</span>
            </template>
            <el-menu-item index="4-1">新增商品规格模板</el-menu-item>
            <el-menu-item index="4-2">查询商品规格模板</el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">商品规格参数</span>
            </template>
            <el-menu-item index="5-1">查询商品规格参数</el-menu-item>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">内容管理</span>
            </template>
            <el-menu-item index="6-1">内容分类管理</el-menu-item>
            <el-menu-item index="6-2">内容管理</el-menu-item>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item index="7-1">订单列表</el-menu-item>
          </el-submenu>

          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">信息统计</span>
            </template>
            <el-menu-item index="8-1">统计订单数量</el-menu-item>
            <el-menu-item index="8-2">统计用户数量</el-menu-item>
            <el-menu-item index="8-3">统计商品数量</el-menu-item>
          </el-submenu>

          <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item index="8-1">管理员登陆</el-menu-item>
            <el-menu-item index="8-2">用户列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :span="20" class="panel">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
          <el-breadcrumb-item>新增商品</el-breadcrumb-item>
        </el-breadcrumb>
        <br>

        <el-card class="box-card">
          <router-view></router-view>
        </el-card>

      </el-col>

    </el-row>

  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  text-indent: 50px;
  background-color: #409eff;
  height: 50px;
  line-height: 50px;
}

.panel {
  margin-top: 20px;
  width: 1200px;
  margin-left:20px;
}

a {
  text-decoration: none;
  color: white;
}
 
.router-link-active {
  // text-decoration: none;
  // color: yellow;
}
</style>

