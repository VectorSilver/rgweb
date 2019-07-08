<template>
    <div>
    
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="商品标题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
    
}
</script>
