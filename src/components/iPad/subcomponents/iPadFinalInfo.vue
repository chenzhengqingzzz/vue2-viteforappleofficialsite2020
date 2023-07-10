<template>
  <div class="finalinfocontainer _finalinfocontainer">
      <div>
            <div class="finalinfotitle">尽享iPad精彩</div>
            <div class="finalinfotop">
                <img src="../imgs/apple_music.png" alt="">
                <div>
                    <span><i class="iconfont icon-pingguo"></i>Music</span>
                    <span>上千万首歌曲，三个月免费聆听。</span>
                </div>
            </div>
            <div class="finalinfomiddle">
                <div class="div1">
                    <div class="infodivcover">
                            <h1>
                                iPad 教育应用
                            </h1>
                            <p>这个学习工具，有电脑的功能，没有电脑的条条框框。</p>
                    </div>

                </div>
                <div class="div2">
                    <div class="infodivcover">
                        <h1>iPad 商务应用
                            </h1>
                            <p>多种多样的可能性，让你的工作方式从此大不相同。</p>
                    </div>
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
          .finalinfomiddle{
              width: 100%;
              margin-top: 20px;
            //   width: 100%;
              height: 500px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              position: relative;
              div{
                  width: 49%;
                  height: 100%;
                  background-size: cover;
                //   background-image: url(../imgs/final-education.jpg);
                //   margin: 100px;
                  position: relative;
                  .infodivcover{
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      z-index: 999;
                      left: 0;
                      top: 0;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-direction: column;
                      color:white;
                  }
              }
              .div1{
                  background-image: url(../imgs/ipad_for_education.jpg);
                //   margin: 20px;
              }
              .div2{
                  background-image: url(../imgs/ipad_for_business.jpg);
              }
          
          }
          
          .finalinfotop{
             display: flex;
             align-items: center;
             flex-direction: row;
             justify-content: space-between;
             width: 100%;
             padding: 30px 0;
             background-image: linear-gradient(rgb(246, 108, 90),rgb(219, 90, 156));
            // background-color:rgb(219, 90, 156);
             img{
                 width: 60%;
                 height: auto;
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
          max-width:1000px;
          width: 100%;
          .finalinfotitle{
              font-size: 5.333vw;
              font-weight:600;
          }
          .finalinfomiddle{
              width: 100%;
              margin-top: 20px;
            //   width: 100%;
            //   height: 500px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              position: relative;
              div{
                  width: 100%;
                  height: 80.667vw;
                  background-size: cover;
                  margin-bottom: 20px;
                //   background-image: url(../imgs/final-education.jpg);
                //   margin: 100px;
                  position: relative;
                  .infodivcover{
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      z-index: 999;
                      left: 0;
                      top: 0;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-direction: column;
                      color:white;
                      h1{
                          font-size: 4.667vw;
                      }
                      p{
                          font-size: 2.667vw;
                      }


                  }
              }
              .div1{
                  background-image: url(../imgs/ipad_for_education.jpg);
                //   margin: 20px;
              }
              .div2{
                  background-image: url(../imgs/ipad_for_business.jpg);
              }
          
          }
          
          .finalinfotop{
             display: flex;
             align-items: center;
             flex-direction: row;
             justify-content: space-between;
             width: 100%;
             padding: 30px 0;
             background-image: linear-gradient(rgb(246, 108, 90),rgb(219, 90, 156));
            // background-color:rgb(219, 90, 156);
             img{
                 width: 60%;
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