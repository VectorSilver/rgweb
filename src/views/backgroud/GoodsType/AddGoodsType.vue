<template>
    <div>

        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品类目管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增商品类目</el-breadcrumb-item>
        </el-breadcrumb>
        <br />

        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="选择父类目">
                <el-button @click="dialogTreeVisible = true; getCategories()">选择父类目</el-button>
            </el-form-item>
            <el-form-item label="类目名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit()">提交</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- Tree -->
        <el-dialog title="选择类目" :visible.sync="dialogTreeVisible">
            <el-tree :data="categoriesList" :props="defaultProps" show-checkbox></el-tree>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTreeVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogTreeVisible = false; getCheckedNodes()" highlight-current="true">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            form:{
                name:'',
            },
            dialogTreeVisible: false, 
            categoriesList: [], //存放后台传回的类目
            defaultProps: {
                children: "children",
                label: "label"
            }
        }
    },
    methods:{
        getCategories() { //获取类目
            this.axios.get('/api/item/cat/list').then((response) => {
                this.categoriesList = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        onSubmit() {
            this.axios.post('',{name:this.form.name}).then((response) => {
                alert('新增商品类目成功');
            }).catch((error) => {
                alert(error);
            })
        },
        resetForm(formName) { //重置表单
            // alert('resetForm');
            this.$refs[formName].resetFields();
        },
    }
}
</script>
