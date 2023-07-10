<!--
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-10 15:46:30
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-10 15:50:23
 * @FilePath: /test/src/components/iPhone/iPhone.vue
 * @Description: 
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
-->
<template>
  <div class="iphonecontainer _iphonecontainer">
    <SubNavGuide/>
    <iPhoneBriefInfo  :isnew="'yes'" :goodname="'iPhone SE'" :goodinfo="'称心称手，超值入手。'" :buyinfo="'折抵换购，仅 RMB 90/月或RMB 2149 起*。'" :priceinfo="'RMB 3299 起'" :fontcolor="'black'" :backgoundcolor="'rgb(250, 250, 250)'" :imgsrc="require('./imgs/hero_iphone_se.jpg')"/>
    <iPhoneBriefInfo :reversedirection="'yes'" :goodname="'iPhone11'" :goodinfo="'一切都刚刚好。'" :buyinfo="'折抵换购，仅 RMB 167/月或 RMB 3999 起*。'" :fontcolor="'black'" :priceinfo="'RMB 3999 起'" :backgoundcolor="'rgb(250, 250, 250)'" :imgsrc="require('./imgs/hero_iphone_11.jpg')"/>
    <iPhoneBriefInfo :goodname="'iPhone11Pro'" :goodinfo="'摄像头、显示屏、性能，样样 Pro 如其名。'" :buyinfo="'折抵换购，仅 RMB 273/月或 RMB 6549 起*。'" :priceinfo="'RMB 6549 起'" :fontcolor="'black'" :backgoundcolor="'rgb(250, 250, 250)'" :imgsrc="require('./imgs/hero_iphone_11_pro.jpg')"/>
    <CompareiPhone/>
    <WhyiPhone/>
    <iPhoneFinalInfo/>
  </div>
</template>

<script>
import SubNavGuide from "./subcomponents/SubNavGuide.vue";
import iPhoneBriefInfo from "./subcomponents/iPhoneBriefInfo.vue";
import CompareiPhone from "./subcomponents/CompareiPhone.vue";
import iPhoneFinalInfo from "./subcomponents/iPhoneFinalInfo.vue";
import WhyiPhone from "./subcomponents/WhyiPhone.vue";

export default {
  name: 'iphone',
  components: {
    SubNavGuide,iPhoneBriefInfo,CompareiPhone,iPhoneFinalInfo,WhyiPhone
  }
}
</script>

<style lang="less" scoped>

// 大于800px
@media only screen and (min-width: 800px){
    .iphonecontainer{
      width: 100%;
      overflow: hidden;
    }
}

// 小于800px
@media only screen and (max-width: 800px){
    ._iphonecontainer{
    }
}
</style>
