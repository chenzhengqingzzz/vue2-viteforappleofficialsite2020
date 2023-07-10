<template>
  <div  class="subnavfordetail">
      <div>
          <div class="left">AirPods Pro</div>
          <div class="right">
                <p>概览</p>
                <h3>技术规格</h3>
                <span>购买</span>
           </div>
      </div>
  </div>
</template>

<script>
export default {
created() {
    // window.onscroll=function(){
    //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
    // }
},
}
</script>

<style lang="less" scoped>
.subnavfordetail{
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    padding: 0 10px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    div{
        width: 100%;
        height: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        .left{
        font-size: 20px;
        font-weight: 800;
        color: white;
        height: 100%;
        width: auto;
        }
        .right{
            display: flex;
            flex-direction: row;
            justify-content:center;
            align-items: center;
            height: 100%;
            width: auto;
            p{
                font-size: 6px;
                color: rgba(255,255,255,0.6);
            }
            h3{
                font-size: 6px;
                padding: 0 15px;
                color: white;
            }
            span{
                height: 25px;
                line-height: 25px;
                font-size: 10px;
                background-color: rgb(2, 113, 227);
                border-radius: 12.5px;
                padding: 0 10px;
                color: white;
            }
        }
    }
}


</style>