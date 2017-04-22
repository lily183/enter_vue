<template>
   <div class="nav_list">
       <a class="navlist_items" v-for="(item, index) in items"
           v-bind:class="{active:aabb==index}" v-on:click="change(items,index)">
           {{item.text}}
       </a>


   </div>
</template>
<script type="text/javascript">

export default{
      data:function(){
           return {
                aabb:0,
                items:[
                   {text:"首页",
                    active:true
                   },
                   {text:"列表",
                   active:false
                   },
                   {text:"列表",
                   active:false
                   },
                   {text:"列表",
                    active:false
                   }

               ]
           }
      },
      methods:{
          change:function(items,index){
               this.aabb=index;
               if(items[index].text.match("首页")){
                  //this.$router.push("#/nav/");

                  event.currentTarget.href="#/nav/";
               }else{

                   event.currentTarget.href="#/nav/nav_list";
               }
          }

      }
}
</script>
