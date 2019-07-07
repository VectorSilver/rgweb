<template>
  <div>

    <el-card>
      <div slot="header" class="clearfix">
        <span>修改密码</span>
      </div>
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
        <el-form-item label="旧密码">
          <el-input v-model="formLabelAlign.oldPass" placeholder="请输入旧密码" show-password prefix-icon="el-icon-lock" class="pass-input"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="formLabelAlign.newPass" placeholder="请输入新密码" show-password prefix-icon="el-icon-lock" class="pass-input"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码">
          <el-input v-model="formLabelAlign.newPass" placeholder="请确认新密码" show-password prefix-icon="el-icon-lock" class="pass-input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          oldPass: '',
          newPass: ''
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
  // *{
  //   margin: 0px;
  //   padding: 0px;
  // }

  button {
    background-color: #409eff;
    border: 0px;
    color: rgb(255, 255, 255);
    width: 80px;
    height: 30px;
  }

  .pass-input {
    width: 30%;
  }

  // .clearfix:after {
  //   clear: both;
  // }
</style>
