<template>
    <div class="footer">
      <div class="wrapper">
        <div class="footer-t">
          <dl class="content">
            <dt class="content-title">关于朋迈</dt>
            <dd class="content-desc">公司介绍</dd>
            <dd class="content-desc">团队优势</dd>
            <dd class="content-desc">组织架构</dd>
          </dl>
          <dl class="content">
            <dt class="content-title">企业文化</dt>
            <dd class="content-desc">企业愿景</dd>
            <dd class="content-desc">经营理念</dd>
            <dd class="content-desc">价值观</dd>
          </dl>
          <dl class="content">
            <dt class="content-title">商务合作</dt>
            <dd class="content-desc">业务合作</dd>
            <dd class="content-desc">媒体合作</dd>
            <dd class="content-desc">售电经纪人</dd>
          </dl>
          <dl class="content">
            <dt class="content-title">加入我们</dt>
            <dd class="content-desc">社会招聘</dd>
            <dd class="content-desc">校园招聘</dd>
            <dd class="content-desc">人才智库</dd>
          </dl>
          <div class="qr">
            <img src="http://www.gaoenergy.com/images/erweima_03.png" class="qr-img">
            <p class="qr-desc">关注微信订阅号</p>
            <p class="qr-desc">实时了解能源新生态</p>
          </div>
        </div>
        <div class="footer-b">
          <div class="copyright">版权所有 ©上海朋迈能源科技有限公司备案号：沪ICP备17004203号-1</div>
          <div class="tel">
            <i class="iconfont icon1">&#xe643;</i>
            <div class="tel-desc">
              <p class="tel-desc1">服务热线：400-138 - 0266</p>
              <p class="tel-desc2">固定电话：021-69286008</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ZoologyFooter"
    }
</script>

<style scoped lang="stylus">
  .footer
    height 309px
    color #999
    background #081525
    .wrapper
      width 1200px
      height 100%
      margin 0 auto
      .footer-t
        float left
        width 1200px
        padding 30px 0 20px
        border-bottom 1px solid #122946
        .content
          float left
          width 200px
          text-align center
          .content-title
            font-size 18px
            padding-bottom 30px
          .content-desc
            margin-bottom 12px
            cursor pointer
          .content-desc:hover
            color #38B59B
        .qr
          float right
          width 300px
          text-align center
          .qr-img
            width 100px
            height 100px
            padding-bottom 20px
          .qr-desc
            line-height 24px
            color #999
      .footer-b
        float left
        width 100%
        padding 20px 0
        .copyright
          float left
          width 600px
        .tel
          float right
          width 237px
          .icon1
            float left
            display inline-block
            font-size 38px
            color #38B59B
          .tel-desc
            float right
            color #38B59B
            text-align center
            .tel-desc1
              font-size 16px
            .tel-desc2
              padding-top 5px
</style>
