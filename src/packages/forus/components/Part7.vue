<template>
    <div class="part7">
      <div class="wrapper">
        <div class="title">加入我们</div>
        <div class="desc1">这是一个高颜值、高智商，还有逗逼和单身狗的能源互联网团队！我们正在寻找有速度和激情的千里马，只要你是纯的</div>
        <div class="desc2">欢迎加入朋迈！简历发送至：<span class="color-green">tina.zhang@permind.com.cn</span></div>
        <div class="box">
          <div class="box-l">
            <ul class="type">
              <li class="type-1">社会招聘</li>
              <li class="type-2">校园招聘</li>
              <li class="type-3">人才智库</li>
            </ul>
          </div>
          <div class="box-r">
            <div class="box-r-title">
              <p class="title-1">上海</p>
              <p class="title-2">杭州</p>
            </div>
            <div class="box-r-content">
              <ul class="content-item">
                <li class="content-item-detail">JAVA实习生</li>
                <li class="content-item-detail">运营实习生</li>
              </ul>
              <div class="detail-box">
                <div class="box1">
                  <p class="box1-desc">工作职责：</p>
                  <p class="box1-desc">1、 参与研发后端业务大数据系统存储设计，架构设计、模块设计、核心功能开发与维护；</p>
                  <p class="box1-desc">2、参与整个系统测试，运维，上线过程；</p>
                  <p class="box1-desc">3、完成指派的产品功能开发工作；</p>
                  <p class="box1-desc">4、和团队成员进行业务相关问题的讨论和规划。</p>
                </div>
                <div class="box2">
                  <p class="box2-desc">任职要求：</p>
                  <p class="box2-desc">1、本科以上学历，计算机科学与技术、数学、物理等专业；</p>
                  <p class="box2-desc">2、2年以上工作经验。要求丰富的java项目开发及设计经验；</p>
                  <p class="box2-desc">3、精通Java程序开发：熟练掌握多线程编程，安全，流等技术；能够使用PowerDesinger，Axure等工具建模；熟练常用的设计模式；熟悉UML；</p>
                  <p class="box2-desc">4、熟悉掌握Struts1/Struts2,Spring，Hibernate，iBatis、mybatis等开源项目中至少三项；</p>
                  <p class="box2-desc">5、能够写出高性能sql语句，了解sql性能调优；</p>
                  <p class="box2-desc">6、了解SOA的软件架构模式。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ForusPart7"
    }
</script>

<style scoped lang="stylus">
  .part7
    width 100%
    height 999px
    color #ffffff
    background url("http://www.gaoenergy.com/images/we-bg.png") no-repeat
    .wrapper
      width 1200px
      margin 0 auto
      .title
        text-align center
        font-size 48px
        padding 50px 0 20px
      .desc1
        text-align center
        font-size 18px
        line-height 38px
      .desc2
        text-align center
        font-size 18px
        line-height 38px
        .color-green
          color #00CC82
      .box
        padding-top 30px
        overflow hidden
        .box-l
          display inline-block
          width 190px
          padding-right 45px
          vertical-align top
          .type
            .type-1
              margin 60px 0
              width 186px
              height 60px
              text-align center
              font 24px/60px misrosoft
              background rgba(255, 255, 255, 0.6)
              color #333
              cursor pointer
            .type-2
              margin 60px 0
              width 186px
              height 60px
              text-align center
              font 24px/60px misrosoft
              background rgba(255, 255, 255, 0.6)
              color #333
              cursor pointer
            .type-3
              margin 60px 0
              width 186px
              height 60px
              text-align center
              font 24px/60px misrosoft
              background #00CC82
              color #fff
              cursor pointer
        .box-r
          display inline-block
          padding-right 45px
          border-left 1px solid #ddd
          padding-bottom 20px
          .box-r-title
            overflow hidden
            .title-1
              float left
              margin-left 80px
              font-size 24px
              line-height 60px
              cursor pointer
            .title-2
              float left
              margin-left 80px
              font-size 24px
              line-height 60px
              cursor pointer
          .box-r-content
            width 865px
            padding 20px 30px 30px 20px
            background rgba(255, 255, 255, 0.7)
            border-radius 3px
            position relative
            color #333
            .content-item
              width 205px
              height 600px
              overflow hidden
              /*float left*/
              vertical-align top
              display inline-block
              .content-item-detail
                text-align left
                padding-left 20px
                line-height 55px
                width 165px
                height 55px
                font-size 16px
                cursor pointer
            .detail-box
              /*float left*/
              display inline-block
              padding-left 15px
              text-align left
              height 600px
              border-left 1px solid #ffffff
              .box1
                padding 14px 0 10px
                width 610px
                .box1-desc
                  font 400 14px/28px miscrosoft
              .box2
                padding 14px 0 10px
                width 610px
                .box2-desc
                  font 400 14px/28px miscrosoft
</style>
