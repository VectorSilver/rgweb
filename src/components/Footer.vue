<template>
  <div>

    <div id="footer-div-top">
      <div id="footer-div-sm">
        <div class="footer-div-big">
          <p class="img">
            <img src="../assets/1562211423(1).jpg" alt />
          </p>
          <p class="text">品类齐全，轻松购物</p>
        </div>
        <div class="footer-div-big">
          <p class="img">
            <img src="../assets/1562211423(1).jpg" alt />
          </p>
          <p class="text">品类齐全，轻松购物</p>
        </div>
        <div class="footer-div-big">
          <p class="img">
            <img src="../assets/1562211423(1).jpg" alt />
          </p>
          <p class="text">品类齐全，轻松购物</p>
        </div>
        <div class="footer-div-big">
          <p class="img">
            <img src="../assets/1562211423(1).jpg" alt />
          </p>
          <p class="text">品类齐全，轻松购物</p>
        </div>

      </div>
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

  #footer-div-top {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }

  #footer-div-down {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-top: 30px;
  }

  p {
    width: 500px;
    margin: 0 auto;
  }

  img {
    width: 60px;
    height: 60px;
  }

  .footer-div-big {
    width: 300px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    float: left;
    margin-left: 25px;
  }
  #footer-div-sm {
    width: 1300px;
    margin: 0 auto;
  }
  .img {
    float: left;
    width: 60px;
    height: 50px;
  }

  .text {
    float: left;
    width: 240px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
  }
</style>
