<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品类目管理</el-breadcrumb-item>
      <el-breadcrumb-item>查询商品类目</el-breadcrumb-item>
    </el-breadcrumb>
    <br />

    <el-button type="danger" @click="deleteCategories()">删除</el-button>
    <el-tree
      :data="categoriesList"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      check-strictly
      @check-change="handleClick"
      ref="treeForm"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoriesList: [], //存放后台传回的类目
      defaultProps: {
        children: "children",
        label: "label"
      },
      x: '',
      i: 0,
      itemId: []
    };
  },
  methods: {
    getCategories() {
      //获取商品类别
      this.axios
        .get("/2api/item/cat/list")
        .then(response => {
          this.categoriesList = response.data; //获得所有商品类别数据
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleClick(data, checked, node) {
      //
      this.i++;
      if (this.i % 2 == 0) {
        if (checked) {
          this.$refs.treeForm.setCheckedNodes([]);
          this.$refs.treeForm.setCheckedNodes([data]);
          //交叉点击节点
        } else {
          this.$refs.treeForm.setCheckedNodes([]);
          //点击已经选中的节点，置空
        }
      }
    },
    deleteCategories() {
      //
      this.itemId = this.$refs.treeForm.getCheckedKeys();
      for (var i = 0; i < this.itemId.length; i++) {
        this.x = this.itemId[0];
        console.log(this.x);
      }
      this.axios
        .get("2api/item/cat/delete", {params: {id: this.x}})
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
        this.getCategories();
    }
  },
  created() {
    this.getCategories();
  }
};
</script>
