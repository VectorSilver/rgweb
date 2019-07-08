<template>
    <div>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>新增商品</el-breadcrumb-item>
        </el-breadcrumb>
        <br>

        <el-card class="box-card">
            <router-view></router-view>
        </el-card>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


