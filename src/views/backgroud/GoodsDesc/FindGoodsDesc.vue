<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品描述管理</el-breadcrumb-item>
      <el-breadcrumb-item>查询商品描述</el-breadcrumb-item>
    </el-breadcrumb>
    <br>

    <el-table
      :data="goodsDescList"
      stripe
      max-height="700"
      tooltip-effect="dark"
      style="width: 100%"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <!-- <el-table-column type="selection" width="55"></el-table-column> -->
      <el-table-column prop="itemId" label="商品id" width="100"></el-table-column>
      <el-table-column prop="created" label="创建日期" width="100"></el-table-column>
      <el-table-column prop="updated" label="更新日期" width="100"></el-table-column>
      <el-table-column prop="itemDesc" label="商品描述" width="1000"></el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="currentPage"
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
      loading: false,
      goodsDescList: [], //存放商品描述信息
      currentPage: 1,
      total: 1,
      rows: 5
    };
  },
  methods: {
    getGoodsDescList() {
      //获取商品列表
      this.axios.get("/3api/rest/desc/all", { params: { page: 1, rows: 5 } })
        .then(response => {
          this.goodsDescList = response.data.rows;
          this.total = response.data.total;
        })
        .catch(error => {
          alert(error);
        });
    },
    currentChange(val) {
      this.axios.get("/3api/rest/desc/all", { params: { page: val, rows: this.row } })
        .then(response => {
          this.goodsDescList = response.data.rows;
        })
        .catch(error => {
          alert(error);
        });
    },
    sizeChange(val) {
      this.rows = val;
      this.axios.get("/3api/rest/desc/all", { params: { page: 1, rows: val } })
        .then(response => {
          this.goodsDescList = response.data.rows;
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  created() {
    this.getGoodsDescList();
  }
};
</script>
