<template>
  <div class="innerappcontainer _inerappcontainer">
    <div>
      <div class="innerapptop  _innerapptop">
        <h1>内置 App</h1>
        <p>每台 Mac 都内置了众多激发创意、提升效率的 app，帮助你去探索、交流、高效工作。</p>
      </div>
      <div class="innerappbody _innerappbody">
        <div class="bodyguide">
          <div :class="index===0?'choosed':''" @click="goto(0)">
            <img src="../imgs/nav_icon_photos.jpg" alt="">
            <span>照片</span>
          </div>
          <div :class="index===1?'choosed':''" @click="goto(1)">
            <img src="../imgs/nav_icon_imovie.jpg" alt="">
            <span>iMovie剪辑</span>
          </div>
          <div :class="index===2?'choosed':''" @click="goto(2)">
            <img src="../imgs/nav_icon_pages.jpg" alt="">
            <span>Pages文稿</span>
          </div>
          <div :class="index===3?'choosed':''" @click="goto(3)">
            <img src="../imgs/nav_icon_safari.jpg" alt="">
            <span>Safari浏览器</span>
          </div>
        </div>
        <div class="infoshow _infoshow">
          <p>{{appinfolist[index]}}</p>
          <img class="macscreeen" src="../imgs/macscreen.png" alt="">
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
      appinfolist:['能让你日益庞大的照片图库变得井井有条，并易于查看。还能帮助你美化图像，创作精彩照片。更有 iCloud 照片，让你可以将值得长久珍藏的照片和视频保存在云端4。',
      '以前所未有的方式讲述精彩故事。精简的设计与直观的剪辑功能，让你轻松制作精美的 4K 影片和颇具好莱坞风格的预告片。',
      '这款功能强大的文字处理软件，能满足你的各种所需，令制作出的文档看起来漂亮，读起来也漂亮。你可在 Mac、iOS 和 iPadOS 设备之间无缝切换，还可与使用 Microsoft Word 的其他人轻松协作。',
      'Safari 浏览器带来众多创新功能，让你以更多方式尽享网络上的种种精彩。 内置隐私功能可帮助保护你的个人信息，并守护你的 Mac 安全。优化的起始页面，可让你轻松快速地保存、查找和分享你常用的网站。Siri 建议也会将你在信息 app 中收到的的链接等信息显示在这里。'
      ],
      appinfoimglist:[
        require('../imgs/bia_photos.jpg'),
        require('../imgs/bia_imovie.jpg'),
        require('../imgs/bia_pages.jpg'),
        require('../imgs/bia_safari.jpg')
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
    .innerappcontainer{
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
                  width: 470px;
                  margin-top: 50px;
                }
               .screeninfo{
                 position: absolute;
                 bottom: 150px;
                 left: 50%;
                 transform: translateX(-50%);
                 z-index: 999;
                 width: 430px;
               }
        }
      }
    }
}
// 小于800px
@media only screen and (max-width: 800px){
    ._inerappcontainer{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      div{
        width: 100%;
        background-color: rgb(251, 251, 253);
        padding-top: 30px;
        ._innerapptop{
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
              padding-bottom:10px;
              font-size: 5.667vw;
            }
            p{
              text-align: center;
              font-size: 2.667vw;
              padding: 2.667vw;
            }
          }
        ._innerappbody{
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
        ._infoshow{
          position: relative;
          padding: 30px 0;
                p{
                   font-size: 2.667vw;
                 }
               .macscreeen{
                  width: 300px;
                  margin-top: 50px;
                }
               .screeninfo{
                 position: absolute;
                 bottom: 110px;
                 left: 50%;
                 transform: translateX(-50%);
                 z-index: 999;
                 width: 280px;

               }
        }
      }
    }
}

</style>