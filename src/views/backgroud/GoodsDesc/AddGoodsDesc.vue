<template>
    <div>

        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品描述管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增商品描述</el-breadcrumb-item>
        </el-breadcrumb>
        <br />

        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="">
                <el-button @click="dialogTreeVisible = true; getCategories()">选择商品</el-button>
            </el-form-item>
            <el-form-item label="商品描述" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit()">提交</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- Tree -->
        <el-dialog title="选择商品" :visible.sync="dialogTreeVisible">
            <el-tree :data="goodsList" :props="defaultProps" show-checkbox></el-tree>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTreeVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogTreeVisible = false" highlight-current="true">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return{
            dialogTreeVisible: false,
            defaultProps: {
                children: "children",
                label: "label"
            }
        }
    },
    methods:{

    }
}
</script>

<style lang="" scoped>
    
</style>
