<template>
  <div class="homecontainer _homecontainer" :style="' background-color:'+String(backgoundcolor)">
     <GoodTitle :goodname="goodname" :goodinfo="goodinfo" :fontcolor="fontcolor" />
     <img :src="imgsrc" alt="iphonese">
  </div>
</template>

<script>
import GoodTitle from '../../comcomponents/GoodTitle.vue'

export default {
  name: '',
  components: {
      GoodTitle
  },
  props:['goodname','goodinfo','fontcolor','imgsrc','backgoundcolor']
}
</script>

<style lang="less" scoped>
@media only screen and (min-width: 800px){
  .homecontainer{
      position: relative;
      width: 100%;
      display: flex;
      flex-direction:column-reverse;
      justify-content: center;
      align-items: center;
      background-color: rgb(245, 245, 247);
      min-height: 500px;
      font-size: 1.133vw;
      // padding-top:10%;
      margin-bottom: 20px;
      img{
          width:100%;
          height: auto;
      }
  }
}
@media only screen and (max-width: 800px){
  ._homecontainer{
      position: relative;
      width: 100%;
      display: flex;
      flex-direction:column-reverse;
      justify-content: center;
      align-items: center;
      background-color: rgb(245, 245, 247);
      min-height: 500px;
      font-size: 6px;
      // padding-top:10%;
      margin-bottom: 20px;
      img{
          width:100%;
          height: auto;
      }
  }
}


</style>
