<template>
  <div>
    <!-- 路由出口，渲染最高级路由匹配到的组件 -->
    <router-view></router-view>
    
    <h3>{{ $store.state.count }}</h3>
    <button @click="$store.commit('add')">+</button>
  </div>
</template>

<script>
  import store from './store'

  export default {};
</script>

<style lang="scss" scoped>

</style>
