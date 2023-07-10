<template>
  <div class="finalinfocontainer _finalinfocontainer">
      <div>
            <div class="finalinfotitle">尽享 iPhone 的精彩。</div>
            <div class="finalinfotop">
                <img src="../imgs/apple_pay.png" alt="">
                <div>
                    <span><i class="iconfont icon-pingguo"></i>Pay</span>
                    <span>叮一声，<br>
                        更多城市都通行。</span>
                </div>
            </div>
            <div class="finalinfobottom">
                <img src="../imgs/apple_music.png" alt="">
                <div>
                    <span><i class="iconfont icon-pingguo"></i>Music</span>
                    <span>上千万首歌曲，三个月免费聆听。</span>
                </div>
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
    .finalinfocontainer{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px 0;
      div{
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width:1000px;
          width: 100%;
          .finalinfotitle{
              font-size: 40px;
              font-weight:600;
          }
          
          
          .finalinfotop{
             display: flex;
             align-items: center;
             flex-direction: row;
             justify-content: space-around;
             width: 100%;
             padding: 30px 0;
            // background-color:rgb(219, 90, 156);
             img{
                 width: auto;
                 height: 420px;
             }
             div{
                 width: 400px;
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 margin: 0 30px;
                 span:nth-child(1){
                     font-size: 30px;
                     font-weight:600;
                     i{
                         font-size: 40px;
                    }
                 }
                 span:nth-child(2){
                     font-size: 20px;
                 }

             }
          }

          .finalinfobottom{
                background-image: linear-gradient(rgb(246, 108, 90),rgb(219, 90, 156));
                display: flex;
                align-items: center;
                flex-direction: row-reverse;
                justify-content: space-around;
                width: 100%;
                padding: 30px 0;
                img{
                 width: auto;
                 height: 420px;
             }
             div{
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 margin: 0 30px;
                 span:nth-child(1){
                     font-size: 30px;
                     font-weight:600;
                     i{
                         font-size: 40px;
                    }
                 }
                 span:nth-child(2){
                     font-size: 20px;
                 }

             }

          }
      }
    }
     
}
// 小于800px
@media only screen and (max-width: 800px){
     ._finalinfocontainer{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px 0;
      div{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          .finalinfotitle{
              font-size: 5.333vw;
              font-weight:600;
          }
          
          
          .finalinfotop{
             display: flex;
             align-items: center;
             flex-direction: column-reverse;
             justify-content: space-around;
             width: 100%;
            //  padding: 30px 0;
            // background-color:rgb(219, 90, 156);
             img{
                 width: 70%;
                 height: auto;
             }
             div{
                 width:100%;
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 margin: 0 30px;
                 span:nth-child(1){
                     font-size: 4vw;
                     font-weight:600;
                     i{
                         font-size: 5.333vw;
                    }
                 }
                 span:nth-child(2){
                     font-size: 2.667vw;
                 }

             }
          }

          .finalinfobottom{
                background-image: linear-gradient(rgb(246, 108, 90),rgb(219, 90, 156));
                display: flex;
                align-items: center;
                flex-direction: column-reverse;
                justify-content: space-around;
                width: 100%;
                padding: 30px 0;
                img{
                 width: 80%;
                 height: auto;
             }
             div{
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 margin: 0 30px;
                 span:nth-child(1){
                     font-size: 4vw;
                     font-weight:600;
                     i{
                         font-size: 5.333vw;
                    }
                 }
                 span:nth-child(2){
                     font-size: 2.667vw;
                 }

             }

          }
      }
    }
}

</style>