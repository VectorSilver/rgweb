<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>查询商品</el-breadcrumb-item>
    </el-breadcrumb>
    <br />

    <div style="margin-top: 20px">
      <el-button @click="changeGoods()">编辑</el-button>
      <el-button @click="deleteGoods()">删除</el-button>
      <el-button @click="putAway()">上架</el-button>
      <el-button @click="soldOut()">下架</el-button>
    </div>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>

    <el-table
      ref="multipleTable"
      :data="GoodsList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange()"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="商品ID" width="100"></el-table-column>
      <el-table-column prop="title" label="商品标题" width="200"></el-table-column>
      <el-table-column prop="sellPoint" label="卖点" width="150"></el-table-column>
      <el-table-column prop="price" label="价格" width="80"></el-table-column>
      <el-table-column prop="number" label="库存数量" width="100"></el-table-column>
      <el-table-column prop="barcode" label="条形码" width="80"></el-table-column>
      <el-table-column prop="status" label="状态" width="80"></el-table-column>
      <el-table-column prop="created" label="创建日期" width="100"></el-table-column>
      <el-table-column prop="updated" label="更新日期" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      GoodsList: [],//存放商品信息
      page: 1,
      rows: 100,
      multipleSelection: []
    };
  },
  methods: {
    getGoodsList() { //从后台获取商品列表
      this.axios.get('/api/item/list', {params:{page:1,rows:100} }).then((response) => {
       console.log(response)
        this.GoodsList = response.data.rows;
      }).catch((error) => {
        alert(error);
      })
    },
    changeGoods() {

    },
    deleteGoods() {

    },
    putAway() {

    },
    soldOut() {

    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  created(){
    this.getGoodsList();
  }
}
</script>
