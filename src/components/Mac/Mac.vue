<!--
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-10 15:46:30
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-10 15:51:21
 * @FilePath: /test/src/components/Mac/Mac.vue
 * @Description: 
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
-->
<template>
  <div class="maccontainer _maccontainer">
    <SubNavGuide />
    <MacBriefInfo :isnew="'yes'" :reversedirection="'yes'" :screensize="'13英寸'" :goodname="'MacBook Pro'" :goodsignature="'行动，行动力'" :imgsrc="require('./imgs/macbook_pro_13__1.jpg')"/>
    <MacBriefInfo :goodname="'MacBook Air'" :goodsignature="'够轻，够轻快'" :imgsrc="require('./imgs/macbook_air__1.jpg')"/>
    <CompareMac/>
    <MacosICloud/>
    <InnerAppinfo/>
    <ProfessAppinfo/>
    <MacFinalInfo/>
  </div>
</template>

<script>
import SubNavGuide from './subcomponents/SubNavGuide.vue'
import MacBriefInfo from "./subcomponents/MacBriefInfo.vue"
import CompareMac from "./subcomponents/CompareMac.vue";
import MacosICloud from "./subcomponents/MacosICloud.vue";
import InnerAppinfo from "./subcomponents/InnerAppinfo.vue";
import ProfessAppinfo from "./subcomponents/ProfessAppinfo.vue";
import MacFinalInfo from "./subcomponents/MacFinalInfo.vue";
export default {
  name: '',
  components: {
    SubNavGuide,MacBriefInfo,CompareMac,MacosICloud,InnerAppinfo,ProfessAppinfo,MacFinalInfo
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
