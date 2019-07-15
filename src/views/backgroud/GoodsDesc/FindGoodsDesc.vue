<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品描述管理</el-breadcrumb-item>
      <el-breadcrumb-item>查询商品描述</el-breadcrumb-item>
    </el-breadcrumb>
    <br />

    <div style="margin-top: 20px">
      <el-button @click="changeGoods()">编辑</el-button>
      <el-button @click="deleteGoods()">删除</el-button>
    </div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="商品id" width="100"></el-table-column>
      <el-table-column prop="title" label="商品描述" width="200"></el-table-column>
      <el-table-column prop="title" label="创建日期" width="100"></el-table-column>
      <el-table-column prop="title" label="更新日期" width="100"></el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "111",
          title: "王小虎",
          childrenType: "上海市"
        },
        {
          id: "111",
          title: "王小虎",
          childrenType: "上海市"
        },
        {
          id: "111",
          title: "王小虎",
          childrenType: "上海市"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    changeGoods() {},
    deleteGoods() {},
    putAway() {},
    soldOut() {},
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
