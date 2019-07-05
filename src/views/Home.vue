<template>
  <div>

    <my-header></my-header>

    <my-footer></my-footer>

  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from '../components/Footer';

  export default {
    data() {
      return {};
    },
    methods: {},
    components: {
      "my-header": Header,
      'my-footer': Footer
    }
  };
</script>

<style lang="scss" scoped>

</style>
