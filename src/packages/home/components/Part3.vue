<template>
  <div class="part3">
    <h3 class="title">我们为能源互联网而生，我们更懂售电</h3>
    <div class="desc">致力于推动配售电、云计算、电力大数据、区块链等新兴领域的能源智能化技术研究，助力能源企业转型升级，加速全球能源互联互通</div>
    <ul class="content">
      <li class="item" @mouseenter="handleMouseenter1" @mouseleave="handleMouseleave1">
        <img src="http://www.gaoenergy.com/images/s33bg01.png" class="item-img">
        <div class="card" ref="card1">
          <div class="card-wrapper1">
            <div class="content-a">
              <i class="iconfont">&#xe61c;</i>
              <div class="item-title">信息化建设</div>
            </div>
          </div>
          <div class="card-wrapper2">
            <div class="content-b">
              <i class="iconfont">&#xe61c;</i>
              <div class="item-title">信息化建设</div>
              <div class="item-desc1">为客户开展实施企业信息化建设</div>
              <div class="item-desc2">提升经营管理水平</div>
            </div>
          </div>
        </div>
      </li>
      <li class="item" @mouseenter="handleMouseenter2" @mouseleave="handleMouseleave2">
        <img src="http://www.gaoenergy.com/images/s33bg02.png" class="item-img">
        <div class="card" ref="card2">
          <div class="card-wrapper1">
            <div class="content-a">
              <i class="iconfont">&#xe66a;</i>
              <div class="item-title">能源数据服务</div>
            </div>
          </div>
          <div class="card-wrapper2">
            <div class="content-b">
              <i class="iconfont">&#xe66a;</i>
              <div class="item-title">能源数据服务</div>
              <div class="item-desc1">集成能源供给、消费等数据</div>
              <div class="item-desc2">提供能源数据综合服务平台</div>
            </div>
          </div>
        </div>
      </li>
      <li class="item" @mouseenter="handleMouseenter3" @mouseleave="handleMouseleave3">
        <img src="http://www.gaoenergy.com/images/s33bg03.png" class="item-img">
        <div class="card" ref="card3">
          <div class="card-wrapper1">
            <div class="content-a">
              <i class="iconfont">&#xe622;</i>
              <div class="item-title">咨询&规划</div>
            </div>
          </div>
          <div class="card-wrapper2">
            <div class="content-b">
              <i class="iconfont">&#xe622;</i>
              <div class="item-title">咨询&规划</div>
              <div class="item-desc1">售电公司发展模式与战略规划分析</div>
              <div class="item-desc2">关键业务设计与咨询</div>
            </div>
          </div>
        </div>
      </li>
      <li class="item" @mouseenter="handleMouseenter4" @mouseleave="handleMouseleave4">
        <img src="http://www.gaoenergy.com/images/s33bg04.png" class="item-img">
        <div class="card" ref="card4">
          <div class="card-wrapper1">
            <div class="content-a">
              <i class="iconfont">&#xe61f;</i>
              <div class="item-title">产业联合</div>
            </div>
          </div>
          <div class="card-wrapper2">
            <div class="content-b">
              <i class="iconfont">&#xe61f;</i>
              <div class="item-title">产业联合</div>
              <div class="item-desc1">客户和合作伙伴并重</div>
              <div class="item-desc2">共同打造能源互联网生态圈</div>
            </div>
          </div>
        </div>
      </li>
      <li class="item" @mouseenter="handleMouseenter5" @mouseleave="handleMouseleave5">
        <img src="http://www.gaoenergy.com/images/s33bg05.png" class="item-img">
        <div class="card" ref="card5">
            <div class="card-wrapper1">
              <div class="content-a">
                <i class="iconfont">&#xe620;</i>
                <div class="item-title">课题研究</div>
              </div>
            </div>
            <div class="card-wrapper2">
              <div class="content-b">
                <i class="iconfont">&#xe620;</i>
                <div class="item-title">课题研究</div>
                <div class="item-desc1">汇集行业专家 开展能源互联网等</div>
                <div class="item-desc2">国家战略下的课题研究</div>
              </div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomePart3",
    data(){
      return{
        timer1:null,
        timer2:null,
        timer3:null,
        timer4:null,
        timer5:null,
        timer6:null,
        timer7:null,
        timer8:null,
        timer9:null,
        timer10:null
      }
    },
    methods:{
      handleMouseenter1(){
        var that=this
        var target=-382
        var step=0
        clearInterval(that.timer1)
        clearInterval(that.timer2)
        that.timer1=setInterval(function () {
          step=(-392-that.$refs.card1.offsetTop)/5
          that.$refs.card1.style.top=that.$refs.card1.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card1.offsetTop<-392){
            that.$refs.card1.style.top=-392+'px'
            clearInterval(that.timer1)
          }
        },50)
      },
      handleMouseleave1(){
        var that=this
        var target=0
        var step=0
        clearInterval(that.timer1)
        clearInterval(that.timer2)
        that.timer2=setInterval(function () {
          step=(0-that.$refs.card1.offsetTop)/5
          that.$refs.card1.style.top=that.$refs.card1.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card1.offsetTop>0){
            that.$refs.card1.style.top=0+'px'
            clearInterval(that.timer2)
          }
        },50)
      },
      handleMouseenter2(){
        var that=this
        var target=-382
        var step=0
        clearInterval(that.timer3)
        clearInterval(that.timer4)
        that.timer3=setInterval(function () {
          step=(-392-that.$refs.card2.offsetTop)/5
          that.$refs.card2.style.top=that.$refs.card2.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card2.offsetTop<-392){
            that.$refs.card2.style.top=-392+'px'
            clearInterval(that.timer3)
          }
        },50)
      },
      handleMouseleave2(){
        var that=this
        var target=0
        var step=0
        clearInterval(that.timer3)
        clearInterval(that.timer4)
        that.timer4=setInterval(function () {
          step=(0-that.$refs.card2.offsetTop)/5
          that.$refs.card2.style.top=that.$refs.card2.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card2.offsetTop>0){
            that.$refs.card2.style.top=0+'px'
            clearInterval(that.timer4)
          }
        },50)
      },
      handleMouseenter3(){
        var that=this
        var target=-382
        var step=0
        clearInterval(that.timer5)
        clearInterval(that.timer6)
        that.timer5=setInterval(function () {
          step=(-392-that.$refs.card3.offsetTop)/5
          that.$refs.card3.style.top=that.$refs.card3.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card3.offsetTop<-392){
            that.$refs.card3.style.top=-392+'px'
            clearInterval(that.timer5)
          }
        },50)
      },
      handleMouseleave3(){
        var that=this
        var target=0
        var step=0
        clearInterval(that.timer5)
        clearInterval(that.timer6)
        that.timer6=setInterval(function () {
          step=(0-that.$refs.card3.offsetTop)/5
          that.$refs.card3.style.top=that.$refs.card3.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card3.offsetTop>0){
            that.$refs.card3.style.top=0+'px'
            clearInterval(that.timer6)
          }
        },50)
      },
      handleMouseenter4(){
        var that=this
        var target=-382
        var step=0
        clearInterval(that.timer7)
        clearInterval(that.timer8)
        that.timer7=setInterval(function () {
          step=(-392-that.$refs.card4.offsetTop)/5
          that.$refs.card4.style.top=that.$refs.card4.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card4.offsetTop<-392){
            that.$refs.card4.style.top=-392+'px'
            clearInterval(that.timer7)
          }
        },50)
      },
      handleMouseleave4(){
        var that=this
        var target=0
        var step=0
        clearInterval(that.timer7)
        clearInterval(that.timer8)
        that.timer8=setInterval(function () {
          step=(0-that.$refs.card4.offsetTop)/5
          that.$refs.card4.style.top=that.$refs.card4.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card4.offsetTop>0){
            that.$refs.card4.style.top=0+'px'
            clearInterval(that.timer8)
          }
        },50)
      },
      handleMouseenter5(){
        var that=this
        var target=-382
        var step=0
        clearInterval(that.timer9)
        clearInterval(that.timer10)
        that.timer9=setInterval(function () {
          step=(-392-that.$refs.card5.offsetTop)/5
          that.$refs.card5.style.top=that.$refs.card5.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card5.offsetTop<-392){
            that.$refs.card5.style.top=-392+'px'
            clearInterval(that.timer9)
          }
        },50)
      },
      handleMouseleave5(){
        var that=this
        var target=0
        var step=0
        clearInterval(that.timer9)
        clearInterval(that.timer10)
        that.timer10=setInterval(function () {
          step=(0-that.$refs.card5.offsetTop)/5
          that.$refs.card5.style.top=that.$refs.card5.offsetTop+step+'px'
          if(Math.abs(step)<=5||that.$refs.card5.offsetTop>0){
            that.$refs.card5.style.top=0+'px'
            clearInterval(that.timer10)
          }
        },50)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .part3
    width 100%
    .title
      font-family simsun
      font-size 48px
      font-weight 400
      text-align center
      padding-bottom 20px
    .desc
      font-family simsun
      font-size 18px
      font-weight 400
      text-align center
      padding-bottom 60px
    .content
      height 382px
      margin 0 20px
      overflow hidden
      .item
        position relative
        float left
        width 260px
        height 382px
        margin-right 1px
        .card
          position absolute
          text-align center
          width 260px
          height 764px
          top 0
          .card-wrapper1
            width 100%
            height 50%
            .content-a
              width 240px
              height 364px
              margin 10px 10px 0
              .iconfont
                display inline-block
                margin 25px 0
                text-align center
                font-size 60px
                color #ffffff
                margin 25px 0 30px
              .item-title
                font 400 24px microsoft
                padding-bottom 20px
                color #ffffff
          .card-wrapper2
            width 240px
            height 362px
            padding 10px
            background #319CFF
            .content-b
              /*width 240px*/
              /*height 364px*/
              width 236px
              height 360px
              border 2px solid #fff
              .iconfont
                display inline-block
                margin 25px 0
                text-align center
                font-size 60px
                color #ffffff
                margin 25px 0 30px
              .item-title
                font 400 24px microsoft
                padding-bottom 20px
                color #ffffff
              .item-desc1
                font 400px 12px microsoft
                color #ffffff
              .item-desc2
                font 400px 12px microsoft
                color #ffffff
</style>
