<template>
  <div class="proappcontainer _proappcontainer">
    <div class="proapptop">
        <h1>多款出色的音乐创作 App，<br>
            出自 Apple。</h1>
    </div>
    <div class="proappmiddle">
        <img src="../imgs/appsfromapple.jpg" alt="">
    </div>
    <div class="proappbottom">
        <div>
            <div><img src="../imgs/musicmemos.jpg" alt=""></div>
            <div>音乐备忘录</div>
        </div>
        <div>
            <div><img src="../imgs/garageband.jpg" alt=""></div>
            <div>库乐队</div>
        </div>
        <div>
            <div><img src="../imgs/logicprox.jpg" alt=""></div>
            <div>Logic Pro X</div>
        </div>
        <div>
            <div><img src="../imgs/mainstage3.jpg" alt=""></div>
            <div>MainStage 3</div>
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
   .proappcontainer{
       width: 100%;
       background-color: rgb(28, 28, 28);
       display: flex;
       flex-direction: column;
       align-items: center;
       padding: 20px 0;

       .proapptop{
           font-size: 20px;
            text-align: center;
            color: white;
            padding: 40px 0;
       }
       .proappmiddle{
           img{
               width: 100%;
               height: auto;
           }
       }
       .proappbottom{
           width: 80%;
           max-width: 800px;
           display: flex;
           flex-direction: row;
           align-items: center;
           justify-content: space-around;
           padding-top:20px;
           padding-bottom: 80px;
           div{
               width: 100px;
               height: 120px;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: space-between;
               div:nth-child(1){
                   height: 70%;
                   color: white;
                   img{
                       width: 60%;
                       height: auto;
                   }
               }
               div:nth-child(2){
                   height: 30%;
                   color: white;
                   line-height: 30px;
                   font-size: 15px;
                   img{
                       width: 60%;
                       height: auto;
                   }
               }
           }
       }
   }
}


// 小于800px
@media only screen and (max-width: 800px){
    ._proappcontainer{
       width: 100%;
       background-color: rgb(28, 28, 28);
       display: flex;
       flex-direction: column;
       align-items: center;
       padding: 20px 0;

       .proapptop{
           font-size: 2.067vw;
            text-align: center;
            color: white;
            padding: 40px 0;
       }
       .proappmiddle{
           img{
               width: 100%;
               height: auto;
           }
       }
       .proappbottom{
           width: 80%;
           max-width: 800px;
           display: flex;
           flex-direction: row;
           align-items: center;
           justify-content: space-around;
           padding-top:20px;
           padding-bottom: 80px;
           div{
               width: 13.333vw;
               height: 16vw;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: space-between;
               div:nth-child(1){
                   height: 70%;
                   color: white;
                   img{
                       width: 60%;
                       height: auto;
                   }
                    
                   
               }
               div:nth-child(2){
                   height: 30%;
                   color: white;
                   line-height: 4vw;
                   font-size: 2vw;
                   img{
                       width: 60%;
                       height: auto;
                   }
                   
               }
           }
       }
   }
}



</style>