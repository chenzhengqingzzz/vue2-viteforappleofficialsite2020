<template>
  <div class="iphonebriefcontainer _iphonebriefcontainer">
      <div :style="reversedirection?style:''">
            <div>
                <h3>{{(isnew==='yes')?'新款':''}}</h3>
                <h1>{{goodname}}</h1>
                <h2>{{goodinfo}}</h2>
                <h4>{{priceinfo}}</h4>
                <h5>{{buyinfo}}</h5>
                <p>进一步了解</p>
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
  name: 'macbriefinfo',
  data() {
      return {
          style:'flex-direction:'+'row-reverse;'
      }
  },
  props:['reversedirection','isnew','goodinfo','priceinfo','goodname','imgsrc','buyinfo'],
  components: {
  },

}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
    .iphonebriefcontainer{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 30px 0;
        div{
            max-width: 1000px;
            display: flex;
            // flex-direction: row-reverse;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            div:nth-child(1){
                padding: 0 100px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 50%;
                text-align: left;
                h3{
                    color:rgb(234, 94, 0);
                }

                p{
                    font-size: 2.667vw;
                    color: rgb(12, 106, 205);}
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                width: 50%;
                img{
                    width: 100%;
                    height: auto;
                }
                
            }

        }
        
    }
}
// 小于800px
@media only screen and (max-width: 800px){
    ._iphonebriefcontainer{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 30px 0;
        background-color: rgb(236, 236, 236);
        margin-bottom: 20px;
        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            div:nth-child(1){
                padding: 0 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 50%;
                h3{
                    color:rgb(234, 94, 0);
                    font-size: 2.667vw; 
                }
                h1{
                   font-size: 3.667vw; 
                   font-weight: 600;
                }
                h2{
                    font-size: 2.667vw;
                }
                h4{
                    font-size: 1.667vw;
                }
                h5{
                    font-size: 1.667vw;
                }
                p{
                    color: rgb(12, 106, 205);
                    font-size: 1.667vw;
                    }
            }
            div:nth-child(2){
                
                display: flex;
                align-items: center;
                width:50%;
                // height: 400px;
                // max-width: 600px;
                img{
                    width:100%;
                    // height: 100%;
                }
                
            }

        }
        
    }
}

</style>