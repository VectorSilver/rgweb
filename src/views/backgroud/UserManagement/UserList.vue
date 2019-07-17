<template>
    <div>
         <div class="headdiv">
        <input type="button" value="上一页" onclick="up()"/>
        <input type="text" class="chaxun" value="1">
        <input type="button" value="上一页" onclick="down()"/>
        <button class="chaan">查询</button>
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

<style lang="sass" scoped>

</style>

