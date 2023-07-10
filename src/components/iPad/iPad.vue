<template>
  <div class="ipadcontainer _ipadcontainer">
    <SubNavGuide/>
    <GoodBriefInfo :goodname="'iPad Pro'" :goodinfo="'你的下一台电脑，何必是电脑。'" :fontcolor="'black'" :backgoundcolor="'rgb(245, 245, 247)'" :imgsrc="require('./imgs/ipad_pro.jpg')" />
    <iPadBriefInfo :isnew="'no'" :reversedirection="'yes'" :screensize="''" :goodname="'iPad Air'" :goodsignature="'超强，超值。'" :imgsrc="require('./imgs/ipad_air.jpg')"/>
    <iPadBriefInfo :goodname="'iPad mini'" :goodsignature="'身量小，能量大。'" :imgsrc="require('./imgs/ipad_mini.jpg')"/>
    <CompareiPad/>
    <iPadFinalInfo/>
  </div>
</template>

<script>
import GoodBriefInfo from './subcomponents/GoodBriefInfo.vue'
import SubNavGuide from "./subcomponents/SubNavGuide.vue";
import CompareiPad from "./subcomponents/CompareiPad.vue";
import iPadFinalInfo from "./subcomponents/iPadFinalInfo.vue";
import iPadBriefInfo from "./subcomponents/iPadBriefInfo.vue";
export default {
  name: '',
  components: {
    SubNavGuide,GoodBriefInfo,CompareiPad,iPadFinalInfo,iPadBriefInfo
    
  }
}
</script>

<style lang="less" scoped>

// 大于800px
@media only screen and (min-width: 800px){
    
}

// 小于800px
@media only screen and (max-width: 800px){
    
  
}
</style>
