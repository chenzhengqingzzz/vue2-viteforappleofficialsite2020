<template>
  <div class="homecontainer _homecontainer">
    <GoodBriefInfo :goodname="'iPhone SE'" :goodinfo="'称心称手,超值入手'" :fontcolor="'white'" :backgoundcolor="'rgb(19, 18, 25)'" :imgsrc="require('./imgs/iphonese+.jpg')" />
    <GoodBriefInfo :goodname="'iPhone11'" :goodinfo="'一切都刚刚好'" :fontcolor="'black'" :backgoundcolor="'rgb(250, 250, 250)'" :imgsrc="require('./imgs/iphone11.jpg')" />
    <GoodBriefInfo :goodname="'iPad Pro'" :goodinfo="'你的下一台电脑，未必是电脑'" :fontcolor="'black'" :backgoundcolor="'rgb(250, 250, 250)'" :imgsrc="require('./imgs/ipadpro.jpg')" />
    <div class="subdiv _subdiv">
      <div class="left"><GoodBriefInfo :goodname="'这一刻属于你'" :goodinfo="'让你的AirPods更显个性，免费镌刻服务，Apple独家福利'" :backgoundcolor="'rgb(250, 250, 250)'" :fontcolor="'black'" :imgsrc="require('./imgs/airpodspro.jpg')" /></div>
      <div class="right"><GoodBriefInfo :goodname="'MacBook Pro'" :goodinfo="'动力，行动力'" :fontcolor="'white'" :backgoundcolor="'rgb(19, 18, 25)'" :imgsrc="require('./imgs/macbookpro.jpg')" /></div>
    </div>
    <div class="subdiv _subdiv">
      <div class="left"><GoodBriefInfo :goodname="'WWDC20'" :goodinfo="'来看看我们发布会的所有精彩内容'" :backgoundcolor="'rgb(0, 0, 0)'" :fontcolor="'white'" :imgsrc="require('./imgs/wwdc20.jpg')" /></div>
      <div class="right"><GoodBriefInfo :goodname="'Apple Watch'" :goodinfo="'时尚，表达'" :fontcolor="'black'" :backgoundcolor="'rgb(251, 251, 253)'" :imgsrc="require('./imgs/watch.jpg')" /></div>
    </div>
  </div>
</template>

<script>
import GoodBriefInfo from './subcomponents/GoodBriefInfo.vue'

export default {
  name: '',
  components: {
    GoodBriefInfo
  }
}
</script>

<style lang="less" scoped>

// 大于800px
@media only screen and (min-width: 800px){
    .homecontainer{
      font-size: 1vw;
      .subdiv{
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: .5em;
        .left{
          width: 48%;
          height: 100%;
          font-size: .8em;
        }
        .right{
          width: 48%;
          height: 100%;
          font-size: .8em;
        }
      }
    }
}

// 小于800px
@media only screen and (max-width: 800px){
    ._homecontainer{
      font-size: 1vw;
      ._subdiv{
        width: 100%;
        display: flex;
        flex-direction: column;
        // justify-content: space-around;
        font-size: .5em;
        .left{
          width: 100%;
          height: 100%;
          font-size: .8em;
        }
        .right{
          width: 100%;
          height: 100%;
          font-size: .8em;
        }
      }
    }
}
</style>
