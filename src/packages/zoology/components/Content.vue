<template>
    <div class="content">
      <div class="section1">
        <div class="section1-nav">
          <ul class="section1-header">
            <li class="section1-item"><a href="#" class="section1-link link-one">平台简介</a></li>
            <li class="section1-item"><a href="#" class="section1-link">基础设施服务</a></li>
            <li class="section1-item"><a href="#" class="section1-link">能源应用中心</a></li>
            <li class="section1-item"><a href="#" class="section1-link">大数据认知服务</a></li>
          </ul>
        </div>
        <div class="section1-title">PIPE平台是谁？</div>
        <div class="section1-desc1">PIPE能源技术互联共享平台——一个连接能源、设备、用能方、服务方的开放式生态系统。</div>
        <div class="section1-desc2">PIPE平台结合腾讯云的云大物移的技术能力，与电网、行业领先服务商、高校、研究院展开合作，为综合能源服务商提供云端基础设施、 能源增值应用、能源数据分析等升级型解决方案，通过新一代信息技术与电力技术的创新与融合，助力传统能源服务企业快速转型。</div>
      </div>
      <div class="section2">
        <div class="section2-wrapper">
          <div class="section2-title">PIPE平台架构</div>
          <div class="section2-detail">
            <img src="http://www.gaoenergy.com/images/pipe-img01.png" class="section2-img">
            <div class="section2-content">
              <ul class="section2-item">
                <li class="section2-item-title">大数据服务</li>
                <li class="section2-item-desc1">能源运维可视化、节能空间分析、客户用电行为分析等</li>
                <li class="section2-item-desc2">收费模式：<i class="section2-color">按项目、分成方式收费</i></li>
              </ul>
              <ul class="section2-item">
                <li class="section2-item-title">能源应用中心（SaaS）自建或集成</li>
                <li class="section2-item-desc1">互联网+创新服务、购售电应用系统、环境及能耗监测、智能用电监测系统、分布式能源监测系统、智能计量采集结算系统、配电资产智能运维、多能协同管理系统等</li>
                <li class="section2-item-desc2">收费模式：<i class="section2-color">多账户体系，按年收取服务费</i></li>
              </ul>
              <ul class="section2-item">
                <li class="section2-item-title">IT基础设施</li>
                <li class="section2-item-desc1">能源微服务架构、能源IOT、能源路由器</li>
                <li class="section2-item-desc2">收费模式：<i class="section2-color">按硬件接入点、台收费</i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section3">
        <div class="section3-wrapper">
          <div class="section3-title">我们的目标</div>
          <div class="section3-desc1">构建能源服务生态，为综合能源服务商赋能</div>
          <div class="section3-desc2">构建一个连接能源、设备、用能方、服务方的开放式生态系统，为综合能源服务商提供电力应用、大数据、云计算、人工智能、能源微架构等服务，通过新一代信息技术和电力技术的创新与融合，助力传统能源服务业务快速转型。</div>
          <img src="http://www.gaoenergy.com/images/pipe-img02.png" class="section3-img">
          <div class="section3-welcome">
            <div class="welcome-desc"><i class="iconfont icon1">&#xe603;</i>欢迎合作伙伴加入，共建能源生态圈<i class="iconfont icon2">&#xe603;</i></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ZoologyContent"
    }
</script>

<style scoped lang="stylus">
  .content
    width 100%
    padding-top 50px
    .section1
      .section1-nav
        height 65px
        border-bottom 1px solid #ddd
        .section1-header
          width 1200px
          height 67px
          margin 0 auto
          text-align center
          .section1-item
            float left
            width 240px
            height 65px
            text-align center
            .section1-link
              display inline-block
              font 400 16px/65px microsoft
              color #000
            .link-one
              color #00CC99
              border-bottom 2px solid #00CC99
      .section1-title
        width 900px
        margin 0 auto
        text-align center
        font-weight 600
        font-size 48px
        font-family simsun
        padding 50px 0 20px
      .section1-desc1
        width 900px
        margin 0 auto 20px
        padding-top 20px
        font 400 14px/26px miscrosoft
      .section1-desc2
        width 900px
        margin 0 auto 20px
        font 400 14px/26px miscrosoft
        padding-bottom 50px
    .section2
      width 100%
      padding 100px 0 50px
      background #f6f6f6
      .section2-wrapper
        /*float left*/
        width 1200px
        margin 0 auto
        .section2-title
          /*float left*/
          font 400 48px microsoft
          text-align center
          padding 0 0 20px
        .section2-detail
          margin-top 40px
          height 452px
          .section2-img
            float left
            display block
            width 522px
          .section2-content
            float right
            width 588px
            height 452px
            margin-right 20px
            .section2-item
              .section2-item-title
                padding-top 15px
                font 400 24px/24px microsoft
              .section2-item-desc1
                padding-top 15px
                font 400 14px/24px microsoft
              .section2-item-desc2
                padding-top 15px
                font 400 14px/24px microsoft
              .section2-color
                color #38B59B
    .section3
      width 100%
      padding-top 50px
      .section3-wrapper
        width 1200px
        margin 0 auto
        text-align center
        .section3-title
          font 600 48px simsun
          padding 50px 0 20px
          text-align center
        .section3-desc1
          padding-top 20px
          font 400 24px/26px simsun
          margin-bottom 20px
          text-align left
        .section3-desc2
          padding-bottom 50px
          font 400 14px/26px simsun
          margin-bottom 20px
          text-align left
        .section3-img
          display inline-block
        .section3-welcome
          padding 40px 0 80px
          .welcome-desc
            font 400 18px simsun
            .iconfont
              color #7FB7E6
</style>
