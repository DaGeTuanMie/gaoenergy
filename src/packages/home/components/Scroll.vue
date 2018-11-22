<template>
    <div class="scroll">
      <div class="scroll-t">
        <i class="iconfont icon1">&#xe60a;</i>
        <div class="desc">
          服<br>
          务<br>
          咨<br>
          询
        </div>
      </div>
      <div class="scroll-b">
        <i class="iconfont icon2" @mouseenter="handlemouseenter" @mouseout="handlemouseout">&#xe602;</i>
        <i class="iconfont icon3">&#xe621;</i>
      </div>
      <div class="qr" ref="qr"><img src="http://www.gaoenergy.com/images/erweima_03.jpg" class="qr-img"></div>
    </div>
</template>

<script>
    export default {
        name: "HomeScroll",
        methods:{
          handlemouseenter(){
            this.$refs.qr.style.display="block"
          },
          handlemouseout(){
            this.$refs.qr.style.display="none"
          }
        }
    }
</script>

<style scoped lang="stylus">
  .scroll
    position fixed
    width 50px
    height 254px
    right 0
    top 200px
    text-align center
    .scroll-t
      height 116px
      padding 25px 0
      cursor pointer
      background #38B59B
      .icon1
        display inline-block
        font-weight 400
        font-size 22px
        margin-bottom 5px
        color #ffffff
      .desc
        font-size 16px
        font-weight 400
        line-height 20px
        color #ffffff
    .scroll-b
      background #F5F5F5
      .icon2
        font 400 36px microsoft
        border-bottom 1px solid #ccc
        cursor pointer
      .icon3
        font 400 36px microsoft
        cursor pointer
    .qr
      display none
      position absolute
      width 140px
      height 140px
      right 50px
      top 156px
      padding 10px
      .qr-img
        width 140px
        height 140px
</style>
