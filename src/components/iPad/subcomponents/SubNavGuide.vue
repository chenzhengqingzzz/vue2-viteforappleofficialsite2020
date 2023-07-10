<template>
  <div class="subnavcontainer _subnavcontainer">
    <div><i class="iconfont icon-iPadMini"></i><span>iPad mini</span></div>
    <div><i class="iconfont icon-iPad"></i><span>iPad Pro</span></div>
    <!--  -->
  </div>
</template>

<script>


export default {
  name: 'subnavguide',
  components: {
  }
}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
    .subnavcontainer{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 100%;
        background-color: rgb(249, 249, 250);
        // overflow-x: scroll;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 0 20px;
            i{
              font-size: 50px;
              cursor: pointer;
            }
            span{
              font-size: 10px;
              cursor: pointer;
              
            }
            span:hover{
              color: rgb(12, 106, 205);
              font-weight:500;
            }
        }
    }
}
// 小于800px
@media only screen and (max-width: 800px){
    ._subnavcontainer{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 100%;
        background-color: rgb(249, 249, 250);
        overflow-x: scroll;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 0 20px;
            i{
              font-size: 50px;
              cursor: pointer;
            }
            span{
              font-size: 10px;
              cursor: pointer;
              
            }
            span:hover{
              color: rgb(12, 106, 205);
              font-weight:500;
            }
        }
    }
}

</style>