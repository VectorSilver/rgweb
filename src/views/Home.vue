<template>
  <div>

    <my-header></my-header>
    <my-searchBox></my-searchBox>

    <my-footer></my-footer>

  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import SearchBox from '../components/SearchBox'

  export default {
  //   data() {
  //     return {
  //       lunbotuList: [] //保存轮播图的数组
  //     };
  //   },
  //   created(){ //钩子函数，组件创建时
  //     // this.getLunbotu();
  //   },
    // methods: {
      // getLunbotu(){
      //   //获取轮播图数据
      //   this.axios.get('  ').then((response) => {
      //     this.lunbotuList = response.data.data;
      //   }).catch((error) => {
      //     console.log(error);
      //   })
      // }
    // },
    components: {
      'my-header': Header,
      'my-footer': Footer,
      'my-searchBox': SearchBox
    }
  }
</script>

<style lang="scss" scoped>

</style>
