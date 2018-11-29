<template>
    <div class="part5">
      <div class="wrapper">
        <div class="title">商务合作</div>
        <div class="box">
          <div class="box1 one">
            <div class="box1-t">
              <i class="iconfont">&#xe663;</i>
              <div class="box1-desc1">业务合作</div>
            </div>
            <div class="box1-b img1">
              <!--<img src="http://www.gaoenergy.com/images/business-img01.png" class="box1-img">-->
              <div class="box1-desc2">想获得朋迈的产品信息或有合作意向，
                请发邮件至：service@permind.com.cn
                或致电免费客服热线：400-138-0266</div>
            </div>
          </div>
          <div class="box1 two">
            <div class="box1-t">
              <i class="iconfont">&#xe684;</i>
              <div class="box1-desc1">媒体合作</div>
            </div>
            <div class="box1-b img2">
              <!--<img src="http://www.gaoenergy.com/images/business-img02.png" class="box1-img">-->
              <div class="box1-desc2">
                如果您是电力行业专业媒体，正在寻找能源互联网创新企业，或有其他合作意向，
                请发邮件至：echo.zhang@permind.com.cn
                或致电免费客服热线：400-138-0266</div>
            </div>
          </div>
          <div class="box1 three">
            <div class="box1-t">
              <i class="iconfont">&#xe628;</i>
              <div class="box1-desc1">售电经纪人</div>
            </div>
            <div class="box1-b img3">
              <!--<img src="http://www.gaoenergy.com/images/business-img03.png" class="box1-img">-->
              <div class="box1-desc3">什么是售电经纪人？</div>
              <div class="box1-desc3">售电经纪人可以获得哪些支持和保障？</div>
              <div class="box1-desc3">如何申请？</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ForusPart5"
    }
</script>

<style scoped lang="stylus">
  .part5
    float left
    width 100%
    padding 100px 0 50px
    background #eee
    .wrapper
      width 1200px
      margin 0 auto
      .title
        font-size 48px
        padding 0 0 20px
        text-align center
      .box
        float left
        width 100%
        padding 80px 0 100px
        .box1
          float left
          width 372px
          height 530px
          border 1px solid #ddd
          .box1-t
            height 126px
            text-align center
            border-bottom 1px solid #ddd
            .iconfont
              padding 25px 0 10px
              display inline-block
              font-size 36px
              color #999
            .box1-desc1
              font-size 24px
          .box1-b
            height 401px
            /*.box1-desc2*/
              /*position absolute*/
              /*left 0*/
              /*top 0*/
            /*.box1-desc3*/
              /*position absolute*/
              /*left 0*/
              /*top 0*/
          .img1
            width 372px
            background url("http://www.gaoenergy.com/images/business-img01.png") no-repeat
          .img2
            width 374px
            background url("http://www.gaoenergy.com/images/business-img02.png") no-repeat
          .img3
            width 374px
            background url("http://www.gaoenergy.com/images/business-img03.png") no-repeat
        .box1:hover
          width 450px
          height 645px
          color #ffffff
          transform scale(1.15,1.15)
          background #00CC99
          transition 0.5s ease-in-out
</style>
