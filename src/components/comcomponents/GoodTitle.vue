<template>
  <div class="goodtitlecontainer" :style="'color:'+String(fontcolor)">
      <div class="goodname">{{goodname}}</div>
      <div class="goodinfo">
          <h1>{{goodinfo}}</h1>
          <p></p>
      </div>
      <div class="goodguide">
          <div>进一步了解 ></div>
          <div>购买 ></div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'goodtitle',
  components: {
  },
  props:['goodname','goodinfo','fontcolor']
}
</script>

<style lang="less" scoped>
    .goodtitlecontainer{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        font-size: 2em;
        z-index: 999;
        .goodname{
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 2.5em;
                font-weight: 800;
        }
        .goodinfo{
            h1{
                font-size: 1.5em ;
                // color: white;
            }
        }
        .goodguide{
                div{
                    font-size: 1em;
                    color: rgb(40, 151, 255);
                }
            }
        
    }

@media only screen and (max-width: 800px){

}
</style>