<template>
    <div>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
        <br />

      <el-select v-model="value1" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
    </el-select>
    <el-input v-model="input" class="shuru" placeholder="请输入内容"></el-input>



          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="orderId"
        label="订单编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="payment"
        label="订单金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="paymentType"
        label="支付类型">
      </el-table-column>
      <el-table-column
        prop="postFee"
        label="邮费">
      </el-table-column>
      <el-table-column
        prop="status"
        label="订单状态">
      </el-table-column>
        <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="更新时间">
      </el-table-column> 
      <el-table-column
        prop="paymentTim"
        label="付款时间">
      </el-table-column> 
       <el-table-column
        prop="consignTime"
        label="收货时间">
      </el-table-column> 
        <el-table-column
        prop="shippingName"
        label="物流名称">
      </el-table-column> 
        <el-table-column
        prop="shippingCode"
        label="物流单号">
      </el-table-column> 
        <el-table-column
        prop="userId"
        label="用户id">
      </el-table-column> 
        <el-table-column
        prop="buyerMessage"
        label="买家留言">
      </el-table-column> 
        <el-table-column
        prop="buyerNick"
        label="买家昵称">
      </el-table-column> 
          <el-table-column label="状态操作">
        <template slot-scope="scope">
          <!-- <el-button size="mini" style="" @click="handleEdit(scope.$index, scope.rows)">编辑</el-button> -->
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.rows)">发货</el-button>
          <!-- <el-button size="mini" type="warning" >编辑</el-button> -->
        </template>
      </el-table-column>

    </el-table>

    </div>
</template>

<script>
import axios from 'axios'

export default {
 
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData:[]
      };
    },
    methods: {
     getorder(){
          this.axios.get('/5api/order/list',{params:{page:1,rows:10}}).then((response) => {
            this.tableData=response.data.rows;
        }).catch((error)=>{alert(error);
    })
    },
    },
    mounted(){
        this.getorder();
    }  
}
</script>

<style scoped lang="scss">
  .shuru{
    width:200px;
    margin-left: 20px;
  }
</style>