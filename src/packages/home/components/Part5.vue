<template>
    <div class="part5">
      <div class="title">快速提交您的需求</div>
      <div class="content">
        <input type="text" class="inp1 one" value="您的姓名">
        <input type="text" class="inp1" value="邮箱">
        <input type="text" class="inp1 one" value="电话">
        <input type="text" class="inp1" value="公司名称">
        <input type="text" class="inp2" value="描述您的需求，我们将尽快与您联系，并帮助您共同改善和提升业务">
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomePart5"
    }
</script>

<style scoped lang="stylus">
  .part5
    height 322px
    overflow hidden
    background url("http://202.204.67.66/cache/4/04/www.gaoenergy.com/1b7b82e659831156005e18cbf8a34a84/s4bg.png")no-repeat
    .title
      font-family simsun
      font-size 48px
      font-weight 400
      text-align center
      color #ffffff
      padding-bottom 20px
      padding-top 50px
    .content
      width 800px
      height 305px
      margin 0 auto
      font-size 0
      overflow hidden
      .inp1
        width 387px
        height 38px
        font-size 14px
        border 1px solid #23456e
        background #081525
        color #33ccff
        text-indent 20px
        margin-bottom 20px
      .one
        margin-right 20px
      .inp2
        width 100%
        background #081525
        text-indent 10px
        font-size 14px
        color #33ccff
        border 1px solid #23456e
        padding 10px 10px 80px 10px
</style>
