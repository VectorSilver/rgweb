<template>
  <div>

    <header>
        <h2 style="color:white" >睿购后台管理系统</h2>
    </header>

    <el-row>
      <el-col :span="4">

        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-folder"></i>
                <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">新增商品</el-menu-item>
            <el-menu-item index="1-2">查询商品列表</el-menu-item>
              <!-- <el-submenu index="1-2">
                <template slot="title">查询商品列表</template>
                    <el-menu-item index="1-2-1"></el-menu-item>
                    <el-menu-item index="1-2-2"></el-menu-item>
              </el-submenu> -->
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-folder"></i>
                <span slot="title">商品类目管理</span>
            </template>
            <el-menu-item index="2-1">新增商品</el-menu-item>
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

          
        </el-menu>

      </el-col>
      <el-col :span="20">

          <el-tabs type="border-card">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>

      </el-col>
    </el-row>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>

<style lang="scss" scoped>
    header {
        text-indent: 50px;
        background-color:#409EFF;
        height:50px;
        line-height:50px; 
    }
</style>

