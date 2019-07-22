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
      </el-form-item>
      <el-form-item label="商品标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="商品卖点" prop="sellPoint">
        <el-input type="textarea" v-model="form.sellPoint"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="number">
        <el-input v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="条形码" prop="barCode">
        <el-input v-model="form.barCode"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload class="upload-demo" action multiple :limit="3">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品描述" v-model="form.desc" prop="name">
        <wangEditor :catchData="catchData"></wangEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(form)">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- Tree -->
    <el-dialog title="选择类目" :visible.sync="dialogTreeVisible">
      <el-tree :data="categoriesList" :props="defaultProps"></el-tree>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTreeVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogTreeVisible = false; getCheckedNodes()"
          highlight-current="true"
        >确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import wangEditor from "./wangEditor";

export default {
  data() {
    return {
      form: {
        //表单数据
        title: "",
        sellPoint: "",
        price: "",
        number: "",
        barCode: "",
        desc: ""
      },
      dialogTreeVisible: false, //树形组件默认隐藏
      categoriesList: [], //存放后台传回的类目
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
    submitForm(form) {
      //表单提交
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      this.axios
        .post(" ", { form: this.form }, config)
        .then(response => {
          
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
        .get("/2api/content/category/list")
        .then(response => {
          this.categoriesList = response.data; //获得所有商品类别数据
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCheckedNodes() {
      //
      console.log(this.$refs.tree.getCheckedNodes());
    }
  },
  components: {
    wangEditor: wangEditor
  }
};
</script>

<style lang="scss" scoped>

</style>

