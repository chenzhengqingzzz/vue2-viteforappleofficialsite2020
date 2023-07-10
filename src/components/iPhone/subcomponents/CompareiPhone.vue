<template>
  <div class="comparecontainer _comparecontainer">
      <div class="comparebody">
          <div class="bodytop">iPhone机型比较</div>
          <div class="bodybottom">
              <div>
                  <div>
                      <img  src="../imgs/compare_iphone_11_pro.jpg" alt="iphone">
                  </div>
                  <h1>iPhone 11 Pro<br>
                    <span>RMB 8699 起</span></h1>
                  <p>
                    三摄系统 (超广角、广角、长焦) <br>
                    视频播放最长可达 20 小时1 <br>
                    抗水性能： <br>
                    最多可在 4 米水深停留 30 分钟2 <br>
                    5.8 英寸或 6.5 英寸超视网膜 XDR 显示屏3 <br>

                  </p>
                  <span>进一步了解 ></span>
              </div>
              <div>

                  <div>
                      <img  src="../imgs/compare_iphone_11.jpg" alt="iphone">
                  </div>
                  <h1>iPhone 11 <br>
                    <span>RMB 5499 起</span></h1>
                  <p>
                    双摄系统 (超广角、广角) <br>
                    视频播放最长可达 17 小时1 <br>
                    抗水性能： <br>
                    最多可在 2 米水深停留 30 分钟2 <br>
                    6.1 英寸 Liquid 视网膜高清显示屏3
                  </p>
                  <span>进一步了解 ></span>
              </div>
              <div>

                  <div>
                      <img  src="../imgs/compare_iphone_se.jpg" alt="iphone">
                  </div>
                    <h1>iPhone SE <br>
                        <span>RMB 3299 起</span></h1>
                    <p>
                        单摄系统 (广角) <br>
                        视频播放最长可达 13 小时1 <br>
                        抗水性能： <br>
                        最多可在 1 米水深停留 30 分钟2 <br>
                        4.7 英寸视网膜高清显示屏
                    </p>
                    <span>进一步了解 ></span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped> 
@media only screen and (min-width: 800px){
    .comparecontainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .comparebody{
            width: 100%;
            max-width:1000px ;
            background-color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            .bodytop{
                font-size: 40px;
                font-weight: 600;
            }
            .bodybottom{
               display: flex;
               align-items: flex-start;
               width: 100%;
               justify-content: space-around;
               div{
                   padding: 20px 0;
                   display: flex;
                   flex-direction: column;
                   align-items: flex-start;
                   p{
                       text-align: left;
                       font-size: 10px;
                       line-height: 40px;
                   }
                   div{
                       height: 230px;
                       width: 165px;
                       position: relative;
                      img{
                          position: absolute;
                          height:210px ;
                          width: auto;
                          bottom: 0;
                      }
                      
                   }
                   
               }
               h1{
                   font-size: 15px;
                   text-align: left;
                   padding: 20px 0;
                   span{
                       font-size: 10px;
                   }
                   
               }
               span{
                   color: rgb(12, 106, 205);
                   font-size: 12px;
               };
              
        }
    }
    }
}

// 小于800
@media only screen and (max-width: 800px){
    ._comparecontainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .comparebody{
            width: 100%;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            .bodytop{
                font-size: 4.333vw;
                font-weight: 600;
            }
            .bodybottom{
               display: flex;
               flex-direction: column;
               align-items: center;
               width: 100%;
               justify-content: space-around;
               div{
                   padding: 20px 0;
                   display: flex;
                   flex-direction: column;
                   align-items: flex-start;
                   p{
                       text-align: left;
                       font-size: 10px;
                       line-height: 40px;
                   }
                   img{
                       width:130px ;
                       height: auto;
                       padding: 20px 0;
                   }
               }
               h1{
                   font-size: 15px;
                   text-align: left;
                   padding: 20px 0;
                   span{
                       font-size: 10px;
                   }
                   
               }
              
        }
    }
    }
}

</style>