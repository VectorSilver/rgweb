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
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="商品id" width="100"></el-table-column>
      <el-table-column prop="sellPoint" label="商品描述" width="500"></el-table-column>
      <el-table-column prop="created" label="创建日期" width="100"></el-table-column>
      <el-table-column prop="updated" label="更新日期" width="100"></el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      goodsDescList: [], //存放商品描述表
      multipleSelection: [],
      currentPage4: 1,
      total:100,
      row:10
    };
  },
  methods: {
    getGoodsDescList() {
      //获取商品列表
      this.axios
        .get("/api/rest/desc/all", { params: { page: 1, rows: 10 } })
        .then(response => {
          this.GoodsDescList = response.data.rows;
          this.total = response.data.total;
        })
        .catch(error => {
          alert(error);
        });
    },
    handleCurrentChange(val) {
      this.axios
        .get("/api/rest/desc/all", { params: { page: val, rows: this.row } })
        .then(response => {
          this.GoodsDescList = response.data.rows;
        })
        .catch(error => {
          alert(error);
        });
    },
    handleSizeChange(val) {
      this.row = val;
      this.axios
        .get("/api/rest/desc/all", { params: { page: 1, rows: val } })
        .then(response => {
          this.GoodsDescList = response.data.rows;
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  mounted() {
    this.getGoodsDescList();
  }
};
</script>
