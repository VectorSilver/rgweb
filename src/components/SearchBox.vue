<template>
  <div>

    <div id="div-big">
      <div id="div-img">
        <img src="../assets/睿购商城logo.png" alt />
      </div>
      <div id="div-input">
        <input type="text" placeholder="请输入商品名称" v-model="kw" />
      </div>
      <div id="div-button">
        <button @click="sousuo()">搜索</button>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
    data() {
      return {
        id:'',
        title:'',
        sell_point:'',
        price:'',
        image:'',
        category_name:'',
        item_desc:'',
        kw:'',
        itemList:[]
      }
    },
    methods:{
      sousuo(){
        this.axios.get('/api/search/q',{params:{kw:this.kw}}).then((response) => {
          console.log(response.data.data);
          this.itemList = response.data.data.itemList;
          console.log(this.itemList);
        }).catch((error) => {
          alert(error);
        })
      }
    }
  }
</script>


<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
#div-big {
  position: relative;
  width: 100%;
  height: 100px;
  top: 30px;
}
#div-img {
  float: left;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 50px;
  left: 400px;
}

#div-input {
  float: left;
  width: 400px;
  height: 40px;
  position: relative;
  top: 75px;
  left: 680px;
}

#div-button {
  float: left;
  position: relative;
  top: 75px;
  left: 705px;
}
input {
  width: 500px;
  height: 40px;
  border: 3px solid orange;
}
button {
  width: 100px;
  height: 46px;
  border: 3px solid orange;
  background-color: orange;
  color: white;
}
</style>
