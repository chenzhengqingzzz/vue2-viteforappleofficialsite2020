<template>
  <div class="whyipcontainer _whyipcontainer">
        <div>
            <div class="bodytitle">
                <h1>为什么 iPhone 就是那么不一样？</h1>
            </div>
            <div class="whyios">
                <p>iOS 13</p>
                <h1>新出风格，新出境界。</h1>
            </div>
            <div class="thereason">
                <div>
                <div>
                    <h1>iPhone 独到之处</h1>
                    <p>iPhone 就是那么不一样。</p>
                </div>
                <img src="../imgs/only_iphone.jpg" alt="">
                </div>
                <div>
                <div>
                    <h1>换成 iPhone 的理由</h1>
                    <p>有了 iPhone，生活多轻松。</p>
                </div>
                <img src="../imgs/why_switch_alt.jpg" alt="">
                </div>
            </div>
            <div class="privacy">
                <div>
                    <h1>隐私</h1>
            </div>
            <img src="../imgs/privacy.jpg" alt="">
            </div>
            <div class="camera">
                <div>
                    <img src="../imgs/thats_iphone.jpg" alt="">
                    <h1>这很 iPhone。</h1>
                </div>
                <div>
                    <h1>使用 iPhone <br>
                        拍摄的窍门</h1>
                    <p>我们相信每个人都能拍出好照片。来学习一些拍摄技巧和技能，让你拍出的照片更精彩。</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>


export default {
  name: '',
  components: {
  }
}
</script>

<style lang="less" scoped>
// 大于800px
@media only screen and (min-width: 800px){
    .whyipcontainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 20px 0;
            div{
                width: 100%;
                max-width: 1000px;
                .bodytitle{
                    padding: 20px 0;
                    h1{
                        font-size: 4.333vw;
                    }
                }
                .whyios{
                    width: 100%;
                    height: 400px;
                    background-image: url(../imgs/ios13.jpg);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin: 10px 0;
                    p{
                        font-size: 30px;
                    }
                    h1{
                        font-size: 40px;
                    }
                }
                .thereason{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    height: 500px;
                    width: 100%;
                    margin: 25px 0;
                    div:nth-child(1){
                        width: 49%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-color: rgb(0, 0, 0);
                        color: white;
                        img{
                            height: 50%;
                            width: auto;}
                            
                    }
                    div:nth-child(2){
                        width: 49%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-color: rgb(0, 0, 0);
                        color: white;
                        img{
                            height: 50%;
                            width: auto;}
                    }
                }
                .privacy{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        height: 450px;
                        background-color: rgb(0, 0, 0);
                        margin: 25px 0;
                        div{
                            width: 50%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            color: white;
                        }
                        img{
                            width: 400px;
                            height: auto;
                        }
                }
                .camera{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    height: 400px;
                    width: 100%;
                    div:nth-child(1){
                        width: 49%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-color: rgb(0, 0, 0);
                        color: white;
                        img{
                            height: 50%;
                            width: auto;}
                            
                    }
                    div:nth-child(2){
                        width: 49%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url(../imgs/shot_on_iphone.jpg);
                        background-position: center;
                        background-size: cover;
                        background-color: rgb(0, 0, 0);
                        color: white;
                    }

                }
            }
    }
     
}
// 小于800px
@media only screen and (max-width: 800px){
     ._whyipcontainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 20px 0;
            div{
                width: 100%;
                max-width: 1000px;
                .bodytitle{
                    padding: 20px 0;
                    h1{
                        font-size: 5.333vw;
                    }
                }
                .whyios{
                    width: 100%;
                    height: 66.333vw;
                    background-image: url(../imgs/ios13.jpg);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin: 10px 0;
                    p{
                        font-size: 4vw;
                    }
                    h1{
                        font-size: 5.333vw;
                    }
                }
                .thereason{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    // height: 66.667vw;
                    width: 100%;
                    margin: 25px 0;
                    div:nth-child(1){
                        width: 100%;
                        height: 66.667vw;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-color: rgb(0, 0, 0);
                        color: white;
                        margin-bottom: 20px;
                        h1{
                            font-size: 3.967vw;

                        }
                        p{
                            font-size: 2.667vw;
                        }
                        img{
                            height: 50%;
                            width: auto;}
                            
                    }
                    div:nth-child(2){
                        width: 100%;
                        height: 66.667vw;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-color: rgb(0, 0, 0);
                        color: white;
                        img{
                            height: 50%;
                            width: auto;}
                    }
                }
                .privacy{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        // height: 450px;
                        background-color: rgb(0, 0, 0);
                        margin: 25px 0;
                        div{
                            width: 100%;
                            height: 36vw;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            color: white;
                        }
                        img{
                            width: 70%;
                            height: auto;
                        }
                        
                }
                .camera{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 100%;
                    div:nth-child(1){
                        width: 100%;
                        height: 76.667vw;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-color: rgb(0, 0, 0);
                        color: white;
                        img{
                            height: 50%;
                            width: auto;}
                        h1{
                            font-size: 4vw;
                        }
                        p{
                            font-size: 2.667vw;
                        }
                            
                    }
                    div:nth-child(2){
                        width: 100%;
                        height: 76.667vw;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url(../imgs/shot_on_iphone.jpg);
                        background-position: center;
                        background-size: cover;
                        background-color: rgb(0, 0, 0);
                        color: white;
                        h1{
                            font-size: 4vw;
                        }
                        p{
                            font-size: 2.667vw;
                            padding: 0 4.667vw;
                        }
                    }

                }
            }
    }
}

</style>