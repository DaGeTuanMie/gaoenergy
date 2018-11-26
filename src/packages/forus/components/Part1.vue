<template>
    <div class="part1">
      <div class="wrapper">
        <div class="header">
          <img src="http://product.gaoenergy.com/images/logo-w.png" class="header-img">
          <ul class="header-content">
            <li class="header-item"><router-link to="/" class="header-desc selected">首页</router-link></li>
            <li class="header-item"><router-link to="/zoology" class="header-desc">PIPE生态</router-link></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc" @mouseenter="handleMouseEnter" @mouseout="handleMouseOver">产品中心</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">研究院</a></li>
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">渠道招募</a></li>
            <li class="header-item"><router-link to="/forus" class="header-desc">关于我们</router-link></li>
          </ul>
        </div>
        <div class="center">
          <div class="center-desc1">高能三朵云</div>
          <div class="center-desc2">智慧售电服务专家</div>
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
        name: "ForusPart1",
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
    height 600px
    background url("http://product.gaoenergy.com/images/about-banner.png") no-repeat
    .wrapper
      position relative
      height 600px
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
        .center-desc1
          text-align center
          padding 220px 0 25px
          font 700 54px miscrosoft
          color #32f9c7;
        .center-desc2
          text-align center
          font 400 30px microsoft
          color #ffffff
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
