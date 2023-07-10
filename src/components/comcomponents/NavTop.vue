<template>
  <div class="navcontainer _navcontainer">
    <div class="navicon _navicon"><i class="iconfont icon-caidan" @click="opencaidan()"></i></div>
    <div class="appleicon _appleicon"><i class="iconfont icon-pingguo" @click="$router.push('/home')"></i></div>
    <div id="navID" class="mainnavlist _mainnavlist">
        <div class="navlistclose"><i @click="closecaidan()" class="iconfont icon-guanbi"></i></div>
        <div @click="routerpush('/mac')">Mac</div>
        <div @click="routerpush('/ipad')">iPad</div>
        <div @click="routerpush('/iphone')">iPhone</div>
        <div @click="routerpush('/watch')">Watch</div>
        <div @click="routerpush('/music')">Music</div>
        <div @click="routerpush('/support')">技术支持</div>
        <div>
            <i class="iconfont icon-sousuo1"></i>
        </div>
    </div>
    <div class="shopcar">
        <i class="iconfont icon-gouwuche"></i>
    </div>
  </div>
</template>

<script>


export default {
  name: 'navtop',
  components: {
  },
  data() {
      return {
          nalistshowflag:false
      }
  },
  methods: {
      routerpush(to){
        this.$router.push(to)
        // 跳转之后，记得关闭菜单（在屏幕宽度小于800的时候才生效）
        var dom=document.getElementById('navID')
          if(dom.classList.contains('navlistshow')){
              dom.classList.remove('navlistshow')
          }

      },
    //当屏幕宽度小于800的时候，点击菜单图标，显示隐藏的菜单
      opencaidan(){
          var dom=document.getElementById('navID')

          if(dom.classList.contains('navlistshow')){
              return
          }
          dom.classList.add('navlistshow')
      },
    //当屏幕宽度小于800的时候，点击关闭按钮， 关闭菜单
      closecaidan(){
          var dom=document.getElementById('navID')
          if(dom.classList.contains('navlistshow')){
              dom.classList.remove('navlistshow')
          }
      }
  },
}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
.navcontainer{
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: rgb(51, 51, 51);
    color:rgb(214, 214, 214);
    .navicon{
       display:none; 
       cursor: pointer;
    }
    .navicon:hover{
       color:white;
    }
    .appleicon{
        width: 100px;
        cursor: pointer;
    }
    .appleicon:hover{
        color:white;
        }
    .mainnavlist{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        .navlistclose{
            display: none;
        }
        div{
            text-align: center;
            height: 40px;
            line-height: 40px;
            width: 95px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
        }
        div:hover{
            color:white;
        }
    }
    .shopcar{
        width: 100px;
        cursor: pointer;
    }
    .shopcar:hover{
        color:white;
    }
}
}
// 小于800px
@media only screen and (max-width: 800px){
    ._navcontainer{
    top: 0;
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 40px;
    background-color: rgb(51, 51, 51);
    color:rgb(214, 214, 214);
    position: relative;
    ._navicon{
        width: 100px;
    }
    ._appleicon{
        width: 100px;
    }
    ._mainnavlist{
        display: flex;
        flex-direction: column;
        position: absolute;
        //屏幕宽度小于800，默认清空下菜单是关闭的
        display: none;
        position:fixed;
        left: 0;
        top: 0 !important;
        z-index: 1999 !important;
        padding-top: 40px !important;
        width: 100%;
        height: 100%;
        color:rgb(214, 214, 214);
        background-color: rgba(0, 0, 0,0.95);
        top: 40px;
        padding: 0 40px;
        z-index: 999;
        div{
            text-align: left;
            height: 40px;
            line-height: 40px;
            width: 100%;
            border-bottom: 1px solid rgb(214, 214, 214);
        }
    }
    .shopcar{
        width: 100px;
    }
    }
    .navlistshow{
        display: block !important;
    }
}

</style>