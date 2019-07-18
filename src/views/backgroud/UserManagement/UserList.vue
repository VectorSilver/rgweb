<template>
<div>
    <div class="headdiv">
        <span class="demonstration">查询页数</span>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
        </el-pagination> 
    </div>
    <div class="userb">
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
    </div> 

</div>
</template>

<script>
export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    } 
    
}
</script>

<style lang="scss" scoped>
.headdiv{
    width: 1150px;
    height: 70px;
    margin: 0 auto;
    // background:#eee;
}
.messagediv{
    width: 1150px;
    // background: #eee;
    margin: 0 auto;
}
table{
    border-collapse:collapse;
}
table,tr,th ,td{
    border: 1px solid black;
}
.id{
    width: 150px;
    text-align:center;
}
.name{
    width: 100px;
    text-align:center;
}
.password{
    width: 200px;
    text-align:center;
}
.phone{
    width: 100px;
    text-align:center;
}
.email{
    width: 200px;
    text-align:center;
}
.createTime{
    width: 200px;
    text-align:center;
}
.updataTime{
    width: 150px;
    text-align: center;
}
.tha{
    width: 100px;
    text-align: center;
}
 
</style>

