<template>
    <div class="part4">
      <div class="wrapper">
        <div class="title">企业文化</div>
        <div class="box">
          <div class="box1 one">
            <div class="box1-t">
              <i class="iconfont">&#xe66d;</i>
              <div class="box1-desc1">企业愿景</div>
              <div class="box1-desc2">做受人尊敬的能源互联网企业</div>
            </div>
            <div class="box1-b">
              <ul class="content">
                <li class="item">不断倾听和满足客户需求，引导并超越客户需求，赢得客户的尊敬</li>
                <li class="item">不断提升品牌形象和影响力，使员工拥有企业荣誉感，获得员工的尊敬</li>
                <li class="item">推动能源互联网的发展，与合作伙伴共成长，获得行业尊敬</li>
              </ul>
            </div>
          </div>
          <div class="box1 two">
            <div class="box1-t">
              <i class="iconfont">&#xe7d8;</i>
              <div class="box1-desc1">经营理念</div>
              <div class="box1-desc2">一切以客户价值为依归</div>
            </div>
            <div class="box1-b">
              <ul class="content">
                <li class="item">在原有价值基础上创造新的价值</li>
                <li class="item">价值背后是专业，包括解决问题的能力和服务的精神</li>
              </ul>
            </div>
          </div>
          <div class="box1 three">
            <div class="box1-t">
              <i class="iconfont">&#xe617;</i>
              <div class="box1-desc1">价值观</div>
              <div class="box1-desc2">进取、担责、合作、创新</div>
            </div>
            <div class="box1-b">
              <ul class="content">
                <li class="item">进取意味着不断挑战能力极限</li>
                <li class="item">担责意味着主动承担工作，敢于破局、有菜粉心</li>
                <li class="item">合作包含对内和对外，用开放的心帮助自己和他人成功</li>
                <li class="item">创新是在原有价值基础上创造新的价值</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ForusPart4"
    }
</script>

<style scoped lang="stylus">
  .part4
    width 100%
    padding-top 50px
    background #ffffff
    .wrapper
      width 1200px
      margin 0 auto
      .title
        text-align center
        font-size 48px
        font-family simsun
        padding 50px 0 20px
      .box
        padding 20px 0 100px
        .box1
          float left
          width 320px
          height 450px
          padding 0 34px
          border 1px solid #ddd
          border-radius 3px
          .box1-t
            padding 40px 0 20px
            border-bottom 1px solid #ddd
            text-align center
            transform none
            .iconfont
              font-size 36px
              font-weight 400
            .box1-desc1
              padding 20px 0 10px
              font-size 24px
              font-weight 400
            .box1-desc2
              font-size 16px
              font-weight 400
          .box1-b
            padding-top 25px
            .content
              .item
                font 400 16px/28px microsoft
                text-align left
                padding-bottom 5px
                list-style disc
        .box1:hover
          border 1px solid #00cc99;
          box-shadow 0px 0px 10px
          transform scale(1,1.1)
          background red
          transition 0.5s ease-in-out
        .one
          margin-right 15px
        .two
          margin-right 15px
</style>
