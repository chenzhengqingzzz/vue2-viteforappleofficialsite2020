<template>
  <div class="professappcontainer _professappcontainer">
    <div>
      <div class="innerapptop">
        <h1>专业 App</h1>
        <p>对于想要尽情发挥创意的专业人士而言，这里有众多为业界所推崇的 app，
可以用来更好地掌控音乐与影片的剪辑、处理和输出。</p>
      </div>
      <div class="innerappbody">
        <div class="bodyguide">
          <div :class="index===0?'choosed':''" @click="goto(0)">
            <img src="../imgs/nav_icon_logicpro.jpg" alt="">
            <span>Logic Pro X</span>
          </div>
          <div :class="index===1?'choosed':''" @click="goto(1)">
            <img src="../imgs/nav_icon_mainstage.jpg" alt="">
            <span>MainStage 3</span>
          </div>
          <div :class="index===2?'choosed':''" @click="goto(2)">
            <img src="../imgs/nav_icon_finalcut.jpg" alt="">
            <span>Final Cut Pro X</span>
          </div>
          <div :class="index===3?'choosed':''" @click="goto(3)">
            <img src="../imgs/nav_icon_motion.jpg" alt="">
            <span>Motion</span>
          </div>
          <div :class="index===4?'choosed':''" @click="goto(4)">
            <img src="../imgs/nav_icon_compressor.jpg" alt="">
            <span>Compressor</span>
          </div>
        </div>
        <div class="infoshow">
          <p>{{appinfolist[index]}}</p>
          <img class="macscreeen" src="../imgs/macbookscreen.png" alt="">
          <img class="screeninfo" :src="appinfoimglist[index]" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: '',
  data() {
    return {
      appinfolist:['Logic Pro 在你的 Mac 上构建起一座完备的录音和 MIDI 工作室，以别开生面的方式满足你作曲、录音、编辑和混音的各种所需。有了大量功能齐备的插件，以及数千种声音和循环乐段，无论你想创作哪种音乐，都能为你提供从灵感初现到完成最后的母带的各种所需。',
      '专为现场演出打造的全屏幕界面，灵活的硬件操控，以及众多与 Logic Pro X 完全兼容的插件和音效，将你的 Mac 变身现场演出装备。',
      '为了满足如今剪辑师们四溢的灵感，Final Cut Pro 提供开创性的视频剪辑功能、强大的媒体组织整理能力和杰出的性能，并针对 Mac 电脑和 macOS Catalina 进行了全面优化。',
      'Motion 是一款强大的动态图形工具，可帮助你轻松制作电影风格的二维及三维字幕、流畅的转场和逼真的特效，一切效果即时可见。',
      '从 Final Cut Pro 中导出项目的功能变得更强大、更灵活。你可以自定义输出设置，使用分布式编码功能提高工作效率，并且可以轻松将影片打包提交至 iTunes Store。'
      ],
      appinfoimglist:[
        require('../imgs/pro_logicpro.jpg'),
        require('../imgs/pro_mainstage.jpg'),
        require('../imgs/pro_finalcut.jpg'),
        require('../imgs/pro_motion.jpg'),
        require('../imgs/pro_compressor.jpg')
      ],
      // 这个参数用来控制显示的内容
      index:0,
    }
  },
  methods: {
    goto(i){
      this.index=i
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
    .professappcontainer{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      div{
        max-width: 1000px;
        width: 100%;
        background-color: rgb(251, 251, 253);
        padding-top: 30px;
        .innerapptop{
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
              padding-bottom:10px;
            }
            p{
              text-align: center;
              max-width: 700px;
            }
          }
        .innerappbody{
          display: flex;
          flex-direction: column;
          align-items: center;
          .bodyguide{
             display: flex;
             flex-direction: row;
             justify-content: space-around;
             width: 95%;
             border-bottom: 1px solid rgba(0, 0, 0, 0.1);
             div{
              width: 10%;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 10px 0;
              cursor: pointer;
               img{
                 height: 60px;
               }
               span{
                 font-size: 12px;
               }
             }
          }
          .choosed{
            border-bottom: 2px solid rgba(0, 0, 0, 0.3);
          }
        }
        .infoshow{
          position: relative;
          padding: 30px 50px;
               .macscreeen{
                  width: 500px;
                  margin-top: 50px;
                }
               .screeninfo{
                 position: absolute;
                 bottom: 70px;
                 left: 50%;
                 transform: translateX(-50%);
                 z-index: 999;
                 width: 390px;
               }
        }
      }
    }
}
// 小于800px
@media only screen and (max-width: 800px){
    ._professappcontainer{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      div{
        width: 100%;
        background-color: rgb(251, 251, 253);
        padding-top: 30px;
        .innerapptop{
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
              padding-bottom:10px;
              font-size: 5.333vw;
            }
            p{
              text-align: center;
              width: 80%;
              font-size: 2.667vw;
            }
          }
        .innerappbody{
          display: flex;
          flex-direction: column;
          align-items: center;
          .bodyguide{
             display: flex;
             flex-direction: row;
             justify-content: space-around;
             width: 95%;
             border-bottom: 1px solid rgba(0, 0, 0, 0.1);
             div{
              width: 15%;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 10px 0;
              cursor: pointer;
               img{
                 height: 8vw;
               }
               span{
                 font-size: 1.6vw;
               }
             }
          }
          .choosed{
            border-bottom: 2px solid rgba(0, 0, 0, 0.3);
          }
        }
        .infoshow{
          position: relative;
          // padding: 30px 50px;
                p{
                  font-size: 2.667vw;
                  padding: 10px 20px;
                }
               .macscreeen{
                  width: 300px;
                  margin-top: 50px;
                }
               .screeninfo{
                 position: absolute;
                 bottom: 26px;
                 left: 50%;
                 transform: translateX(-50%);
                 z-index: 999;
                 width:235px;
               }
        }
      }
    }
}

</style>