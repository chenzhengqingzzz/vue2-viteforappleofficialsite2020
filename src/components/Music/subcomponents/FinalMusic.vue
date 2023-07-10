<template>
  <div class="finalmusiccontaianer _finalmusiccontaianer">
      <div class="musicbody">
        <img src="../imgs/applemusic.jpg" alt="">
        <h1>与 Apple Music 携手。</h1>
        <p>在 Apple Music 上展示精彩内容，你有更多方式。你可以获取 MusicKit、RSS 订阅 <br>
            源、小组件、品牌指导原则和标识等。
        </p>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@media only screen and (min-width: 800px){
    .finalmusiccontaianer{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
        .musicbody{
            width: 100%;
            max-width: 700px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 70px;
                height: auto;
            }
            h1{
                font-size: 40px;
                font-weight: 600;
                padding: 10px 0;
            }
            p{
                font-size: 15px;
                padding: 10px 0;
            }
        }
    }
}
// 小于800px
@media only screen and (max-width: 800px){
    ._finalmusiccontaianer{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
        .musicbody{
            width: 100%;
            max-width: 700px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 50px;
                height: auto;
            }
            h1{
                font-size: 5.333vw;
                font-weight: 600;
                padding: 1.333vw 0;
            }
            p{
                font-size: 2vw;
                padding: 1.733vw 0;
            }
        }
    }
}
</style>