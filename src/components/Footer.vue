<template>
  <div>

    <div id="footer-div-top">
      <ul id="footer-ul">
        <li>
          <img src="../assets/1562211423(1).jpg" alt />
          <span class="footer-span">品类齐全，轻松购物</span>
        </li>
        <li>
          <img src="../assets/1562211449(1).jpg" alt />
          <span class="footer-span">多仓直发，极速配送</span>
        </li>
        <li>
          <img src="../assets/1562211476(1).jpg" alt />
          <span class="footer-span">正品行货，精致服务</span>
        </li>
        <li>
          <img src="../assets/1562211503(1).jpg" alt />
          <span class="footer-span">天天低价，畅选无忧</span>
        </li>
      </ul>
    </div>
    <div id="footer-div-down">
      <p>Copyright © 2018 睿购商城 All Right Reserved</p>
    </div>

  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  * {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  li {
    float: left;
    margin-left: 100px;
  }
  #footer-div-top {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  #footer-ul {
    width: 1800px;
    margin: 0 auto;
  }
  #footer-div-down {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-top: 60px;
  }
  p {
    width: 500px;
    margin: 0 auto;
  }
  .footer-span {
    width: 100px;
    height: 50px;
    line-height: 50px;
    font-size: 25px;
    margin-top: 50px;
  }
  img {
    width: 70px;
    height: 70px;
  }
</style>
