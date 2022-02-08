<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/style/global.scss";
*{
font-family: 'Source Code Pro', monospace;
font-family: 'Work Sans', sans-serif;
}

</style>
