<template>
    <div>

        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品类目管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增商品类目</el-breadcrumb-item>
        </el-breadcrumb>
        <br />

        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="选择父类目">
                <el-button>选择父类目</el-button>
            </el-form-item>
            <el-form-item label="类目名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                name:'',
            }
        }
    },
    methods:{
        onSubmit() {

        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
