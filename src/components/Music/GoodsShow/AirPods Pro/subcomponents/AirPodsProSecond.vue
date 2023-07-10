<template>
  <div class="podsprosecond">
            <img src="../imgs/static_lifestyle_magic.jpg" alt="">
            <h1>贴耳，更贴心。</h1>
            <p>我们将能够提升舒适度的每处细节重新打磨，并通过可选尺寸的耳塞来实现主动降噪所需的高密合度，从而将入耳式耳机带到一个新的高度。因此，你可以倾耳感受音乐的美妙，却几乎感觉不到耳机的存在。
            </p>
            <img class="comfort" src="../imgs/static_comfort.jpg" alt="">
            <h2>大中小</h2>
            <p>柔软、富有弹性的硅胶耳塞有三种尺寸可选，而且一按即合。你可以通过耳塞贴合度测试，挑选出合适的尺寸，获得理想的音效。
这些内部锥形设计的耳塞会贴合你的耳形，使 AirPods Pro 可以始终牢牢戴在耳中。再加上通气系统帮助平衡压力，你在佩戴时会有一种宛如无物的感觉。</p>
            <h1>阻隔噪音，<br>
                倾耳听。</h1>
            <p>AirPods Pro 具备主动降噪功能，可根据你耳部的几何结构和耳塞的佩戴贴合度持续进行调节，以阻隔外界噪音，让你听得更专注。这，在入耳式耳机中堪称独树一帜。</p>
            <img src="../imgs/static_noise_cancellation.jpg" alt="">
            <p>随后，在你听到这些外部声波之前，AirPods Pro 便会用与之相当的抗噪声波将其抵消，从而实现降噪。
                内向式麦克风会检测你耳内是否有多余的声波，然后同样用抗噪声波予以抵消。
                降噪功能会以每秒 200 次的频率持续调节，带来真正令人沉浸的音质，让你能全然投入音乐、播客和通话之中。</p>
            <img src="../imgs/static_lifestyle_force_sensor.jpg" alt="">
            <p class="finalp">想听到周围的声音？只需长按耳机柄上的力度感应器，便可在主动降噪与通透模式间切换。通透模式可以让外界声音进入，这样当你在与身边的人交谈时，一切听起来、感觉起来都会很自然。</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.podsprosecond{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding-top: 40px;
    text-align: left;
    position: relative;
    img{
        width: 100%;
        margin-top: 20px;
    }
    .comfort{
        max-width: 370px;
    }
    h1{
        font-size:40px ;
        font-weight: 600;
        padding: 20px 0;
    }
    p{
        width: 100%;
        max-width: 370px;
        font-size: 20px;
        font-weight: 600;
        padding: 30px 0;
    }
    .finalp{
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%,-80px);
        padding: 0;
        max-width: 300px;
        font-size: 14px;

    }
}

</style>