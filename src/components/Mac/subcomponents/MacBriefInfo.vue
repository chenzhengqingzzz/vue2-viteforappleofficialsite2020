<template>
  <div class="macbriefcontainer _macbriefcontainer">
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
    .macbriefcontainer{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 60px 0;
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
                    h3{
                        color:rgb(234, 94, 0);
                    }
                    p{color: rgb(12, 106, 205);}
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                width: 55%;
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
   .macbriefcontainer{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 60px 0;
        div{
            // max-width: 1000px;
            display: flex;
            flex-direction: column !important;
            width: 100%;
            // flex-direction: row-reverse;
            // justify-content: space-around;
            align-items: center;
            div:nth-child(1){
                width: 50%;
                text-align: left;
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    h3{
                        color:rgb(234, 94, 0);
                    }
                    p{color: rgb(12, 106, 205);}
                }
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                width: 70%;
                img{
                    width: 100%;
                    height: auto;
                    padding: 20px 0;
                }
                
            }

        }
        
    }
}

</style>