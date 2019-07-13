<template>
  <div>

    <div style="margin-top: 20px">
      <el-button @click="changeGoods()">编辑</el-button>
      <el-button @click="deleteGoods()">删除</el-button>
      <el-button @click="putAway()">上架</el-button>
      <el-button @click="soldOut()">下架</el-button>
    </div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="商品ID" width="100"></el-table-column>
      <el-table-column prop="title" label="商品标题" width="200"></el-table-column>
      <el-table-column prop="childrenType" label="叶子类目" width="100"></el-table-column>
      <el-table-column prop="title" label="卖点" width="150"></el-table-column>
      <el-table-column prop="title" label="价格" width="80"></el-table-column>
      <el-table-column prop="title" label="库存数量" width="100"></el-table-column>
      <el-table-column prop="title" label="条形码" width="80"></el-table-column>
      <el-table-column prop="title" label="状态" width="80"></el-table-column>
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
  }
}
</script>
