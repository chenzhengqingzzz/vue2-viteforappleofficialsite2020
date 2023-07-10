<template>
  <div class="mainfooter _mainfooter">
    <div class="footerbody _footerbody">
        <div>
            <h1>选购及了解</h1>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>Music</p>
            <p>AirPods</p>
        </div>
        <div>
            <h1>服务</h1>
            <p>Apple Music</p>
            <p>iCloud</p>
            <h1>账户</h1>
            <p>管理你的Apple ID</p>
            <p>Apple Store账户</p>
            
        </div>
        <div>
            <h1>Apple零售店</h1>
            <p>查找零售店</p>
            <p>在线选购</p>
            <p>Apple夏令营</p>
            <p>优惠和更新</p>
            <p>分期付款</p>
            <p>订单状态</p>
            <p>选购帮助</p>
        </div>
        <div>
            <h1>商务应用</h1>
            <p>Apple与商务</p>
            <p>商务选购</p>
            <h1>教育应用</h1>
            <p>Apple与教育</p>
            <p>在校师生选购</p>
        </div>
        <div>
            <h1>Apple价值观</h1>
            <p>辅助功能</p>
            <p>环境责任</p>
            <p>隐私</p>
            <p>供应商责任</p>
            <h1>关于Apple</h1>
            <p>Apple管理层</p>
            <p>工作机会</p>
            <p>创造机会</p>
            <p>活动</p>
            <p>联系Apple</p>
        </div>
    </div>
    <div class="footerbottom _footerbottom">
        <p>Copyright © 2020 Apple Inc. 保留所有权利。</p>
        <p>京ICP备10214630 营业执照 无线电发射设备销售备案编号11201910351200</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'mainfooter',
  components: {
  }
}
</script>

<style lang="less" scoped>
@media only screen and (min-width: 800px){
    .mainfooter{
        display: flex;
        flex-direction: column;
        width: 100%;
        .footerbody{
            display: flex;
            justify-content: space-around;
            text-align: left;
            padding: 20px 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            margin:0 10%;
            div{
                width: 130px;
                h1{
                    font-size: 12px;
                    font-weight:800;
                    margin: 7px 0;
                }
                p{
                    font-size: 10px;
                    margin: 7px 0;
                }
            }
        }
        .footerbottom{
            margin: 7px 0;
            p{
                font-size: 10px;
            }
        }
    }

}

@media only screen and (max-width: 800px){
    ._mainfooter{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: start;
        ._footerbody{
            width: 100%;
            display: flex;
            justify-content: space-around;
            text-align: left;
            // padding: 20px 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            // height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            // margin:0 10%;
            div{
                margin: 0 10px;
                width: 95%;
                h1{
                    display: block;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    color: rgba(0, 0, 0, 0.5);
                    height: 40px;
                    font-size: 10px;
                    font-weight:800;
                    line-height: 40px;
                    // margin: 7px 0;
                }
                p{
                    display: none ;
                    font-size: 10px;
                    margin: 7px 0;
                }
            }
        }
        ._footerbottom{
            margin: 7px 0;
            p{
                font-size: 10px;
            }
        }
        
    }
}

</style>