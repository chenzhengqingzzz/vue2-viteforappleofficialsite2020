<template>
  <div class="devicecontainer _devicecontainer">
    <div class="devicebody">
        <div>
            <h1>AirPods</h1>
            <p>无线，无繁琐，<br>
                只有妙不可言。</p>
            <span>进一步了解 ></span>
            <img src="../imgs/airpods.jpg" alt="">
        </div>
        <div>
            <h1>HomePod</h1>
            <p>家的新声。</p>
            <span>进一步了解 ></span>
            <img src="../imgs/homepod.jpg" alt="">
        </div>
    </div>
    <div class="devicebody">
        <div>
            <h1>iPod touch</h1>
            <p>你喜爱的音乐，<br>
                随身带着走。</p>
            <span>进一步了解 ></span>
            <img src="../imgs/ipod.jpg" alt="">
        </div>
        <div>
            <h1>配件</h1>
            <p>给好听的歌曲，<br>
                搭个好看的装备。</p>
            <span>进一步了解 ></span>
            <img src="../imgs/beats_studio.jpg" alt="">
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
    .devicecontainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .devicebody{
            max-width: 1000px;
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
            div{
                width: 48%;
                padding:5%;
                background-color: rgb(250, 250, 250);
                height: 600px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h1{
                    font-size: 20px;
                    font-weight: 600;
                }
                p{
                    padding: 10px 0;
                    font-size: 40px;
                    font-weight: 600;
                }
                span{
                    color: rgb(12, 106, 205);
                    padding: 10px;
                }
                img{
                    margin-top: 30px;
                    width: 60%;
                    height: auto;
                }
            }
        }
    }
}


// 小于800px
@media only screen and (max-width: 800px){
    ._devicecontainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .devicebody{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            // padding-top: 20px;
            background-color: white;
            div{
                width: 100%;
                background-color: rgb(250, 250, 250);
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 20px;
                h1{
                    margin: 10px 0;
                    font-size: 5.333vw;
                    font-weight: 600;
                }
                p{
                    padding: 10px 0;
                    font-size: 15px;
                }
                span{
                    color: rgb(12, 106, 205);
                    padding: 1.333vw;
                }
                img{
                    margin-top: 30px;
                    width: 200px;
                    // height: 100%;
                }
            }
        }
    }
}



</style>