<template>
    <div class="part6">
      <div class="wrapper">
        <div class="title">媒体报道</div>
        <ul class="content">
          <li class="item">
            <div class="img-box">
              <img src="http://www.gaoenergy.com/images/media-img04.jpg" class="item-img">
            </div>
            <a href="javascript:void (0)" class="item-title">能源物联网解决方案已上线，朋迈寻求伙伴共筑能源新未来</a>
            <p class="item-desc">2018年5月24日，广州——朋迈能源科技受邀出席腾讯云+峰会，与腾讯云、英特尔共同探讨能源行业在互联网模式下的未来发展趋势和行业前景，跨界联手推出能源物联网平台，同时宣布了基于腾讯云打造的综合能源服务平台正式上线。</p>
          </li>
          <li class="item">
            <div class="img-box">
              <img src="http://www.gaoenergy.com/images/media-img05.png" class="item-img">
            </div>
            <a href="javascript:void (0)" class="item-title">能源互联网解决方案将助力传统能源企业转型</a>
            <p class="item-desc">能源行业的发展与变革一直备受瞩目，随着信息技术的发展，物联网和人工智能对能源行业产生持续扩大的影响，除传统的电力发、输、配、售外，能源互联网中还包括能源服务、能源管理、能源存储等各类服务，智慧能源必将是时代产物下的大势所趋。</p>
          </li>
          <li class="item one">
            <div class="img-box">
              <img src="http://www.gaoenergy.com/images/media-img06.jpg" class="item-img">
            </div>
            <a href="javascript:void (0)" class="item-title">朋迈PIPE发布会5月28日亮相数博会</a>
            <p class="item-desc">5月28日上午11时，朋迈能源科技有限公司携手腾讯云、英特尔、泰豪迈能等战略合作伙伴在贵阳市2018中国国际大数据产业博览会登录大厅举办了朋迈能源互联网技术创新平台（PIPE）发布会。</p>
          </li>
          <li class="item">
            <div class="img-box">
              <img src="http://www.gaoenergy.com/images/media-img01.png" class="item-img">
            </div>
            <a href="javascript:void (0)" class="item-title">朋迈南京电力市场国际峰会剪影</a>
            <p class="item-desc">2017年5月21日~22日，朋迈参与了“2017电力市场国际峰会”。朋迈董事长、泰豪科技CTO、泰豪迈能CEO廖宇作为能源互联网开拓者，在峰会中进行了关于德国电力市场设计亮点的主题宣讲。</p>
          </li>
          <li class="item">
            <div class="img-box">
              <img src="http://www.gaoenergy.com/images/media-img02.png" class="item-img">
            </div>
            <a href="javascript:void (0)" class="item-title">朋迈携“三朵云”亮相2017年上海科技节</a>
            <p class="item-desc">2017年5月20日~5月27日，朋迈受邀参与了上海科技节。朋迈首席能源官、泰豪科技能源互联网事业部、德国华人新能源协会秘书长周滢垭向大家展示了朋迈在能源互联网领域的成果和远景规划。</p>
          </li>
          <li class="item one">
            <div class="img-box">
              <img src="http://www.gaoenergy.com/images/media-img03.png" class="item-img">
            </div>
            <a href="javascript:void (0)" class="item-title">朋迈亮相全球能源互联网发展合作组织交流会</a>
            <p class="item-desc">2017年6月12日，全球能源互联网发展合作组织会员座谈会在上海举行。朋迈首席技术官陈笑宇在交流会上向合作组织领导和会员介绍了朋迈的售电产品和战略布局，引发了现场热烈的讨论。</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ForusPart6"
    }
</script>

<style scoped lang="stylus">
  .part6
    width 100%
    padding-top 50px
    text-align center
    background #ffffff
    .wrapper
      width 1200px
      margin 0 auto
      .title
        font-size 48px
        font-family simsun
        padding 50px 0 20px
      .content
        font-size 0
        padding 0 0 120px
        .item
          display inline-block
          width 386px
          padding-top 30px
          vertical-align top
          margin-right 20px
          .img-box
            width 100%
            height 226px
            margin-bottom 20px
            overflow hidden
            .item-img
              width 100%
            .item-img:hover
              transform scale(1.1)
              transition 0.5s ease-in-out
          .item-title
            display inline-block
            font-size 18px
            color #333
            height 48px
            text-align left
            padding-bottom 10px
          .item-title:hover
            color #00CC99
          .item-desc
            font 400 14px/24px miscrosoft
            text-align left
        .one
          margin-right 0
</style>
