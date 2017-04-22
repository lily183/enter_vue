<template>
   <div class="mod_module">
        <div class="list_items">
           <p class="img_items"><a href="#/btn">按钮</a></p>
        </div>
        <div class="list_items">
           <p class="img_items"><a href="#/nav">导航</a></p>
        </div>
        <div class="list_items">
            <p class="img_items"><a href="#/list">列表</a></p>
        </div>

   </div>
</template>

<style type="text/css">
     .mod_module{
        width:100%;
        height:200px;
        line-height:200px;
        display:flex;
        display:-webkit-flex;
     }
     .list_items{
        flex:1;
        background-color:red;
     }
     .list_items:first-child{
        background-color:green;
     }
     .list_items:last-child{
        background-color:yellow;
     }
     .list_items a{
        text-decoration:none;
        color:#000;
        font-size:20px;
        font-family:"微软雅黑";
     }
</style>
