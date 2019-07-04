<template>
  <div>

    <my-header></my-header>

  </div>
</template>

<script>
  import Header from "../components/Header";

  export default {
    data() {
      return {};
    },
    methods: {},
    components: {
      "my-header": Header
    }
  };
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
</style>
