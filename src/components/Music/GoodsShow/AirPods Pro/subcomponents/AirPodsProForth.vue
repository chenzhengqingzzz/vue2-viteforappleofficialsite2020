<template>
  <div class="podsproforth">
            <h1>充电无线，<br>
                放电不倦。</h1>
            <p>有了无线充电盒的支持，总的电池续航可超过 24 小时，让你和 AirPods Pro 都能保持十足动力。而且，它还兼容 Qi 认证充电器。</p>
            <img id="airpodsbox" src="../imgs/airpods_pro_case.png" alt="">
            <div>
                <h5>超过</h5>
                <div>
                    <span>24</span>&nbsp 小时
                </div>
                <p>使用充电盒额外多次充电达到的聆听时间</p>
                <h5>最长可达</h5>
                <div>
                    <span>4.5</span>&nbsp 小时
                </div>
                <p>单次充电的聆听时间</p>
                <h5>大约</h5>
                <div>
                    <span>1</span>&nbsp 小时
                </div>
                <p>仅充电 5 分钟的聆听时间</p>
            </div>
            <h1>从配对到用 Siri，一切都简单。</h1>
             <img src="../imgs/static_magical_connect.jpg" alt="">
             <h3>和 AirPods 一样，AirPods Pro 能同你的 iPhone 或 Apple Watch 巧妙地配对连接。</h3>
             <img src="../imgs/static_magical_eartips.jpg" alt="">
             <h3>耳塞贴合度测试会帮你选出合适的尺寸，令耳塞与耳朵紧密贴合，不仅降噪出色，更营造非凡的聆听体验。</h3>
             <img src="../imgs/static_magical_siri.jpg" alt="">
             <h3>只需说声“嘿 Siri”，就能呼唤出你亲爱的私人助理。控制音乐和通话，调节音量，获取路线信息，进行各种操作连手指都不用动。</h3>
             <img src="../imgs/static_magical_share.jpg" alt="">
             <h3>有音频共享功能，还可用两副 AirPods 一起欣赏同一歌曲、播客和其他音频5。</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.podsproforth{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 40px 0;
    text-align: left;
    img{
        width: 100%;
        max-width: 380px;
        height: auto;
    }
    #airpodsbox{
        width: 100%;
        max-width: 300px;
        height: auto;
    }

    h1{
        font-size: 40px;
        max-width: 380px;
        font-weight: 600;
        width: 100%;
        padding: 30px 0;
    }
    p{
        font-size: 20px;
        max-width: 380px;
        width: 100%;
        font-weight: 600;
        padding-bottom: 40px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: left; 
        width: 100%;
        max-width: 380px;
        padding-top: 40px ;
        h5{
            font-size: 12px;
        } 
        p{
            font-size: 12px;
        }
        div{
            font-size: 30px;
            display: flex;
            flex-direction: row;
            align-items:flex-end;
            padding: 10px 0;
            span{
                font-size: 50px;
                line-height: 50px;
                font-weight:600;
            }
        }
    }
    h3{
        width: 100%;
        max-width: 380px;
        height: auto;
        font-size: 15px;
        padding: 30px 0;
    }
}

</style>