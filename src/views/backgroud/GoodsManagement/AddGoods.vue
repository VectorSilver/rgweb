<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增商品</el-breadcrumb-item>
    </el-breadcrumb>
    <br />

    <el-form :model="form" ref="form" label-width="80px">
      <el-form-item label="商品类目">
        <el-button @click="dialogTreeVisible = true; getCategories()">选择类目</el-button>
        <span>{{ ' 您选择的类目id为：' + form.cid}}</span>
      </el-form-item>
      <el-form-item label="商品标题" prop="title">
        <el-input v-model="form.title" placeholder="请输入商品标题"></el-input>
      </el-form-item>
      <el-form-item label="商品卖点" prop="sellPoint">
        <el-input type="textarea" autosize v-model="form.sellPoint" placeholder="请输入商品卖点"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="form.price" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item-number label="商品库存" :min="1" controls-position="right" prop="number">
        <el-input v-model="form.number" placeholder="请输入商品库存"></el-input>
      </el-form-item-number>
      <el-form-item label="条形码" prop="barCode">
        <el-input v-model="form.barCode"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload class="upload-demo" action multiple :limit="3">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品描述" v-model="form.desc" autosize prop="name" placeholder="请输入商品描述">
        <wangEditor :catchData="catchData"></wangEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="选择类目" :visible.sync="dialogTreeVisible">
      <!-- Tree -->
      <el-tree
        :data="categoriesList"
        :props="defaultProps"
        show-checkbox
        node-key="id"
        check-strictly
        @check-change="handleClick"
        ref="treeForm"
      ></el-tree>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTreeVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogTreeVisible = false; getCheckedKeys()"
          highlight-current="true"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import wangEditor from "./wangEditor";
import Qs from "qs";

export default {
  data() {
    return {
      i: 0, //
      form: {
        //存放输入的表单数据
        cid: "",
        title: "",
        sellPoint: "",
        price: "",
        number: "",
        barCode: "",
        desc: ""
      },
      dialogTreeVisible: false, //树形组件默认隐藏
      categoriesList: [], //存放后台传回的类目
      itemId: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    catchData(value) {
      //接受wangEditor子组件传过来的参数
      this.content = value;
    },
    submitForm() {
      //新增商品表单提交
      var item = {
        title: this.form.title,
        sellPoint: this.form.sellPoint,
        price: this.form.price,
        number: this.form.number,
        barCode: this.form.barCode
      }
      this.axios
        .post("/1api/item/save", Qs.stringify(item), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(response => {
          this.$message({
            //新增商品信息成功提示信息
            message: "商品信息新增成功！",
            type: "success",
            center: true
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    resetForm(formName) {
      //重置表单
      this.$refs[formName].resetFields();
    },
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
    getCheckedKeys() {
      //
      this.itemId = this.$refs.treeForm.getCheckedKeys();

      for (var i = 0; i < this.itemId.length; i++) {
        this.form.cid = this.itemId[0];
        console.log(this.form.cid);
      }
    }
  },
  components: {
    wangEditor: wangEditor
  }
};
</script>

