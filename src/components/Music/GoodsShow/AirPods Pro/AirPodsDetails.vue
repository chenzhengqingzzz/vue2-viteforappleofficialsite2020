<template>
  <div class="airpodsprodetails _airpodsprodetails">
       <SubNavForDetail id="airpodsprodetailnav"/>
        <div id="detailsbody">
            <div class="over800px">
                <div class="dynamic">
                   <div id="dynamiceara" style="">
                     <img id="dynamicimgs" src="./imgs/first/1.jpg" alt="">
                     <div  id="textshow">AirPods Pro</div>
                   </div>
                </div>
                <div class="static">
                    <AirpodsBriefInfo :isnew="''" :reversedirection="''" :screensize="''" :goodname="'这一刻，属于你。'" :goodsignature="'让你的 AirPods Pro 更显个性，免费镌刻服务，Apple 独家福利。'" :imgsrc="require('./imgs/buy_router.jpg')" />
                    <AirpodsBriefInfo :isnew="''" :reversedirection="''" :screensize="''" :goodname="'用增强现实欣赏AirPods Pro'" :goodsignature="'在你的 iPhone 或 iPad 上，用 Safari 浏览器打开此页面。'" :imgsrc="require('./imgs/use_ar_iphone.jpg')" />
                   
                </div>
            </div>
             <!-- px小于800的时候显示用 -->
            <div class="behind800px">
                <AirPodsProFirst/>
                <AirPodsProSecond/>
                <AirPodsProThird/>
                <AirPodsProForth/>
                <AirpodsBriefInfo :isnew="''" :reversedirection="''" :screensize="''" :goodname="'这一刻，属于你。'" :goodsignature="'让你的 AirPods Pro 更显个性，免费镌刻服务，Apple 独家福利。'" :imgsrc="require('./imgs/buy_router.jpg')" />
                <AirpodsBriefInfo :isnew="''" :reversedirection="''" :screensize="''" :goodname="'用增强现实欣赏AirPods Pro'" :goodsignature="'在你的 iPhone 或 iPad 上，用 Safari 浏览器打开此页面。'" :imgsrc="require('./imgs/use_ar_iphone.jpg')" />
                   
            </div>
        </div>
  </div>
</template>

<script>
import SubNavForDetail from "./subcomponents/SubNavForDetail.vue";
import AirpodsBriefInfo from "./subcomponents/AirpodsBriefInfo.vue";
import AirPodsProFirst from "./subcomponents/AirPodsProFirst.vue";
import AirPodsProSecond from "./subcomponents/AirPodsProSecond.vue";
import AirPodsProThird from "./subcomponents/AirPodsProThird.vue";
import AirPodsProForth from "./subcomponents/AirPodsProForth.vue";
export default {
    components:{SubNavForDetail,AirpodsBriefInfo,AirPodsProFirst,AirPodsProSecond,AirPodsProThird,AirPodsProForth},
    data() {
        return {
        }
    },
    methods: {
        _scrollbehavoir(){

            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.imgdom=document.getElementById('dynamicimgs')
            console.log(scrollTop)

            // 用来给头部的nav移除或者绑定diplay:fixd样式
            var navdom=document.getElementById('airpodsprodetailnav')
            // 为什么dom为null要返回呢？因为在进入这个详情页面的时候才绑定了window滚动事件，
            // 退出这个页面之后，绑定的事件已经生效，在其他页面滚动的时候，就会获取不到dom元素，去操作dom会一直报错
            // 所以dom为null的时候就之间返回。
            if(navdom===null){
                return
            }
            if(scrollTop<40){
                if(navdom.classList.contains('navbecomefixed')){
                    navdom.classList.remove('navbecomefixed')
                }
            }
            else{
                if(!navdom.classList.contains('navbecomefixed')){
                    navdom.classList.add('navbecomefixed')
                }
            }

            // 让动态显示的部分移除或者绑定diplay：fixed样式
            var dynamicdom=document.getElementById('dynamiceara')
            if(dynamicdom===null){
                return
            }
            if(scrollTop<40){
                if(dynamicdom.classList.contains('dynamicbecomefixed')){
                    dynamicdom.classList.remove('dynamicbecomefixed')
                }
            }
            else if(scrollTop<11200){
                if(!dynamicdom.classList.contains('dynamicbecomefixed')){
                    dynamicdom.classList.add('dynamicbecomefixed')
                }
                if(dynamicdom.classList.contains('dynamicbecomeabsolute')){
                    dynamicdom.classList.remove('dynamicbecomeabsolute')
                }
            }
            // 大于11200px时
            else{
                // 移除fixed
                if(dynamicdom.classList.contains('dynamicbecomefixed')){
                    dynamicdom.classList.remove('dynamicbecomefixed')
                }
                // 添加absolute定位
                if(!dynamicdom.classList.contains('dynamicbecomeabsolute')){
                    dynamicdom.classList.add('dynamicbecomeabsolute')
                }
            }
           

           

        //控制显示的字体
        var textshowdom=document.getElementById('textshow')
        if(scrollTop>=0&&scrollTop<700){
            textshowdom.style.top=String(340-scrollTop*0.8)+'px'
            textshowdom.style.fontSize='6.067vw'
            textshowdom.innerHTML='AirPods Pro'
            textshowdom.style.opacity='1'
            textshowdom.style.color='rgb(255,255,255)'
        }
        else if(scrollTop>=700&&scrollTop<1150){
             textshowdom.innerHTML='主动降噪，声声入耳更沉浸'
             textshowdom.style.top=String(400-(scrollTop-700)*0.1)+'px'
             textshowdom.style.fontSize='5.067vw'
             textshowdom.style.transform='translate(-50%,0)'
             textshowdom.style.width='auto'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<800){
                 textshowdom.style.opacity=String(0+(scrollTop-700)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-900)*0.007)
        }
        else if(scrollTop>=1150&&scrollTop<1600){
             textshowdom.innerHTML='通透模式，听到周围的声音'
             textshowdom.style.top=String(400-(scrollTop-1150)*0.1)+'px'
             textshowdom.style.fontSize='5.067vw'
             textshowdom.style.transform='translate(-50%,0)'
             textshowdom.style.width='auto'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<1250){
                 textshowdom.style.opacity=String(0+(scrollTop-1150)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-1250)*0.0035)
        }
        else if(scrollTop>=2500&&scrollTop<3000){
             textshowdom.innerHTML='贴儿更贴心'
             textshowdom.style.top=String(400-(scrollTop-2500)*0.1)+'px'
             textshowdom.style.fontSize='7.067vw'
             textshowdom.style.transform='translate(-50%,0)'
             textshowdom.style.width='auto'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<2600){
                 textshowdom.style.opacity=String(0+(scrollTop-2500)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-2600)*0.003)
        }
        else if(scrollTop>=3200&&scrollTop<3700){
             textshowdom.innerHTML='我们将能够提升舒适的每处细节进行打磨，将入耳式耳机带到一个新高度。因此你可以听到美妙的声音而感觉不到耳机的存在。'
             textshowdom.style.top=String(500-(scrollTop-3200)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
            //  textshowdom.style.left='200px'
             textshowdom.style.transform='translate(-450px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<3300){
                 textshowdom.style.opacity=String(0+(scrollTop-3200)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-3300)*0.003)
        }
        else if(scrollTop>=3800&&scrollTop<4300){
             textshowdom.innerHTML='柔软、富有弹性的硅胶耳塞有三种尺寸可选，而且一按即合。你可以通过耳塞贴合度测试，挑选出合适的尺寸，获得理想的音效。'
             textshowdom.style.top=String(500-(scrollTop-3800)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(-450px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<3900){
                 textshowdom.style.opacity=String(0+(scrollTop-3800)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-3900)*0.003)
        }
        else if(scrollTop>=4450&&scrollTop<4950){
             textshowdom.innerHTML='阻隔噪音，<br>倾耳听。'
             textshowdom.style.top=String(300-(scrollTop-4450)*0.1)+'px'
             textshowdom.style.fontSize='7.067vw'
             textshowdom.style.transform='translate(-50%,0)'
             textshowdom.style.width='auto'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<4550){
                 textshowdom.style.opacity=String(0+(scrollTop-4450)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-4550)*0.003)
        }
        else if(scrollTop>=5300&&scrollTop<5900){
             textshowdom.innerHTML='AirPods Pro 具备主动降噪功能，可根据你耳部的几何结构和耳塞的佩戴贴合度持续进行调节，以阻隔外界噪音，让你听得更专注。这，在入耳式耳机中堪称独树一帜。'
             textshowdom.style.top=String(500-(scrollTop-5300)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(100px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<5400){
                 textshowdom.style.opacity=String(0+(scrollTop-5300)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-5400)*0.003)
        }
        else if(scrollTop>=6600&&scrollTop<7200){
             textshowdom.innerHTML='想听到周围的声音？只需长按耳机柄上的力度感应器，便可在主动降噪与通透模式间切换。通透模式可以让外界声音进入，这样当你在与身边的人交谈时，一切听起来、感觉起来都会很自然。'
             textshowdom.style.top=String(400-(scrollTop-6600)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(-400px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<6700){
                 textshowdom.style.opacity=String(0+(scrollTop-6600)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-6700)*0.002)
        }
        else if(scrollTop>=7800&&scrollTop<8200){
            //  textshowdom.innerHTML='想听到周围的声音？只需长按耳机柄上的力度感应器，便可在主动降噪与通透模式间切换。通透模式可以让外界声音进入，这样当你在与身边的人交谈时，一切听起来、感觉起来都会很自然。'
            //  textshowdom.style.top=String(400-(scrollTop-6600)*0.1)+'px'
            //  textshowdom.style.fontSize='1.567vw'
            //  textshowdom.style.transform='translate(-400px,0)'
            //  textshowdom.style.width='400px'

             if(scrollTop<8000){
                 this.imgdom.style.opacity=String(1-(scrollTop-7800)*0.002)
             }
             this.imgdom.style.opacity=String(0+(scrollTop-8000)*0.01)
        }
        else if(scrollTop>=8300&&scrollTop<8800){
             textshowdom.innerHTML='自适应播放功能能根据你的耳朵自行调节进行播放，带来细腻的听音体验，让你尽显非凡音质。'
             textshowdom.style.top=String(500-(scrollTop-8300)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(100px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(0,0,0)'
             if(scrollTop<8400){
                 textshowdom.style.opacity=String(0+(scrollTop-8300)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-8400)*0.004)
        }
        else if(scrollTop>=8800&&scrollTop<9300){
             textshowdom.innerHTML='使用力度感应器能方便地控制音乐和通话，还可在主动降噪与通透模式间切换。你也可按住 iPhone 控制中心的音量滑块，再进行模式切换。'
             textshowdom.style.top=String(500-(scrollTop-8800)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(100px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(0,0,0)'
             if(scrollTop<8900){
                 textshowdom.style.opacity=String(0+(scrollTop-8800)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-8900)*0.004)
        }
        else if(scrollTop>=9400&&scrollTop<9900){
             textshowdom.innerHTML='AirPods Pro 抗汗抗水1，能时刻紧跟你的运动节奏。而通过扩大麦克风网状声孔，也提升了有风环境下的通话清晰度。'
             textshowdom.style.top=String(250-(scrollTop-9400)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(-500px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(0,0,0)'
             if(scrollTop<9500){
                 textshowdom.style.opacity=String(0+(scrollTop-9400)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-9500)*0.004)
        }
        else if(scrollTop>=9400&&scrollTop<9900){
             textshowdom.innerHTML='AirPods Pro 抗汗抗水1，能时刻紧跟你的运动节奏。而通过扩大麦克风网状声孔，也提升了有风环境下的通话清晰度。'
             textshowdom.style.top=String(250-(scrollTop-9400)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(-500px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(0,0,0)'
             if(scrollTop<9500){
                 textshowdom.style.opacity=String(0+(scrollTop-9400)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-9500)*0.004)
        }
        else if(scrollTop>=9400&&scrollTop<9900){
             textshowdom.innerHTML='AirPods Pro 抗汗抗水1，能时刻紧跟你的运动节奏。而通过扩大麦克风网状声孔，也提升了有风环境下的通话清晰度。'
             textshowdom.style.top=String(250-(scrollTop-9400)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(-500px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(0,0,0)'
             if(scrollTop<9500){
                 textshowdom.style.opacity=String(0+(scrollTop-9400)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-9500)*0.004)
        }
        else if(scrollTop>=10000&&scrollTop<10300){
             textshowdom.innerHTML='充电无限，<br> 放电不倦'
             textshowdom.style.top=String(300-(scrollTop-10000)*0.1)+'px'
             textshowdom.style.fontSize='5.567vw'
             textshowdom.style.transform='translate(-50%,0)'
             textshowdom.style.width='auto'
             textshowdom.style.color='rgb(255,255,255)'
             if(scrollTop<10100){
                 textshowdom.style.opacity=String(0+(scrollTop-10000)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-10100)*0.005)
        }

        else if(scrollTop>=10500&&scrollTop<11000){
             textshowdom.innerHTML='超过<br> 24小时 <br>使用充电盒额外充电的总时间<br><br> 最长可达<br> 4.5小时<br> 单次充电的聆听时间<br><br>大约1小时<br>仅充电 5 分钟的聆听时间'
             textshowdom.style.top=String(300-(scrollTop-10500)*0.1)+'px'
             textshowdom.style.fontSize='1.567vw'
             textshowdom.style.transform='translate(-550px,0)'
             textshowdom.style.width='400px'
             textshowdom.style.color='rgb(255,255,255)'
             textshowdom.style.textAlign='left'
             if(scrollTop<10700){
                 textshowdom.style.opacity=String(0+(scrollTop-10500)*0.01)
             }
             textshowdom.style.opacity=String(1-(scrollTop-10700)*0.005)
        }
        else{
            textshowdom.style.top=String(340-scrollTop*0.8)+'px'
            textshowdom.style.fontSize='6.067vw'
            textshowdom.innerHTML='AirPods Pro'
            textshowdom.style.opacity='1'
            textshowdom.style.color='rgb(255,255,255)'
            this.imgdom.style.opacity='1'

        }






            if(scrollTop<0){
                // 
                this.imgdom.src=require('./imgs/first/1.jpg')
                return
            }
            if(scrollTop<40){
                // this.imgdom.src='url("./imgs/first/1.jpg")'
                this.imgdom.src=require('./imgs/first/2.jpg')
                return
            }
            if(scrollTop<80){
                this.imgdom.src=require('./imgs/first/3.jpg')
                return
            }
            if(scrollTop<120){
                this.imgdom.src=require('./imgs/first/4.jpg')
                return
            }
            if(scrollTop<160){
                this.imgdom.src=require('./imgs/first/5.jpg')
                return
            }
            if(scrollTop<200){
                this.imgdom.src=require('./imgs/first/6.jpg')
                return
            }
            if(scrollTop<240){
                this.imgdom.src=require('./imgs/first/7.jpg')
                return
            }
            if(scrollTop<280){
                this.imgdom.src=require('./imgs/first/8.jpg')
                return
            }
            if(scrollTop<320){
                this.imgdom.src=require('./imgs/first/9.jpg')
                return
            }
            if(scrollTop<360){
                this.imgdom.src=require('./imgs/first/10.jpg')
                return
            }
            if(scrollTop<400){
                this.imgdom.src=require('./imgs/first/11.jpg')
                return
            }
            if(scrollTop<440){
                this.imgdom.src=require('./imgs/first/12.jpg')
                return
            }
            if(scrollTop<480){
                this.imgdom.src=require('./imgs/first/13.jpg')
                return
            }
            if(scrollTop<520){
                this.imgdom.src=require('./imgs/first/14.jpg')
                return
            }
            if(scrollTop<560){
                this.imgdom.src=require('./imgs/first/15.jpg')
                return
            }

            if(scrollTop<600){
                this.imgdom.src=require('./imgs/first/15.jpg')
                return
            }
            if(scrollTop<640){
                this.imgdom.src=require('./imgs/first/14.jpg')
                return
            }
            if(scrollTop<680){
                this.imgdom.src=require('./imgs/first/13.jpg')
                return
            }
            if(scrollTop<720){
                this.imgdom.src=require('./imgs/first/12.jpg')
                return
            }
            if(scrollTop<760){
                this.imgdom.src=require('./imgs/first/11.jpg')
                return
            }
            if(scrollTop<800){
                this.imgdom.src=require('./imgs/first/10.jpg')
                return
            }
            if(scrollTop<840){
                this.imgdom.src=require('./imgs/first/9.jpg')
                return
            }
            if(scrollTop<880){
                this.imgdom.src=require('./imgs/first/8.jpg')
                return
            }
            if(scrollTop<920){
                this.imgdom.src=require('./imgs/first/7.jpg')
                return
            }
            if(scrollTop<960){
                this.imgdom.src=require('./imgs/first/6.jpg')
                return
            }
            if(scrollTop<1000){
                this.imgdom.src=require('./imgs/first/5.jpg')
                return
            }
            if(scrollTop<1040){
                this.imgdom.src=require('./imgs/first/4.jpg')
                return
            }
            if(scrollTop<1080){
                this.imgdom.src=require('./imgs/first/3.jpg')
                return
            }
            if(scrollTop<1120){
                this.imgdom.src=require('./imgs/first/2.jpg')
                return
            }
            if(scrollTop<1160){
                this.imgdom.src=require('./imgs/first/1.jpg')
                return
            }
            if(scrollTop<1230){
                this.imgdom.src=require('./imgs/first/16.jpg')
                return
            }
            if(scrollTop<1280){
                this.imgdom.src=require('./imgs/first/17.jpg')
                return
            }
            if(scrollTop<1330){
                this.imgdom.src=require('./imgs/first/18.jpg')
                return
            }
            if(scrollTop<1390){
                this.imgdom.src=require('./imgs/first/19.jpg')
                return
            }






// 第二部分
            if (scrollTop<1600) {
                this.imgdom.src=require('./imgs/second/1.jpg')
                return
            }
            if (scrollTop<1640) {
                this.imgdom.src=require('./imgs/second/2.jpg')
                return
            }
            if (scrollTop<1680) {
                this.imgdom.src=require('./imgs/second/3.jpg')
                return
            }
            if (scrollTop<1720) {
                this.imgdom.src=require('./imgs/second/4.jpg')
                return
            }
            if (scrollTop<1760) {
                this.imgdom.src=require('./imgs/second/5.jpg')
                return
            }
            if (scrollTop<1800) {
                this.imgdom.src=require('./imgs/second/6.jpg')
                return
            }
             if (scrollTop<1840) {
                this.imgdom.src=require('./imgs/second/7.jpg')
                return
            }
            if (scrollTop<1880) {
                this.imgdom.src=require('./imgs/second/8.jpg')
                return
            }
            if (scrollTop<1920) {
                this.imgdom.src=require('./imgs/second/9.jpg')
                return
            }
            if (scrollTop<1960) {
                this.imgdom.src=require('./imgs/second/10.jpg')
                return
            }
            if (scrollTop<2000) {
                this.imgdom.src=require('./imgs/second/11.jpg')
                return
            }
            if (scrollTop<2040) {
                this.imgdom.src=require('./imgs/second/12.jpg')
                return
            }
             if (scrollTop<2080) {
                this.imgdom.src=require('./imgs/second/13.jpg')
                return
            }
            if (scrollTop<2120) {
                this.imgdom.src=require('./imgs/second/14.jpg')
                return
            }
            if (scrollTop<2140) {
                this.imgdom.src=require('./imgs/second/15.jpg')
                return
            }
            if (scrollTop<2180) {
                this.imgdom.src=require('./imgs/second/16.jpg')
                return
            }
            if (scrollTop<2220) {
                this.imgdom.src=require('./imgs/second/17.jpg')
                return
            }
            if (scrollTop<2260) {
                this.imgdom.src=require('./imgs/second/18.jpg')
                return
            }
             if (scrollTop<2300) {
                this.imgdom.src=require('./imgs/second/19.jpg')
                return
            }
            if (scrollTop<2340) {
                this.imgdom.src=require('./imgs/second/20.jpg')
                return
            }
            if (scrollTop<2380) {
                this.imgdom.src=require('./imgs/second/21.jpg')
                return
            }
            if (scrollTop<2420) {
                this.imgdom.src=require('./imgs/second/22.jpg')
                return
            }
            if (scrollTop<2460) {
                this.imgdom.src=require('./imgs/second/23.jpg')
                return
            }
            if (scrollTop<2500) {
                this.imgdom.src=require('./imgs/second/24.jpg')
                return
            }
             if (scrollTop<2540) {
                this.imgdom.src=require('./imgs/second/25.jpg')
                return
            }
            if (scrollTop<2580) {
                this.imgdom.src=require('./imgs/second/26.jpg')
                return
            }
            if (scrollTop<2620) {
                this.imgdom.src=require('./imgs/second/27.jpg')
                return
            }
            if (scrollTop<2660) {
                this.imgdom.src=require('./imgs/second/28.jpg')
                return
            }
            if (scrollTop<2700) {
                this.imgdom.src=require('./imgs/second/29.jpg')
                return
            }
            if (scrollTop<2740) {
                this.imgdom.src=require('./imgs/second/30.jpg')
                return
            }
             if (scrollTop<2780) {
                this.imgdom.src=require('./imgs/second/31.jpg')
                return
            }
            if (scrollTop<2820) {
                this.imgdom.src=require('./imgs/second/32.jpg')
                return
            }
            if (scrollTop<2860) {
                this.imgdom.src=require('./imgs/second/33.jpg')
                return
            }
            if (scrollTop<2900) {
                this.imgdom.src=require('./imgs/second/34.jpg')
                return
            }
            if (scrollTop<2940) {
                this.imgdom.src=require('./imgs/second/35.jpg')
                return
            }
            if (scrollTop<2980) {
                this.imgdom.src=require('./imgs/second/36.jpg')
                return
            }
             if (scrollTop<3020) {
                this.imgdom.src=require('./imgs/second/37.jpg')
                return
             }
             if (scrollTop<3060) {
                this.imgdom.src=require('./imgs/second/38.jpg')
                return
            }
            if (scrollTop<3120) {
                this.imgdom.src=require('./imgs/second/39.jpg')
                return
            }
             if (scrollTop<3160) {
                this.imgdom.src=require('./imgs/second/40.jpg')
                return
             }
             if (scrollTop<3200) {
                this.imgdom.src=require('./imgs/second/41.jpg')
                return
            }
            if (scrollTop<3250) {
                this.imgdom.src=require('./imgs/second/42.jpg')
                return
            }
             if (scrollTop<3300) {
                this.imgdom.src=require('./imgs/second/43.jpg')
                return
             }
             if (scrollTop<3350) {
                this.imgdom.src=require('./imgs/second/44.jpg')
                return
            }
            if (scrollTop<3400) {
                this.imgdom.src=require('./imgs/second/45.jpg')
                return
            }
             if (scrollTop<3450) {
                this.imgdom.src=require('./imgs/second/46.jpg')
                return
             }
             if (scrollTop<3500) {
                this.imgdom.src=require('./imgs/second/47.jpg')
                return
            }
             if (scrollTop<3550) {
                this.imgdom.src=require('./imgs/second/48.jpg')
                return
             }


             if (scrollTop<3600) {
                this.imgdom.src=require('./imgs/second/49.jpg')
                return
            }
             if (scrollTop<3650) {
                this.imgdom.src=require('./imgs/second/50.jpg')
                return
            }
            if (scrollTop<3700) {
                this.imgdom.src=require('./imgs/second/51.jpg')
                return
            }
            if (scrollTop<3750) {
                this.imgdom.src=require('./imgs/second/52.jpg')
                return
            }
            if (scrollTop<3800) {
                this.imgdom.src=require('./imgs/second/53.jpg')
                return
            }
            if (scrollTop<3850) {
                this.imgdom.src=require('./imgs/second/54.jpg')
                return
            }
            if (scrollTop<3900) {
                this.imgdom.src=require('./imgs/second/55.jpg')
                return
            }
             if (scrollTop<3950) {
                this.imgdom.src=require('./imgs/second/56.jpg')
                return
             }
             if (scrollTop<4000) {
                this.imgdom.src=require('./imgs/second/57.jpg')
                return
            }
            if (scrollTop<4050) {
                this.imgdom.src=require('./imgs/second/58.jpg')
                return
            }
             if (scrollTop<4100) {
                this.imgdom.src=require('./imgs/second/59.jpg')
                return
             }
             if (scrollTop<4150) {
                this.imgdom.src=require('./imgs/second/60.jpg')
                return
            }
            if (scrollTop<4200) {
                this.imgdom.src=require('./imgs/second/61.jpg')
                return
            }
             if (scrollTop<4250) {
                this.imgdom.src=require('./imgs/second/62.jpg')
                return
             }
             if (scrollTop<4300) {
                this.imgdom.src=require('./imgs/second/63.jpg')
                return
            }
            if (scrollTop<4400) {
                this.imgdom.src=require('./imgs/second/64.jpg')
                return
            }
             if (scrollTop<4450) {
                this.imgdom.src=require('./imgs/second/65.jpg')
                return
             }
             if (scrollTop<4500) {
                this.imgdom.src=require('./imgs/second/66.jpg')
                return
            }
             if (scrollTop<4550) {
                this.imgdom.src=require('./imgs/second/67.jpg')
                return
             }
             if (scrollTop<4600) {
                this.imgdom.src=require('./imgs/second/68.jpg')
                return
            }
            if (scrollTop<4650) {
                this.imgdom.src=require('./imgs/second/69.jpg')
                return
             }
             if (scrollTop<4700) {
                this.imgdom.src=require('./imgs/second/70.jpg')
                return
            }
            if (scrollTop<4750) {
                this.imgdom.src=require('./imgs/second/71.jpg')
                return
             }
             if (scrollTop<4800) {
                this.imgdom.src=require('./imgs/second/72.jpg')
                return
            }
            if (scrollTop<4850) {
                this.imgdom.src=require('./imgs/second/73.jpg')
                return
             }
             if (scrollTop<4900) {
                this.imgdom.src=require('./imgs/second/74.jpg')
                return
            }
            if (scrollTop<4950) {
                this.imgdom.src=require('./imgs/second/75.jpg')
                return
             }
             if (scrollTop<5000) {
                this.imgdom.src=require('./imgs/second/76.jpg')
                return
            }
            if (scrollTop<5150) {
                this.imgdom.src=require('./imgs/second/77.jpg')
                return
             }
             if (scrollTop<5200) {
                this.imgdom.src=require('./imgs/second/78.jpg')
                return
            }
            if (scrollTop<5250) {
                this.imgdom.src=require('./imgs/second/79.jpg')
                return
             }
             if (scrollTop<5300) {
                this.imgdom.src=require('./imgs/second/80.jpg')
                return
            }
            if (scrollTop<5350) {
                this.imgdom.src=require('./imgs/second/81.jpg')
                return
             }
             if (scrollTop<5400) {
                this.imgdom.src=require('./imgs/second/82.jpg')
                return
            }
            if (scrollTop<5450) {
                this.imgdom.src=require('./imgs/second/83.jpg')
                return
             }
             if (scrollTop<5500) {
                this.imgdom.src=require('./imgs/second/84.jpg')
                return
            }
            if (scrollTop<5550) {
                this.imgdom.src=require('./imgs/second/85.jpg')
                return
             }
             if (scrollTop<5600) {
                this.imgdom.src=require('./imgs/second/86.jpg')
                return
            }
            if (scrollTop<5750) {
                this.imgdom.src=require('./imgs/second/87.jpg')
                return
             }
             if (scrollTop<5800) {
                this.imgdom.src=require('./imgs/second/88.jpg')
                return
            }
            if (scrollTop<5850) {
                this.imgdom.src=require('./imgs/second/89.jpg')
                return
             }
             if (scrollTop<5900) {
                this.imgdom.src=require('./imgs/second/90.jpg')
                return
            }
            if (scrollTop<5950) {
                this.imgdom.src=require('./imgs/second/91.jpg')
                return
             }
             if (scrollTop<6000) {
                this.imgdom.src=require('./imgs/second/92.jpg')
                return
            }
            if (scrollTop<6050) {
                this.imgdom.src=require('./imgs/second/93.jpg')
                return
             }
             if (scrollTop<6100) {
                this.imgdom.src=require('./imgs/second/94.jpg')
                return
            }
//第三部分 
            if (scrollTop<6200) {
                    this.imgdom.src=require('./imgs/third/1.jpg')
                    return
                } 
            if (scrollTop<6250) {
                this.imgdom.src=require('./imgs/third/2.jpg')
                return
            } 
            if (scrollTop<6300) {
                this.imgdom.src=require('./imgs/third/3.jpg')
                return
            } 
            if (scrollTop<6350) {
                this.imgdom.src=require('./imgs/third/4.jpg')
                return
            } 
            if (scrollTop<6400) {
                    this.imgdom.src=require('./imgs/third/5.jpg')
                    return
                } 
            if (scrollTop<6450) {
                this.imgdom.src=require('./imgs/third/6.jpg')
                return
            } 
            if (scrollTop<6500) {
                this.imgdom.src=require('./imgs/third/7.jpg')
                return
            } 
            if (scrollTop<6550) {
                this.imgdom.src=require('./imgs/third/8.jpg')
                return
            } 
            if (scrollTop<6600) {
                    this.imgdom.src=require('./imgs/third/9.jpg')
                    return
                } 
            if (scrollTop<6650) {
                this.imgdom.src=require('./imgs/third/10.jpg')
                return
            } 
            if (scrollTop<6700) {
                this.imgdom.src=require('./imgs/third/11.jpg')
                return
            } 
            if (scrollTop<6750) {
                this.imgdom.src=require('./imgs/third/12.jpg')
                return
            } 
            if (scrollTop<6800) {
                    this.imgdom.src=require('./imgs/third/13.jpg')
                    return
                } 
            if (scrollTop<6850) {
                this.imgdom.src=require('./imgs/third/14.jpg')
                return
            } 
            if (scrollTop<6900) {
                this.imgdom.src=require('./imgs/third/15.jpg')
                return
            } 
            if (scrollTop<6950) {
                this.imgdom.src=require('./imgs/third/16.jpg')
                return
            } 
            if (scrollTop<7000) {
                    this.imgdom.src=require('./imgs/third/17.jpg')
                    return
                } 
            if (scrollTop<7050) {
                this.imgdom.src=require('./imgs/third/18.jpg')
                return
            } 
            if (scrollTop<7100) {
                this.imgdom.src=require('./imgs/third/19.jpg')
                return
            } 
            if (scrollTop<7150) {
                this.imgdom.src=require('./imgs/third/20.jpg')
                return
            } 
            if (scrollTop<7200) {
                    this.imgdom.src=require('./imgs/third/21.jpg')
                    return
                } 
            if (scrollTop<7250) {
                this.imgdom.src=require('./imgs/third/22.jpg')
                return
            } 
            if (scrollTop<7300) {
                this.imgdom.src=require('./imgs/third/23.jpg')
                return
            } 
            if (scrollTop<7350) {
                this.imgdom.src=require('./imgs/third/24.jpg')
                return
            } 
            if (scrollTop<7400) {
                    this.imgdom.src=require('./imgs/third/25.jpg')
                    return
                } 
            if (scrollTop<7450) {
                this.imgdom.src=require('./imgs/third/26.jpg')
                return
            } 
            if (scrollTop<7500) {
                this.imgdom.src=require('./imgs/third/27.jpg')
                return
            } 
            if (scrollTop<7550) {
                this.imgdom.src=require('./imgs/third/28.jpg')
                return
            } 
            if (scrollTop<7600) {
                    this.imgdom.src=require('./imgs/third/29.jpg')
                    return
                } 
            if (scrollTop<7650) {
                this.imgdom.src=require('./imgs/third/30.jpg')
                return
            } 
            if (scrollTop<7700) {
                this.imgdom.src=require('./imgs/third/31.jpg')
                return
            } 
            if (scrollTop<7750) {
                this.imgdom.src=require('./imgs/third/32.jpg')
                return
            } 
            if (scrollTop<7800) {
                    this.imgdom.src=require('./imgs/third/33.jpg')
                    return
                } 
            if (scrollTop<7850) {
                this.imgdom.src=require('./imgs/third/34.jpg')
                return
            } 
// 第四部分
            if (scrollTop<8300) {
                this.imgdom.src=require('./imgs/forth/1.jpg')
                return
            } 
            if (scrollTop<8350) {
                this.imgdom.src=require('./imgs/forth/2.jpg')
                return
            } 
            if (scrollTop<8430) {
                this.imgdom.src=require('./imgs/forth/3.jpg')
                return
            } 
            if (scrollTop<8400) {
                this.imgdom.src=require('./imgs/forth/4.jpg')
                return
            } 
            if (scrollTop<8470) {
                this.imgdom.src=require('./imgs/forth/5.jpg')
                return
            } 
            if (scrollTop<8540) {
                this.imgdom.src=require('./imgs/forth/6.jpg')
                return
            } 
            if (scrollTop<8610) {
                this.imgdom.src=require('./imgs/forth/7.jpg')
                return
            } 
            if (scrollTop<8690) {
                this.imgdom.src=require('./imgs/forth/8.jpg')
                return
            } 

            if (scrollTop<8470) {
                this.imgdom.src=require('./imgs/forth/9.jpg')
                return
            } 
            if (scrollTop<8540) {
                this.imgdom.src=require('./imgs/forth/10.jpg')
                return
            } 
            if (scrollTop<8610) {
                this.imgdom.src=require('./imgs/forth/11.jpg')
                return
            } 
            if (scrollTop<8690) {
                this.imgdom.src=require('./imgs/forth/12.jpg')
                return
            } 
            
            if (scrollTop<8470) {
                this.imgdom.src=require('./imgs/forth/13.jpg')
                return
            } 
            if (scrollTop<8540) {
                this.imgdom.src=require('./imgs/forth/14.jpg')
                return
            } 
            if (scrollTop<8610) {
                this.imgdom.src=require('./imgs/forth/15.jpg')
                return
            } 
            if (scrollTop<8690) {
                this.imgdom.src=require('./imgs/forth/16.jpg')
                return
            } 
            
            if (scrollTop<8470) {
                this.imgdom.src=require('./imgs/forth/17.jpg')
                return
            } 
            if (scrollTop<8540) {
                this.imgdom.src=require('./imgs/forth/18.jpg')
                return
            } 
            if (scrollTop<8610) {
                this.imgdom.src=require('./imgs/forth/19.jpg')
                return
            } 
            if (scrollTop<8690) {
                this.imgdom.src=require('./imgs/forth/20.jpg')
                return
            } 
            
            if (scrollTop<8470) {
                this.imgdom.src=require('./imgs/forth/21.jpg')
                return
            } 
            if (scrollTop<8540) {
                this.imgdom.src=require('./imgs/forth/22.jpg')
                return
            } 
            if (scrollTop<8610) {
                this.imgdom.src=require('./imgs/forth/23.jpg')
                return
            } 
            if (scrollTop<8690) {
                this.imgdom.src=require('./imgs/forth/24.jpg')
                return
            } 
            
            if (scrollTop<8470) {
                this.imgdom.src=require('./imgs/forth/25.jpg')
                return
            } 
            if (scrollTop<8540) {
                this.imgdom.src=require('./imgs/forth/26.jpg')
                return
            } 
            if (scrollTop<8610) {
                this.imgdom.src=require('./imgs/forth/27.jpg')
                return
            } 
            if (scrollTop<8690) {
                this.imgdom.src=require('./imgs/forth/28.jpg')
                return
            } 
            if (scrollTop<8750) {
                this.imgdom.src=require('./imgs/forth/29.jpg')
                return
            } 
            if (scrollTop<8800) {
                this.imgdom.src=require('./imgs/forth/30.jpg')
                return
            } 
            if (scrollTop<8850) {
                this.imgdom.src=require('./imgs/forth/31.jpg')
                return
            } 
            if (scrollTop<8900) {
                this.imgdom.src=require('./imgs/forth/32.jpg')
                return
            } 
            if (scrollTop<8950) {
                this.imgdom.src=require('./imgs/forth/33.jpg')
                return
            } 
            if (scrollTop<9000) {
                this.imgdom.src=require('./imgs/forth/34.jpg')
                return
            } 
            if (scrollTop<9050) {
                this.imgdom.src=require('./imgs/forth/35.jpg')
                return
            } 
            if (scrollTop<9100) {
                this.imgdom.src=require('./imgs/forth/36.jpg')
                return
            } 
            if (scrollTop<9150) {
                this.imgdom.src=require('./imgs/forth/37.jpg')
                return
            } 
            if (scrollTop<9200) {
                this.imgdom.src=require('./imgs/forth/38.jpg')
                return
            } 
            if (scrollTop<9250) {
                this.imgdom.src=require('./imgs/forth/39.jpg')
                return
            } 
            if (scrollTop<9300) {
                this.imgdom.src=require('./imgs/forth/40.jpg')
                return
            } 
            if (scrollTop<9350) {
                this.imgdom.src=require('./imgs/forth/41.jpg')
                return
            } 
            if (scrollTop<9400) {
                this.imgdom.src=require('./imgs/forth/42.jpg')
                return
            } 
            if (scrollTop<9450) {
                this.imgdom.src=require('./imgs/forth/43.jpg')
                return
            } 
            if (scrollTop<9500) {
                this.imgdom.src=require('./imgs/forth/44.jpg')
                return
            } 
            if (scrollTop<9550) {
                this.imgdom.src=require('./imgs/forth/45.jpg')
                return
            } 
            if (scrollTop<9600) {
                this.imgdom.src=require('./imgs/forth/46.jpg')
                return
            } 
// 第五部分
            if (scrollTop<9650) {
                this.imgdom.src=require('./imgs/fifth/1.jpg')
                return
            } 
            if (scrollTop<9700) {
                this.imgdom.src=require('./imgs/fifth/2.jpg')
                return
            } 
            if (scrollTop<9750) {
                this.imgdom.src=require('./imgs/fifth/3.jpg')
                return
            } 
            if (scrollTop<9800) {
                this.imgdom.src=require('./imgs/fifth/4.jpg')
                return
            } 
            if (scrollTop<9850) {
                this.imgdom.src=require('./imgs/fifth/5.jpg')
                return
            } 
            if (scrollTop<9900) {
                this.imgdom.src=require('./imgs/fifth/6.jpg')
                return
            } 
            if (scrollTop<9950) {
                this.imgdom.src=require('./imgs/fifth/7.jpg')
                return
            } 
            if (scrollTop<10000) {
                this.imgdom.src=require('./imgs/fifth/8.jpg')
                return
            } 
            if (scrollTop<10050) {
                this.imgdom.src=require('./imgs/fifth/9.jpg')
                return
            } 
            if (scrollTop<10100) {
                this.imgdom.src=require('./imgs/fifth/10.jpg')
                return
            } 
            if (scrollTop<10150) {
                this.imgdom.src=require('./imgs/fifth/11.jpg')
                return
            } 
            if (scrollTop<10200) {
                this.imgdom.src=require('./imgs/fifth/12.jpg')
                return
            } 
            if (scrollTop<10250) {
                this.imgdom.src=require('./imgs/fifth/13.jpg')
                return
            } 
            if (scrollTop<10300) {
                this.imgdom.src=require('./imgs/fifth/14.jpg')
                return
            } 
            if (scrollTop<10350) {
                this.imgdom.src=require('./imgs/fifth/15.jpg')
                return
            } 
            if (scrollTop<10400) {
                this.imgdom.src=require('./imgs/fifth/16.jpg')
                return
            } 
            if (scrollTop<10450) {
                this.imgdom.src=require('./imgs/fifth/17.jpg')
                return
            } 
            if (scrollTop<10500) {
                this.imgdom.src=require('./imgs/fifth/18.jpg')
                return
            } 
            if (scrollTop<10550) {
                this.imgdom.src=require('./imgs/fifth/19.jpg')
                return
            } 
            if (scrollTop<10600) {
                this.imgdom.src=require('./imgs/fifth/20.jpg')
                return
            }
            if (scrollTop<10650) {
                this.imgdom.src=require('./imgs/fifth/21.jpg')
                return
            } 
            if (scrollTop<10700) {
                this.imgdom.src=require('./imgs/fifth/22.jpg')
                return
            } 
            if (scrollTop<10750) {
                this.imgdom.src=require('./imgs/fifth/23.jpg')
                return
            } 
            if (scrollTop<10800) {
                this.imgdom.src=require('./imgs/fifth/24.jpg')
                return
            } 
            if (scrollTop<10850) {
                this.imgdom.src=require('./imgs/fifth/25.jpg')
                return
            } 
            if (scrollTop<10900) {
                this.imgdom.src=require('./imgs/fifth/26.jpg')
                return
            } 
            if (scrollTop<10950) {
                this.imgdom.src=require('./imgs/fifth/27.jpg')
                return
            } 
            if (scrollTop<11000) {
                this.imgdom.src=require('./imgs/fifth/28.jpg')
                return
            } 
            if (scrollTop<11050) {
                this.imgdom.src=require('./imgs/fifth/29.jpg')
                return
            } 
            if (scrollTop<11100) {
                this.imgdom.src=require('./imgs/fifth/30.jpg')
                return
            }
            if (scrollTop<11150) {
                this.imgdom.src=require('./imgs/fifth/31.jpg')
                return
            } 
            if (scrollTop<11200) {
                this.imgdom.src=require('./imgs/fifth/32.jpg')
                return
            }
        }
    },
    created() {
        window.addEventListener('scroll',this._scrollbehavoir)
    },
    // 这里要解除window绑定的事件
    beforeDestroy() {
        window.removeEventListener('scroll',this._scrollbehavoir)
        console.log('已经移除scroll绑定事件')
    },
}
</script>

<style lang="less" scoped>
.navbecomefixed{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}



@media only screen and (min-width: 800px){
    .dynamicbecomefixed{
        position: fixed !important;
        top:50%;
        left:50%;
        z-index: 500;
        transform: translate(-50%,-50%);
    }
    @keyframes appear {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
        
    }
    // 让dynamic部分结束fixed定位之后，用绝对定位，bottom 为0

    .dynamicbecomeabsolute{
        position: absolute !important;
        left:50%;
        bottom: 0;
        z-index: 500;
        transform: translateX(-50%);
    }
    

    .airpodsprodetails{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: black;
        #detailsbody{
            width: 100%;
           display: flex;
            flex-direction: column;
            align-items: center;
            .over800px{
                width: 100%;
                .dynamic{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // width:500px;
                    height: 11700px;
                    width: 100%;
                    position: relative;
                    margin-bottom: 300px;
                    div{
                        width: 100%;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        position: relative;
                        #dynamicimgs{
                            margin-top: 60px;
                            width: auto;
                            height: 700px;
                        }
                        #textshow{
                            position: absolute;
                            z-index: 600;
                            left: 50%;
                            top: 300px;
                            transform: translate(-50%,-50%);
                            // height: 300px !important;
                            width: auto ;
                            color: white;
                            font-size: 6.067vw;
                            font-weight: 600;
                            animation: appear 3s;
                        }
                    }
                }
                .static{
                width: 100%;
                color: black;
                display: block;
                background-color: black;
                }
            }
            .behind800px{
                display: none;
            }
            
            }
            
    

    }
}


@media only screen and (max-width: 800px){

._airpodsprodetails{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: black;
        #detailsbody{
            width: 100%;
           display: flex;
            flex-direction: column;
            align-items: center;
            .over800px{
                display: none;
                }
            .behind800px{
                width: 100%;
                color: white;
                }
        }
    }
}
</style>