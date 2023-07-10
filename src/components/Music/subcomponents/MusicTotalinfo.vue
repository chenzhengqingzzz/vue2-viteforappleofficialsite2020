<template>
  <div class="totalinfocontainer _totalinfocontainer">
        <div>
            <div>
            <span><i class="iconfont icon-pingguo"></i>Music</span>
            <span>上千万首歌曲，<br>
                敬请沉醉。</span>
            </div> 
            <div>
                <img class="airpodsleft" src="../imgs/hero_iphone_airpod_left.png" alt="">
                <img class="airpodsright" src="../imgs/hero_iphone_airpod_right.png" alt="">
                <img class="iphone11pro" src="../imgs/hero_iphone.jpg" alt="">
            </div>
        </div>
            
  </div>
</template>

<script>


export default {
  name: '',
  components: {
  }
}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
    .totalinfocontainer{

            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 570px;
            padding-top: 110px;
            background-color: rgb(156, 80, 235);
        div{
            width: 100%;
            height: 100%;
            max-width: 1000px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            div:nth-child(1){
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 300px;
                height: 100%;
                color:white;
                span:nth-child(1){
                    font-size: 30px;
                    i{
                        font-size: 30px;
                    }
                }
                span:nth-child(2){
                    text-align: left;
                    font-size: 40px;
                    font-weight:600;
                }
            }
            div:nth-child(2){
                position: relative;
                width: 500px;
                height: 100%;
                overflow: hidden;
                img{
                    position: absolute;
                }
                .airpodsleft{
                    width: 100%;
                    height: auto;
                    left: 0;
                    top: 200px;
                    z-index: 999;
                }
                .airpodsright{
                    width: 100%;
                    height: auto;
                    left:-40px;
                    top: -100px;
                    z-index: 999;
                }
                .iphone11pro{
                    width: 450px;
                    height: auto;
                    bottom: -200px;
                    left: 0;
                }

            }
      }
    }
     
}
// 小于800px
@media only screen and (max-width: 800px){
     ._totalinfocontainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-top: 130.002px;
            background-color: rgb(156, 80, 235);
        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            div:nth-child(1){
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                color:white;
                span:nth-child(1){
                    font-size: 4vw;
                    font-weight:600;
                    i{
                        font-size: 4vw;
                    }
                }
                span:nth-child(2){
                    text-align: left;
                    font-size: 5.333vw;

                }
            }
            div:nth-child(2){
                position: relative;
                width: 100%;
                height: 53.333vw;
                overflow: hidden;
                img{
                    position: absolute;
                }
                .airpodsleft{
                    width: 60vw;
                    height: auto;
                    left: 10vw;
                    top: 26.667vw;
                    z-index: 999;
                }
                .airpodsright{
                    width: 60vw;
                    height: auto;
                    left:19.333vw;
                    top: -13.333vw;
                    z-index: 999;
                }
                .iphone11pro{
                    width: 60vw;
                    height: auto;
                    bottom: -26.667vw;
                    left: 50%;
                    transform:translateX(-50%);
                }

            }
      }
    }
}

</style>