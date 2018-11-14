<template>
    <div class="part1">
      <div class="wrapper">
        <div class="header">
          <img src="http://product.gaoenergy.com/images/logo-w.png" class="header-img">
          <ul class="header-content">
            <li class="header-item"><a href="javascript:void (0)" class="header-desc selected">首页</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">PIPE生态</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">产品中心</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">研究院</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">渠道招募</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">关于我们</a></li>
          </ul>
        </div>
        <div class="center"><img src="http://product.gaoenergy.com/images/s1img.png" class="center-img"></div>
        <div class="footer">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomePart1"
    }
</script>

<style scoped lang="stylus">
  .part1
    height 567px
    background url("http://product.gaoenergy.com/images/index-banner.png") no-repeat
    .wrapper
      height 563px
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
      .iconfont
        /*display block*/
        height 100px
        width 100px
        background red
</style>
