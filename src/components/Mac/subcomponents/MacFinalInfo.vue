<template>
  <div class="finalinfocontainer _finalinfocontainer">
      <div>
            <div class="finalinfotitle">尽享Mac精彩</div>
            <div class="finalinfomiddle">
                <div class="div1">
                    <div class="infodivcover">
                            <h1>
                                Mac 教育应用
                            </h1>
                            <p>让各种潜能，在课堂上尽情释放。</p>
                    </div>

                </div>
                <div class="div2">
                    <div class="infodivcover">
                        <h1>Mac 高等教育应用
                            </h1>
                            <p>为大学生活的方方面面做好准备。</p>
                    </div>
                </div>
            </div>
            <div class="finalinfobottom">
                <div class="infobottomcover">
                    <div>
                        <h1>Mac 商务应用</h1>
                        <p>以强大的装备，让你的商务事业更上一层楼。</p>
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
          max-width: 1000px;
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
                  background-image: url(../imgs/final-education.jpg);
                //   margin: 20px;
              }
              .div2{
                  background-image: url(../imgs/final-highereducation.jpg);
              }
          
          }
          
          .finalinfobottom{
              margin-top: 20px;
              width: 100%;
              background-image: url(../imgs/final-business.jpg);
              background-size: cover;
              background-position: center;
              height: 400px;
              position: relative;
              .infobottomcover{
                position: absolute;
                z-index: 999;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                div{
                    color:white;
                }
              }
          }
      }
    }
     
}
// 小于800px
@media only screen and (max-width: 800px){
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
          width:100%;
          .finalinfotitle{
              font-size: 5.333vw;
              font-weight:600;
          }
          .finalinfomiddle{
              width: 100%;
              margin-top: 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              position: relative;
              div{
                  width: 100%;
                  height: 70.333vw;
                  margin-top: 20px;
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
                      h1{
                          font-size: 6vw;
                      }
                      p{
                          font-size: 2.667vw;
                      }


                  }
              }
              .div1{
                  background-image: url(../imgs/final-education.jpg);
                //   margin: 20px;
              }
              .div2{
                  background-image: url(../imgs/final-highereducation.jpg);
              }
          
          }
          
          .finalinfobottom{
              margin-top: 20px;
              width: 100%;
              background-image: url(../imgs/final-business.jpg);
              background-size: cover;
              background-position: center;
              height: 400px;
              position: relative;
              .infobottomcover{
                position: absolute;
                z-index: 999;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                div{
                    color:white;
                    h1{
                        font-size: 6vw;
                    }
                    p{
                        font-size: 2.667vw;
                    }
                }
              }
          }
      }
    }


}

</style>