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
        </div>
        <div class="footer-b"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeFooter"
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
</style>
