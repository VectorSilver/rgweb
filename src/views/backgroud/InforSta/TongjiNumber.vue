<template>
    <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>信息统计</el-breadcrumb-item>
      <el-breadcrumb-item>统计数量</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
     <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="订单数量"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户数量"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="商品数量">
    </el-table-column>
  </el-table>


    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>

</style>

