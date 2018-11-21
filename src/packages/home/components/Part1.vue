<template>
    <div class="part1">
      <div class="wrapper">
        <div class="header">
          <img src="http://product.gaoenergy.com/images/logo-w.png" class="header-img">
          <ul class="header-content">
            <li class="header-item"><a href="javascript:void (0)" class="header-desc selected">首页</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">PIPE生态</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc" @mouseenter="handleMouseEnter" @mouseout="handleMouseOver">产品中心</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">研究院</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">渠道招募</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">关于我们</a></li>
          </ul>
        </div>
        <div class="center"><img src="http://product.gaoenergy.com/images/s1img.png" class="center-img"></div>
        <div class="footer">
          <ul class="footer-content">
            <li class="footer-item">
              <div class="footer-img">
                <div class="img-onei">
                  <i class="iconfont icon1">&#xe612;</i>
                </div>
                <i class="iconfont icon2">&#xe634;</i>
              </div>
              <div class="item-title">售电云</div>
              <div class="item-desc">搭建售电经营管理平台</div>
            </li>
            <li class="footer-item">
              <div class="footer-img">
                <div class="img-onei">
                  <i class="iconfont icon1">&#xe613;</i>
                </div>
                <i class="iconfont icon2">&#xe615;</i>
              </div>
              <div class="item-title">能效云</div>
              <div class="item-desc">用户能效管理及增值服务</div>
            </li>
            <li class="footer-item">
              <div class="footer-img">
                <div class="img-onei">
                  <i class="icon1 iconfont">&#xe614;</i>
                </div>
                <i class="icon2 iconfont">&#xe600;</i>
              </div>
              <div class="item-title">交易云</div>
              <div class="item-desc">交易策略及辅助决策</div>
            </li>
          </ul>
        </div>
        <ul class="cloud" ref="dom1">
          <li class="cloud-item"><a href="#" class="cloud-desc">售电云</a></li>
          <li class="cloud-item"><a href="#" class="cloud-desc">能效云</a></li>
          <li class="cloud-item"><a href="#" class="cloud-desc">交易云</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomePart1",
        methods:{
          handleMouseEnter(){
            this.$refs.dom1.style.display="block"
          },
          handleMouseOver(){
            this.$refs.dom1.style.display="none"
          }
        }
    }
</script>

<style scoped lang="stylus">
  .part1
    height 632px
    background url("http://product.gaoenergy.com/images/index-banner.png") no-repeat
    .wrapper
      position relative
      height 632px
      width 1200px
      margin 0 auto
      .header
        height 72px
        width 100%
        line-height 72px
        .header-img
          height 40px
          width 116px
          cursor pointer
        .header-content
          float right
          height 72px
          .header-item
            float left
            margin-left 65px
            .header-desc
              display inline-block
              padding 26px 2px 19px
              font 400 18px microsoft
              color #ffffff
            .header-desc:hover
              color #00cc99
            .selected
              color #00cc99
      .center
        position relative
        width 100%
        height 237px
        margin-top 80px
        .center-img
          position absolute
          width 527px
          height 234px
          left 600px
          margin-left -265px
      .footer
        height 208px
        width 1200px
        .footer-content
          height 208px
          width 1200px
          .footer-item
            float left
            height 100%
            width 33.3%
            .footer-img
              position relative
              height 114px
              width 96px
              text-align center
              line-height 114px
              margin 0 auto
              cursor pointer
              .img-onei
                height 114px
                width 96px
                .icon1
                  font-size 83px
                  color #ffffff
              /*.img-onei:link
                transition 0.8s ease-in
              .img-onei:hover
                transform rotate(45deg)
                transition 0.8s ease-out
                color: #32F9c78*/
              .icon2
                position absolute
                font-size 28px
                top 0
                left 35px
                color #ffffff
            .footer-img:link
              .img-onei
                -webkit-transition: 0.8s ease-out
                -moz-transition: 0.8s ease-out
                -ms-transition: 0.8s ease-out
                -o-transition: 0.8s ease-out
                transition: 0.8s ease-out
            .footer-img:hover
              .img-onei
                -webkit-transition: 0.8s ease-out
                -moz-transition: 0.8s ease-out
                -ms-transition: 0.8s ease-out
                -o-transition: 0.8s ease-out
                transition: 0.8s ease-out
                -webkit-transform: rotate(45deg)
                -moz-transform: rotate(45deg)
                -ms-transform: rotate(45deg)
                -o-transform: rotate(45deg)
                transform: rotate(45deg)
                .icon1
                  color: #32F9c7
              .icon2
                color: #32F9c7
            .item-title
              padding 5px 0 10px
              text-align center
              font-size 36px
              font-weight 700
              color #ffffff
              cursor pointer
            .item-desc
              font-size 18px
              font-weight 400
              text-align center
              color #ffffff
              cursor pointer
      .cloud
        position absolute
        right 360px
        top 69px
        width 150px
        height 108px
        padding 25px 0 5px
        border-radius 5px
        background #ffffff
        display none
        .cloud-item
          padding-bottom 20px
          line-height 1px
          text-align center
          font 400 16px microsoft
          .cloud-desc
            color #000000
          .cloud-desc:hover
            color #00CC99
</style>
