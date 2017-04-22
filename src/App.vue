<template>
   <div id="app">
    <h1 class="title"><a href="#/">开发组件库</a></h1>
    <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app h1{
   width:100%;
   background:#ddd;
   height:35px;
   line-height:35px;
   color:#525252;
   font-size:20px;
}
#app h1 a{
   text-decoration:none;
   color:#525252;
}
</style>
