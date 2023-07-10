<template>
  <div id="app">
    <NavTop/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavTop from "./components/comcomponents/NavTop.vue"
import Footer from "./components/comcomponents/Footer.vue"

export default {
  name: 'App',
  components: {
    NavTop,Footer
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
