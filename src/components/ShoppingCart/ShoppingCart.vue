<template>
  <div>

    <my-header></my-header>

    <div>
    <div class="crumb">
      <div class="crumb-h">
        <div class="crumb-con">
          <a class="link" href="./">睿购商城</a>
          <span>></span>
          <span class="link-text">购物车</span>
        </div>
      </div>
    </div>

    <div class="wares">
      <div class="wares-h">
        <table>
          <tbody>
            <tr>
              <th class="wares-h-check">
                <label>
                  <input type="checkbox" class checked="checked" />
                  <span>全选</span>
                </label>
              </th>
              <th class="cell-info">商品信息</th>
              <th class="cell-price">单价</th>
              <th class="cell-count">数量</th>
              <th class="cell-total">合计</th>
              <th class="cell-opera">操作</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="wares-add">
        <table class="cart-table" data-product-id="107" data-checked="1">
          <tbody>
            <tr class="shangpinxinxi">
              <td class="addclenk">
                <input type="checkbox" class="cart-select" checked="checked" />
              </td>
              <td class="cell-img">
                <a href="./detail.html?productId=107" target="_blank">
                  <img class="p-img" src="./ShoppingCart.vue" />
                </a>
              </td>
              <td class="cell-info">
                <a
                  class="link p-name"
                  href="./"
                  target="_blank"
                >索尼（SONY）KD-65X8566E 65英寸4K HDR腾讯视频 安卓7.0智能液晶电视（黑色）</a>
              </td>
              <td class="cell-price">￥2799</td>
              <td class="cell-count">
              <template>
                <el-input-number class="jishu" size="small" v-model="num3" @change="handleChange" :min="1" :max="10"></el-input-number>
              </template>


                <!-- <button class="jian" value="-">-</button>
                <input type="text" class="shanginput" data-max="kucun" value="1" />
                <button class="jia" value="+">+</button> -->
                <br />
                <span class="kucun">（库存:）</span>
              </td>
              <td class="cell-total">￥2799</td>
              <td class="cell-opera">
                <button class="danpindelete">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cart-footer clear">
        <div class="select-con">
          <label>
            <input type="checkbox" class="cart-select-all" checked="checked" />
            <span>全选</span>
          </label>
        </div>
        <div class="delete-con">
          <a class="cart-delete-seleced link">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            <button class="duoxiangshanchu">删除选中</button>
          </a>
        </div>
        <div class="submit-con">
          <span class="submit-z">总价：</span>
          <span class="submit-total">￥2799</span>
          <el-button type="success" class="jiesuan">结算</el-button>
        </div>
      </div>
    </div>
    </div>

    <my-footer></my-footer>

  </div>
</template>

<script>
import Header from '../Header'
import Footer from '../Footer'

export default {
    data() {
        return {
            
        }
    },
    methods:{

    },
    components:{
        "my-header": Header,
        "my-footer": Footer
    }
};
</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

.crumb {
  height: 60px;
  line-height: 50px;
  color: #888;
  font-size: 14px;
  border-top: 2px solid #ff8800;
}

.link {
  color: #999;
  cursor: pointer;
  text-emphasis: none;
}

.crumb-h {
  width: 100%;
  height: 50px;
  background: #eee;
  position: relative;
  top: 30px;
  // overflow: hidden;
}

.crumb-con {
  width: 950px;
  margin: 0 auto;
}

.wares {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.wares-h {
  width: 950px;
  margin: 0 auto;
  height: 42px;
  line-height: 42px;
  position: relative;
  overflow: hidden;
  background: #eee;
}

.table {
  display: table;
  border-spacing: 2px;
}

.wares-h.tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

.wares-h-check {
  width: 100px;
  text-align: left;
  padding-left: 20px;
}

.cell-info {
  width: 400px;
  padding-left: 40px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.cell-price {
  width: 100px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.cell-count {
  width: 150px;
  padding-left: 40px;
  font-weight: bold;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.cell-total {
  width: 150px;
  text-align: center;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
}

.cell-opera {
  width: 100px;
  float: right;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.wares-add {
  width: 950px;
  margin: 0 auto;
  background: #eee;
}

.shangpinxinxi {
  height: 60px;
}

.addclenk {
  width: 150px;
  padding-left: 20px;
}

.shanginput {
  display: inline-block;
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  color: black;
  cursor: pointer;
  border: 1px solid #e6e6e6;
}

// .jian {
//   margin: 0%;
//   padding: 0px;
//   display: inline-block;
//   width: 18px;
//   height: 20px;
//   line-height: 20px;
//   text-align: center;
//   font-size: 18px;
//   color: #999;
//   cursor: pointer;
//   border: 1px solid #b3a9a9;
// }

// .jia {
//   display: inline-block;
//   width: 18px;
//   height: 20px;
//   line-height: 20px;
//   text-align: center;
//   font-size: 18px;
//   color: #999;
//   cursor: pointer;
//   border: 1px solid #b3a9a9;
// }
.jishu{
  text-align: center;
}
.kucun {
  size: 12px;
}

.danpindelete {
  /* padding-right: 20px; */
  width: 50px;
  margin:  40%   30%;
  text-align: center;
  background: #eee;
}

.wares-l {
  width: 950px;
  height: 42px;
  margin: 0 auto;
  background: #ff8800;
}

.wares-l.cart-select {
  padding: left 20px;
  line-height: 42px;
}

.cart-footer {
  width: 950px;
  margin: 0 auto;
  height: 42px;
  line-height: 42px;
  position: relative;
  overflow: hidden;
  background: #eee;
  font-size: 20px;
}

.select-con {
  width: 10%;
  text-align: left;
  padding-left: 20px;
  float: left;
}

.delete-con {
  float: left;
  height: 30px;
  margin-left: 0;
  border: 0px;
}

.duoxiangshanchu {
  background: #eee;
}

.submit-con {
  float: right;
  display: block;
  line-height: 42px;
}

.jiesuan {
  height: 42px;
  width: 60px;
  line-height: 42px;
  font-size: 25px;
  margin-right: 20px;
  color: #eee;
  background: #ff8800;
}

.submit-z {
  line-height: 42px;
  padding-right: 50px;
}

.submit-total {
  padding-right: 50px;
}
</style>
