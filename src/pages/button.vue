<template>
   <div id="button">
       <btn msg=5 v-on:add="doSth1">
           <img slot="icon" class="ico" src="../assets/logo.png" />
       </btn>
       <btn msg=0 v-on:add="doSth2"></btn>
   </div>
</template>
<style type="text/css">
    img{
       width:20px;
       height:20px;
    }

</style>
<script>
import btn from "../components/buttoncomp.vue"

export default{
     name:"pagebtn",
     components:{
         btn:btn  /*注册自定义标签*/
     },
     methods: {
         doSth1: function(){
             alert('你点击了父组件的click ');
         },
         doSth2: function(){
             alert(this.msg);//要怎么才能访问到子组件的msg
         }
     }
}
</script>
