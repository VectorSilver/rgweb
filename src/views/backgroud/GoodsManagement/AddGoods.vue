<template>
    <div>
    
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="商品类目">
                <el-button>选择类目</el-button>
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
                    :file-list="fileList">
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

    </div>
</template>

<script>
import wangEditor from './wangEditor'

export default {
    data() {
        return {
            form:{
                name:'',
            }
        }
    },
    methods:{
        catchData(value){
            // 接受子组件传过来的参数
            this.content = value;
        },
        onSubmit() {

        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    components:{
        'wangEditor': wangEditor
    }
}
</script>
