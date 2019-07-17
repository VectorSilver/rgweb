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
            <th class="tho">账号</th>
            <th class="tht">用户名</th>
            <th class="ths">密码</th>
            <th class="thf">注册手机号</th>
            <th class="thy">注册邮箱</th>
            <th class="thfi">创建日期</th>
            <th class="thsi">更新日期</th>
            </tr>
            <tr class="hang">
                <td class="tho">123456</td>
                <td class="tht">张三</td>
                <td class="ths">12345678</td>
                <td class="thf">13888888888</td>
                <td class="thy">13888888888@163.com</td>
                <td class="thfi">2019.07.15</td>
                <td class="thsi">2019.07.15</td>
            </tr>
            <tr class="hang">
                <td class="tho">123457</td>
                <td class="tht">李四</td>
                <td class="ths">12345678</td>
                <td class="thf">13999999999</td>
                <td class="thy">13999999999@163.com</td>
                <td class="thfi">2019.07.15</td>
                <td class="thsi">2019.07.15</td>
            </tr>
            <tr class="hang">
                <td class="tho">123458</td>
                <td class="tht">王五</td>
                <td class="ths">12345678</td>
                <td class="thf">13900000000</td>
                <td class="thy">13900000000@163.com</td>
                <td class="thfi">2019.07.15</td>
                <td class="thsi">2019.07.15</td>
            </tr>
        </table>
    </div> 

</div>
</template>

<script>
export default {
    
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
.tho{
    width: 150px;
    text-align:center;
}
.tht{
    width: 100px;
    text-align:center;
}
.ths{
    width: 200px;
    text-align:center;
}
.thf{
    width: 100px;
    text-align:center;
}
.thfi{
    width: 200px;
    text-align:center;
}
.thsi{
    width: 200px;
    text-align:center;
}
.thse{
    width: 150px;
    text-align: center;
}
.tha{
    width: 100px;
    text-align: center;
}
 
</style>

