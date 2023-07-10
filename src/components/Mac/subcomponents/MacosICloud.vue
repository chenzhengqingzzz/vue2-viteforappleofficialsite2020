<template>
  <div class="oscloudcontainer _oscloudcontainer">
    <div class="oscloudbody">
        <div>
            <h1>macOS</h1>
            <p>Mac 如此强大好用，macOS 这一操作系统功不可没。它为 Mac 特别打造，采用了软硬件协同设计，能帮助你得心应手地处理各种事情。</p>
            <span>进一步了解 ></span>
            <img src="../imgs/macos.jpg" alt="">
        </div>
        <div>
            <h1>iCloud</h1>
            <p>iCloud 可以安全存储你的照片、视频、文稿、信息、音乐、app 等内容，并能在你的各种设备上同步保持更新4。因此，你可以更自由、更方便地访问你想要的内容。</p>
            <span>进一步了解 ></span>
            <img src="../imgs/icloud.jpg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>

@media only screen and (min-width: 800px){
    .oscloudcontainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .oscloudbody{
            max-width: 1000px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
            div{
                width: 48%;
                padding:5%;
                background-color: rgb(250, 250, 250);
                h1{
                    margin: 10px 0;
                    font-size: 40px;
                    font-weight: 600;
                }
                p{
                    padding: 10px 0;
                    font-size: 15px;
                }
                span{
                    color: rgb(12, 106, 205);
                    padding: 10px;
                }
                img{
                    margin-top: 30px;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}


// 小于800px
@media only screen and (max-width: 800px){
    ._oscloudcontainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .oscloudbody{
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 20px 0;
            div{
                width: 100%;
                padding:5%;
                margin-bottom: 20px;
                background-color: rgb(250, 250, 250);
                display: flex;
                flex-direction: column;
                align-items: center;
                h1{
                    margin: 10px 0;
                    font-size: 6.333vw;
                    font-weight: 600;
                }
                p{
                    padding: 10px 0;
                    font-size: 3vw;
                }
                span{
                    color: rgb(12, 106, 205);
                    padding: 10px;
                }
                img{
                    margin-top: 30px;
                    width: 70%;
                    height: auto;
                }
            }
        }
    }
}



</style>