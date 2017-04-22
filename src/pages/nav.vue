<template>
   <div id="nav">
       <navlist></navlist>
       <router-view></router-view>
   </div>
</template>
<style type="text/css">
    .nav_list{
        width:100%;
        height:35px;
        line-height:35px;
        display:flex;
        display:-webkit-flex;
    }
    .navlist_items{
         flex:1;
         color:#525252;
         text-align:center;
    }
    .navlist_items{
         width:100%;
         height:100%;
         text-decoration:none;
    }
    .active{
         color:#ff5d3b;
         border-bottom:2px solid #ff5d3b;
    }
</style>
<script>
   import nav from "../components/navcomp.vue"
   export default{
       name:"navpage",
       components:{
          navlist:nav
       }
   }
</script>
