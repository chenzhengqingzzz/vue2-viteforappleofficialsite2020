<template>
  <div class="subnavcontainer _subnavcontainer">
    <div>
      <div class="airpodspro" @click="$router.push('/music/airpodspro')" ></div>
      <span>AirPods Pro</span>
    </div>
    <div>
      <div class="airpods"></div>
      <span>AirPods</span>
    </div>
    <div>
      <div class="beats"></div>
      <span>Beats</span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'subnavguide',
  components: {
  },
  methods: {
    
  },
  mounted() {
  
  },
}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
    .subnavcontainer{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 100%;
        background-color: rgba(255,255, 255,0.1);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 500px;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 0 20px;
            cursor: pointer;
            div{
              width: 60px;
              height: 60px;
              margin-bottom: 6px;
            }
            span{
              font-size: 10px;
              cursor: pointer;
              color: white;
              
            }
            span:hover{
              color:rgba(250, 250, 250, 0.5);
            }
            
        }
    }
    .airpodspro{
      background-image: url(../imgs/icon_airpods_pro.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      
    }
    .airpods{
      background-image: url(../imgs/icon_airpods.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      
    }
    .beats{
      background-image: url(../imgs/icon_beats.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
}
// 小于800px
@media only screen and (max-width: 800px){
    ._subnavcontainer{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 100%;
        background-color: rgba(255,255, 255,0.1);
        position: absolute;
        left: 0;
        top: 40px;
        z-index: 500px;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 0 20px;
            cursor: pointer;
            div{
              width: 60px;
              height: 60px;
              margin-bottom: 6px;
            }
            span{
              font-size: 10px;
              cursor: pointer;
              color: white;
              
            }
            span:hover{
              color:rgba(250, 250, 250, 0.5);
            }
            
        }
    }
    .airpodspro{
      background-image: url(../imgs/icon_airpods_pro.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      
    }
    .airpods{
      background-image: url(../imgs/icon_airpods.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      
    }
    .beats{
      background-image: url(../imgs/icon_beats.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
}

</style>