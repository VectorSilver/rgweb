<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>查询商品</el-breadcrumb-item>
    </el-breadcrumb>
    <br />

    <el-table
      :data="goodsList"
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
      <el-form :model="goodsIfo">
        <el-form-item label="商品id">
          <el-input v-model="goodsIfo.id"></el-input>
        </el-form-item>
        <el-form-item label="商品标题">
          <el-input v-model="goodsIfo.title"></el-input>
        </el-form-item>
        <el-form-item label="商品卖点">
          <el-input type="textarea" v-model="goodsIfo.sellPoint"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="goodsIfo.price"></el-input>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input v-model="goodsIfo.num"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false; changeGoods()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      goodsList: [], // 存放商品列表信息
      delVisible: false, // 删除提示弹框的状态
      goodsId: "", // 存放删除的数据id
      dialogFormVisible: false, // 编辑商品弹框的状态
      total: 1,
      rows: 10,
      goodsIfo: 
        {
          id: "",
          title: "",
          sellPoint: "",
          price: "",
          num: ""
        }
      
    };
  },
  methods: {
    getGoodsList() {
      //获取商品列表,默认加载第一页，10条内容
      this.axios
        .get("/1api/item/list", { params: { page: 1, rows: 10 } })
        .then(response => {
          this.goodsList = response.data.rows;
          this.total = response.data.total;
        })
        .catch(error => {
          console.log(error);
        });
    },
    currentChange(val) {
      //当前页码改变
      this.axios
        .get("/1api/item/list", { params: { page: val, rows: this.rows } })
        .then(response => {
          this.goodsList = response.data.rows;
        })
        .catch(error => {
          console.log(error);
        });
    },
    sizeChange(val) {
      //每页条数改变
      this.rows = val;
      this.axios
        .get("/1api/item/list", { params: { page: 1, rows: val } })
        .then(response => {
          this.goodsList = response.data.rows;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleDelete(row) {
      //单行删除
      this.goodsId = row.id; //取出商品id,存到GoodsId中
      this.delVisible = true; //弹出确认框
    },
    deleteRow() {
      //确定删除
      this.axios
        .get("/1api/rest/item/delete", { params: { id: this.goodsId } })
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
      this.goodsId = row.id; //取出商品id,存到GoodsId中
      this.axios
        .get("/1api/rest/item/reshelf", { params: { id: this.goodsId } })
        .then(response => {
          if (row.status == 1) {
            //判断商品是否已上架
            this.$message({
              message: "商品已上架！",
              type: "error",
              center: true
            });
          } else {
            //上架成功提示信息
            this.$message({
              message: "上架成功！",
              type: "success",
              center: true
            });
          }
          this.getGoodsList(); //上架成功后重新获取数据
        })
        .catch(error => {
          console.log(error);
        });
    },
    xiajia(row) {
      //商品下架
      this.goodsId = row.id; //取出商品id,存到GoodsId中
      this.axios
        .get("/1api/rest/item/instock", { params: { id: this.goodsId } })
        .then(response => {
          if (row.status == 2) {
            //判断商品是否已上架
            this.$message({
              message: "商品已下架！",
              type: "error",
              center: true
            });
          } else {
            //下架成功提示信息
            this.$message({
              message: "下架成功！",
              type: "success",
              center: true
            });
          }
          this.getGoodsList(); //下架成功后重新获取数据
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleEdit(row) {
      //弹出商品编辑框，显示对应商品信息
      this.goodsIfo.id = row.id;
      this.goodsIfo.title = row.title;
      this.goodsIfo.sellPoint = row.sellPoint;
      this.goodsIfo.price = row.price;
      this.goodsIfo.num = row.num;
    },
    changeGoods() {
      //修改商品后提交
      this.axios
        .get("/1api/rest/page/item", {
          params: {
            id: this.goodsIfo.id,
            title: this.goodsIfo.title,
            sellPoint: this.goodsIfo.sellPoint,
            price: this.goodsIfo.price,
            num: this.goodsIfo.num
          }
        })
        .then(response => {
          this.$message({
            message: "商品信息修改成功！",
            type: "success",
            center: true
          });
          this.getGoodsList(); //修改完成后重新获取数据
        })
        .catch(error => {
          console.log(error);
        });
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

