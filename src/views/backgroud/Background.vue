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
            <router-link to="/background/addGoods">
              <el-menu-item index="1-1">新增商品</el-menu-item>
            </router-link>
            <router-link to="/background/findGoods">
              <el-menu-item index="1-2">查询商品列表</el-menu-item>
            </router-link>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">商品类目管理</span>
            </template>
            <router-link to="/background/addGoodsType">
              <el-menu-item index="2-1">新增商品类目</el-menu-item>
            </router-link>
            <router-link to="/background/findGoodsType">
              <el-menu-item index="2-2">查询商品类目</el-menu-item>
            </router-link>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">商品描述管理</span>
            </template>
            <router-link to="/background/findGoodsDesc">
              <el-menu-item index="3-1">查询商品描述</el-menu-item>
            </router-link>
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
            <router-link to="/background/categories">
              <el-menu-item index="6-1">内容分类管理</el-menu-item>
            </router-link>
            <router-link to="/background/cms">
              <el-menu-item index="6-2">内容管理</el-menu-item>
            </router-link>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">订单管理</span>
            </template>
            <router-link to="/background/orderManagement">
              <el-menu-item index="7-1">订单列表</el-menu-item>
            </router-link>
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

      <el-col :span="20" style="position: relative;">
        <el-card class="box-card">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
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

a {
  text-decoration: none;
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



