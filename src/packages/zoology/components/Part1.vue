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
            <li class="header-item"><a href="javascript:void (0)" class="header-desc">关于我们</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ZoologyPart1",
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
    background url("http://product.gaoenergy.com/images/pipe-banner.png") no-repeat
    background-position center
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
</style>
