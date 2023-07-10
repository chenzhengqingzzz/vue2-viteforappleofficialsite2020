<template>
  <div class="comparecontainer _comparecontainer">
      <div class="comparebody">
          <div class="bodytop">哪台Mac笔记本适合你？</div>
          <div class="bodybottom">
              <div>
                  <img src="../imgs/macbook_air__2.jpg" alt="macbookair">
                  <h1>MacBook Air <br>
                    <span>RMB 7999 起</span></h1>
                  <p>
                    13.3 英寸视网膜显示屏1 <br>
                    最高可选配 4 核 Intel Core i7 处理器 <br>
                    最高可选配 16GB 内存<br>
                    最高可选配 2TB 存储设备2<br>
                    电池续航时间最长可达 11 小时3<br>
                    触控 ID<br>
                    背光妙控键盘
                  </p>
                  <span>进一步了解 ></span>
              </div>
              <div>
                  <img src="../imgs/macbook_pro_13__2.jpg" alt="macbookpro">
                  <h1>MacBook Pro 13英寸 <br>
                    <span>RMB 9999 起</span></h1>
                  <p>
                    13.3 英寸视网膜显示屏1 <br>
                    最高可选配 4 核 Intel Core i7 处理器 <br>
                    最高可选配 32GB 内存<br>
                    最高可选配 4TB 存储设备2<br>
                    电池续航时间最长可达 11 小时3<br>
                    触控 ID<br>
                    背光妙控键盘
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
            max-width:1000px ;
            width: 100%;
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
                   img{
                       width:165px ;
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
            width:100%;
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
               align-items: center;
               flex-direction: column;
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
                       width:165px ;
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