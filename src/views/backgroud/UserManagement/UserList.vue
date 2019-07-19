<template>
<div>
    <div class="headdiv">
        <span class="demonstration">查询页数</span>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
        </el-pagination> 
    </div>
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
       <el-table-column
        prop="phone"
        label="注册手机号">
      </el-table-column>
       <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
       <el-table-column
        prop="createdted"
        label="创建日期">
      </el-table-column>
       <el-table-column
        prop="updated"
        label="更新日期">
      </el-table-column>
    </el-table>
    <!-- <div class="userb">
        <table>
            <tr class="hang">
            <th class="id">账号</th>
            <th class="name">用户名</th>
            <th class="password">密码</th>
            <th class="phone">注册手机号</th>
            <th class="email">注册邮箱</th>
            <th class="createTime">创建日期</th>
            <th class="updataTime">更新日期</th>
            </tr>
            <tr class="hang">
                <td class="id">123456</td>
                <td class="name">张三</td>
                <td class="password">12345678</td>
                <td class="phone">13888888888</td>
                <td class="email">13888888888@163.com</td>
                <td class="createTime">2019.07.15</td>
                <td class="updataTime">2019.07.15</td>
            </tr>
            <tr class="hang">
                <td class="id">123457</td>
                <td class="name">李四</td>
                <td class="password">12345678</td>
                <td class="phone">13999999999</td>
                <td class="email">13999999999@163.com</td>
                <td class="createTime">2019.07.15</td>
                <td class="updataTime">2019.07.15</td>
            </tr>
            <tr class="hang">
                <td class="id">123458</td>
                <td class="name">王五</td>
                <td class="password">12345678</td>
                <td class="phone">13900000000</td>
                <td class="email">13900000000@163.com</td>
                <td class="createTime">2019.07.15</td>
                <td class="updataTime">2019.07.15</td>
            </tr>
        </table>
    </div>  -->

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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getuser(){
          this.axios.get('/api/user/user',{params:{page:1,rows:10}}).then((response) => {
            this.tableData=response.data.rows;
        }).catch((error)=>{alert(error);
    })
    },
    },

    mounted(){
        this.getuser();
    }  
}
</script>

 <style lang="scss" scoped>

 </style>

