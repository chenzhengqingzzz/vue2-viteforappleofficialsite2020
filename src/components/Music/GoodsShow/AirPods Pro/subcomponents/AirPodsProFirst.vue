<template>
  <div class="podsprofirst">
            <h1>AirPods Pro</h1>
            <img src="../imgs/static_hero_airpodspro.jpg" alt="">
            <p>主动降噪，声声入耳更沉浸。<br>
                通透模式，听到周围的声音。<br>
                可选耳塞尺寸，一直戴着都舒服。<br>
                妙得不同凡响。
            </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.podsprofirst{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 40px 0;
    h1{
        font-size: 8vw;
    }
    img{
        width: 100%;
        height: auto;
    }
    p{
        font-size: 3.667vw;
        line-height: 7vw;
    }
}

</style>