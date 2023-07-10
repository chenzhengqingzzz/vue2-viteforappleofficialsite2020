<template>
  <div class="comparecontainer _comparecontainer">
      <div class="comparebody">
          <div class="bodytop">iPad机型比较</div>
          <div class="bodybottom">
              <div>
                  <div>
                      <img id="img1" src="../imgs/compare_ipad_pro.png" alt="ipad pro">
                  </div>
                  <h1>iPad Pro<br>
                    <span>RMB 6229 起</span></h1>
                  <p>
                    12.9 英寸和 11 英寸 <br>
                    Liquid 视网膜显示屏，<br>
                    支持 ProMotion 自适应<br>
                    刷新率技术<br>
                    芯片：A12Z 仿生<br>
                    Pro 级摄像头和激光雷达扫描仪<br>
                    面容 ID <br>
                    存储容量最高达 1TB <br>
                    支持 Apple Pencil 
                    (第二代)<br>
                    支持妙控键盘和键盘式智能双面夹<br>
                  </p>
                  <span>进一步了解 ></span>
              </div>
              <div>

                  <div>
                      <img id="img2" src="../imgs/compare_ipad_mini.png" alt="ipad mini">
                  </div>
                  <h1>iPad mini <br>
                    <span>RMB 2921 起</span></h1>
                  <p>
                    7.9 英寸视网膜显示屏 <br>
                    芯片：A12 仿生 <br>
                    先进的摄像头 <br>
                    触控 ID <br>
                    存储容量最高达 256GB <br>
                    支持 Apple Pencil
                    (第一代)
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
            background-color: rgb(242, 242, 242);
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
                      #img1{
                          position: absolute;
                          height:210px ;
                          width: auto;
                          bottom: 0;
                      }
                      #img2{
                          position: absolute;
                          height: 150px;
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
            max-width:1000px ;
            background-color: rgb(242, 242, 242);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            .bodytop{
                font-size: 5.333vw;
                font-weight: 600;
            }
            .bodybottom{
               display: flex;
               flex-direction: column;
               align-items:center;
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
                      #img1{
                          position: absolute;
                          height:210px ;
                          width: auto;
                          bottom: 0;
                      }
                      #img2{
                          position: absolute;
                          height: 150px;
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

</style>