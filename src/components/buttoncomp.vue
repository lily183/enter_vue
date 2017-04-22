<template>
    <button class="btn" v-on:click="add">
       <slot name="icon"></slot>
       <span >点击一下加一：{{msg}}</span>
    </button>
</template>
<type style="text/css">
//为什么子组件的样式没有在父组件中加载出来
    .btn{
        width:50px;
        height:35px;
        line-height:35px;
        color:#fff;
        background:#ff5d3b;
        font-size:20px;
        border:1px solid #ebebeb;
        display:flex;
        display:-webkit-flex;
    }
    slot{
       width:20px;
       height:35px;

    }
    span{
       flex:1;
    }
</type>
<script type="javascript">
     export default {

         props:{
             msg:{
                default:0
             }
         },

         methods:{
             add:function(){
                  this.$emit("add");
                  return (this.msg++);
             }
         }
    }
</script>
