<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品描述管理</el-breadcrumb-item>
      <el-breadcrumb-item>查询商品描述</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="margin-top: 20px">
      <el-button @click="changeGoods()">编辑</el-button>
      <el-button @click="deleteGoods()">删除</el-button>
    </div>

    <el-table
      ref="multipleTable"
      :data="goodsDescList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange()"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="item_id" label="商品id" width="100"></el-table-column>
      <el-table-column prop="item_desc" label="商品描述" width="200"></el-table-column>
      <el-table-column prop="created" label="创建日期" width="100"></el-table-column>
      <el-table-column prop="updated" label="更新日期" width="100"></el-table-column>
    </el-table>

  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      goodsDescList: [], //存放商品描述表
      multipleSelection: []
    };
  },
  methods: {
    getGoodsDesc(){
      this.axios.get('/api/rest/desc/all').then((response) => {
        alert(response);
        this.goodsDescList = response.data;
      }).catch((error) => {
        alert(error);
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted() {
    this.getGoodsDesc();
  }
};
</script>
