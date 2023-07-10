<template>
  <div class="airpodsbriefcontainer _airpodsbriefcontainer">
      <div :style="reversedirection?style:''">
            <div>
                <div>
                    <h3>{{(isnew==='yes')?'新款':''}}</h3>
                    <span>{{screensize}}</span>
                    <h1>{{goodname}}</h1>
                    <h2>{{goodsignature}}</h2>
                    <p>进一步了解</p>
                </div>
            </div>
            <div>
                <img :src="imgsrc" alt="">
            </div>
      </div>
  </div>
</template>

<script>
// import a from "../imgs/macbook_air__1.jpg" 
export default {
  name: 'airpodsbriefinfo',
  data() {
      return {
          style:'flex-direction:'+'row-reverse;'
      }
  },
  props:['reversedirection','isnew','screensize','goodname','goodsignature','imgsrc'],
  components: {
  },

}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
    .airpodsbriefcontainer{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 60px 0;
        background-color: rgb(17, 17, 17);
        margin:20px 0;
        div{
            max-width: 1000px;
            display: flex;
            width: 100%;
            // flex-direction: row-reverse;
            justify-content: space-around;
            align-items: center;
            div:nth-child(1){
                width: 45%;
                text-align: left;
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    color: white;
                    h3{
                        color:rgb(234, 94, 0);
                    }
                    p{color: rgb(12, 106, 205);}
                    h2{
                        font-size: 15px;
                    }
                    h1{
                        font-size: 25px;
                        font-weight: 600;
                    }
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                width: 55%;
                // height:400px ;
                overflow: hidden;
                img{
                    // width: 70%;
                    width: auto;
                    height: 200px;
                }
                
            }

        }
        
    }
}
// 小于800px
@media only screen and (max-width: 800px){
   ._airpodsbriefcontainer{
        display: flex;
        justify-content: center;
        width: 100%;
        // padding: 60px 0;
        margin-top: 20px;
        div{
            display: flex;
            flex-direction: column !important;
            width: 100%;
            align-items: center;
            div:nth-child(1){
                width: 100%;
                text-align: left;
                background-color: rgb(17, 17, 17);
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 30px 0;
                    h3{
                        color:rgb(234, 94, 0);
                        width: 100%;
                        max-width: 380px;
                    }
                    h2{
                      width: 100%;
                        max-width: 380px;  
                    }
                    p{
                        color: rgb(12, 106, 205);
                        width: 100%;
                        max-width: 380px;
                    }
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                width: 100%;
                background-color: rgb(17, 17, 17);
                img{
                    width: 100%;
                    max-width: 380px;
                    height: auto;
                    padding: 20px 0;
                }
                
            }

        }
        
    }
}

</style>