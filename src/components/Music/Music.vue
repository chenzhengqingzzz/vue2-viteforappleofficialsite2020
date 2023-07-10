<template>
  <div class="musiccontainer _musiccontainer">
   <SubNavGuide/>
   <MusicTotalinfo/>
   <GoodsBriefInfo :isnew="'yes'" :goodinfo="'妙得不同凡响。'" :goodname="'AirPods Pro'" :imgsrc="require('./imgs/airpods_pro.jpg')"/>\
   <Device/>
   <ProfessApp/>
   <FinalMusic/>
  </div>
</template>

<script>
import SubNavGuide from "./subcomponents/SubNavGuide.vue";
import MusicTotalinfo from "./subcomponents/MusicTotalinfo.vue";
import GoodsBriefInfo from "./subcomponents/GoodsBriefInfo.vue";
import Device from "./subcomponents/Device.vue";
import ProfessApp from "./subcomponents/ProfessApp.vue";
import FinalMusic from "./subcomponents/FinalMusic.vue";
export default {
  name: '',
  components: {
    SubNavGuide,MusicTotalinfo,GoodsBriefInfo,Device,ProfessApp,FinalMusic
  }
}
</script>

<style lang="less" scoped>

// 大于800px
@media only screen and (min-width: 800px){
    .musiccontainer{
      position: relative;
    }
}

// 小于800px
@media only screen and (max-width: 800px){
    ._musiccontainer{
    }
}
</style>
