<template>
    <div>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单列表</el-breadcrumb-item>
        </el-breadcrumb>
        <br />
    <div class="headdiv">
            <input type="text" class="chaxun" value="订单号">
            <button class="chaan">查询</button>
            <input type="button" class="shuaxin" value="刷新">
        </div>
        <div class=" messagediv">
            <table>
                <tr class="hango">
                    <th class="tho">订单编号</th>
                    <th class="tht">订单金额</th>
                    <th class="ths">订单详情</th>
                    <th class="thf">订单联系人</th>
                    <th class="thfi">订单地址</th>
                    <th class="thsi">联系人电话</th>
                    <th class="thse">订单状态</th>
                    <th class="tha">修改状态</th>
                </tr>
                <tr class="hang">
                    <td class="tho">0123456</td>
                    <td class="tht">￥2799</td>
                    <td class="ths"> <a class="link p-name" href="./" target="_blank">索尼（SONY）KD-65X8566E 65英寸4K HDR腾讯视频 安卓7.0智能液晶电视（黑色）</a></td>
                    <td class="thf">张三</td>
                    <td class="thfi">成都</td>
                    <td class="thsi">13888888888</td>
                    <td class="thse">
                        <select name="select" id="select">
                            <option value="">未付款</option>
                            <option value="">付款未发货</option>
                            <option value="">付款已发货</option>
                        </select>
                    </td>
                    <td class="tha">
                        <select name="select" id="select">
                            <option value="">未付款</option>
                            <option value="">付款未发货</option>
                            <option value="">付款已发货</option>
                            <option value="">交易成功</option>
                            <option value="">交易关闭</option>
                        </select>
                    </td>
                </tr>
                <tr class="hang">
                    <td class="tho">0123457</td>
                    <td class="tht">￥2799</td>
                    <td class="ths"> <a class="link p-name" href="./" target="_blank">索尼（SONY）KD-65X8566E 65英寸4K HDR腾讯视频 安卓7.0智能液晶电视（黑色）</a></td>
                    <td class="thf">李四</td>
                    <td class="thfi">成都</td>
                    <td class="thsi">13999999999</td>
                    <td class="thse">
                        <select name="select" id="select">
                            <option value="">未付款</option>
                            <option value="">付款未发货</option>
                            <option value="">付款已发货</option>
                        </select>
                    </td>
                    <td class="tha">
                        <select name="select" id="select">
                            <option value="">未付款</option>
                            <option value="">付款未发货</option>
                            <option value="">付款已发货</option>
                            <option value="">交易成功</option>
                            <option value="">交易关闭</option>
                        </select>
                    </td>
                </tr>
                <tr class="hang">
                    <td class="tho">0123458</td>
                    <td class="tht">￥2799</td>
                    <td class="ths"> <a class="link p-name" href="./" target="_blank">索尼（SONY）KD-65X8566E 65英寸4K HDR腾讯视频 安卓7.0智能液晶电视（黑色）</a></td>
                    <td class="thf">王五</td>
                    <td class="thfi">成都</td>
                    <td class="thsi">13900000000</td>
                    <td class="thse">
                        <select name="select" id="select">
                            <option value="">未付款</option>
                            <option value="">付款未发货</option>
                            <option value="">付款已发货</option>
                        </select>
                    </td>
                    <td class="tha">                       
                        <select name="select" id="select">
                            <option value="">未付款</option>
                            <option value="">付款未发货</option>
                            <option value="">付款已发货</option>
                            <option value="">交易成功</option>
                            <option value="">交易关闭</option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>


    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.headdiv{
    width: 1150px;
    height: 50px;
    margin: 0 auto;
    // background:#eee;
}
.chaxun{
    margin-top: 20px;
    margin-left: 45px;
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
.hango{
    width: 30px;
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