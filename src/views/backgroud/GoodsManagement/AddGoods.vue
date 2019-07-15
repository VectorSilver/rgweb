<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增商品</el-breadcrumb-item>
    </el-breadcrumb>
    <br />

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品类目">
        <el-button @click="dialogTreeVisible = true">选择类目</el-button>
      </el-form-item>
      <el-form-item label="商品标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品卖点">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="库存数量">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="条形码">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          class="upload-demo"
          action="https://  "
          multiple
          :limit="3"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品描述">
        <wangEditor :catchData="catchData"></wangEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- Tree -->
    <el-dialog title="选择类目" :visible.sync="dialogTreeVisible">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTreeVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTreeVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import wangEditor from "./wangEditor";

export default {
  data() {
    return {
      dialogTreeVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    catchData(value) {
      // 接受子组件传过来的参数
      this.content = value;
    },
    onSubmit() {},
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleNodeClick(data) {
      console.log(data);
    }
  },
  components: {
    'wangEditor': wangEditor
  }
};
</script>

<style lang="sass" scoped>

</style>

