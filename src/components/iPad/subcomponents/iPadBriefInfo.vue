<template>
  <div class="ipadbriefcontainer _ipadbriefcontainer">
      <div :style="reversedirection?style:''">
            <div>
                <h3>{{(isnew==='yes')?'新款':''}}</h3>
                <span>{{screensize}}</span>
                <h1>{{goodname}}</h1>
                <h2>{{goodsignature}}</h2>
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
  props:['reversedirection','isnew','screensize','goodname','goodsignature','imgsrc'],
  components: {
  },

}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
    .ipadbriefcontainer{
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
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 30%;
                padding: 0 2.667vw;
                text-align: left;
                h3{
                    color:rgb(234, 94, 0);
                }
                h1{
                    font-size: 3.167vw;
                    font-weight: 600;
                }
                h2{
                    font-size: 2.667vw;
                }
                p{color: rgb(12, 106, 205);}
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                width: 70%;
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
    ._ipadbriefcontainer{
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
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 30%;
                padding: 0 2.667vw;
                text-align: left;
                h3{
                    color:rgb(234, 94, 0);
                }
                h1{
                    font-size: 3.167vw;
                    font-weight: 600;
                }
                h2{
                    font-size: 2.667vw;
                }
                p{color: rgb(12, 106, 205);}
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                width: 70%;
                img{
                    width: 100%;
                    height: auto;
                }
                
            }

        }
        
    }
}

</style>