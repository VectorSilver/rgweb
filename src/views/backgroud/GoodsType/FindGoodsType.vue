<template>
    <div>

        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品类目管理</el-breadcrumb-item>
        <el-breadcrumb-item>查询商品类目</el-breadcrumb-item>
        </el-breadcrumb>
        <br />

        <el-tree :data="categoriesList" :props="defaultProps" show-checkbox></el-tree>

    </div>
</template>

<script>
export default {
    data() {
        return {
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
