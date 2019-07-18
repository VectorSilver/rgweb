<template>
 <div class="custom-tree-container">

  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item>内容管理</el-breadcrumb-item>
  <el-breadcrumb-item>内容分类管理</el-breadcrumb-item>
  </el-breadcrumb>
  <br />

  <div class="block">
    <p>内容分类管理</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>

  </div>
</div>

</template>

<script>
  let id = 1000;

  export default {
    data() {
      const data = [{
       
      }];
      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'New test', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>新增</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
              <el-button size="mini" type="text" >修改</el-button>
            </span>
          </span>);
      }
    },
    created(){
      
    }
  };
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>