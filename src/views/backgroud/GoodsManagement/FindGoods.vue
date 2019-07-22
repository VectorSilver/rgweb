<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>查询商品</el-breadcrumb-item>
    </el-breadcrumb>
    <br />

    <el-table
      :data="GoodsList"
      stripe
      max-height="700"
      tooltip-effect="dark"
      style="width: 100%"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-table-column prop="id" label="商品ID" width="100"></el-table-column>
      <el-table-column prop="title" label="商品标题" width="200"></el-table-column>
      <el-table-column prop="sellPoint" label="卖点" width="400"></el-table-column>
      <el-table-column prop="price" label="价格" width="80"></el-table-column>
      <el-table-column prop="num" label="库存数量" width="100"></el-table-column>
      <el-table-column prop="status" label="状态" width="50"></el-table-column>
      <el-table-column prop="created" label="创建日期" width="100"></el-table-column>
      <el-table-column prop="updated" label="更新日期" width="100"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="dialogFormVisible = true; handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="shangjia(scope.row)">上架</el-button>
          <el-button size="mini" type="warning" @click="xiajia(scope.row)">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />

    <!-- 分页 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">是否确定删除？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteRow()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑商品弹窗 -->
    <el-dialog title="编辑商品" :visible.sync="dialogFormVisible">
      <el-form :model="GoodsList">
        <el-form-item label="商品id">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="商品标题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="商品卖点">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      GoodsList: [], // 存放商品信息
      delVisible: false, // 删除提示弹框的状态
      GoodsId: "", // 存放删除的数据id
      dialogFormVisible: false, // 编辑商品弹框的状态
      total: 1,
      rows: 10,
    };
  },
  methods: {
    getGoodsList() {
      //获取商品列表,默认加载第一页，10条内容
      this.axios.get("/1api/item/list", { params: { page: 1, rows: 10 } })
        .then(response => {
          this.GoodsList = response.data.rows;
          this.total = response.data.total;
        })
        .catch(error => {
          console.log(error);
        });
    },
    currentChange(val) {
      //当前页码改变
      this.axios.get("/1api/item/list", { params: { page: val, rows: this.rows } })
        .then(response => {
          this.GoodsList = response.data.rows;
        })
        .catch(error => {
          console.log(error);
        });
    },
    sizeChange(val) {
      //每页条数改变
      this.rows = val;
      this.axios.get("/1api/item/list", { params: { page: 1, rows: val } })
        .then(response => {
          this.GoodsList = response.data.rows;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleDelete(row) {
      //单行删除
      this.GoodsId = row.id; //取出商品id,存到GoodsId中
      this.delVisible = true; //弹出确认框
    },
    deleteRow() {
      //确定删除
      this.axios.get("/1api/rest/item/delete", { params: { id: this.GoodsId } })
        .then(response => {
          this.delVisible = false; //关闭确认框
          this.$message({
            //删除成功提示信息
            message: "删除成功",
            type: "success",
            center: true
          });
          this.getGoodsList(); //删除成功后重新获取数据
        })
        .catch(error => {
          console.log(error);
        });
    },
    shangjia(row) {
      //商品上架
      this.GoodsId = row.id; //取出商品id,存到GoodsId中
      this.axios.get("/1api/rest/item/reshelf", { params: { id: this.GoodsId } })
        .then(response => {
          this.$message({
            //上架成功提示信息
            message: "上架成功",
            type: "success",
            center: true
          });
          this.getGoodsList(); //上架成功后重新获取数据
        })
        .catch(error => {
          console.log(error);
        });
    },
    xiajia(row) {
      //商品下架
      this.GoodsId = row.id; //取出商品id,存到GoodsId中
      this.axios.get("/1api/rest/item/instock", { params: { id: this.GoodsId } })
        .then(response => {
          this.$message({
            //下架成功提示信息
            message: "下架成功",
            type: "success",
            center: true
          });
          this.getGoodsList(); //下架成功后重新获取数据
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleEdit(row) {
      //商品编辑
      this.GoodsId = row.id; //取出商品id,存到GoodsId中
      this.axios.get('/1api/rest/page/item', {params:{ id: this.GoodsId} })
        .then((response) => {
          console.log(this.GoodsId);
        }).catch((error) => {
          console.log(error)
        })
    }
  },
  created() {
    //生命周期钩子函数
    this.getGoodsList();
  }
};
</script>

<style lang="scss" scoped>
// body {
//   margin: 0;
// }
</style>

