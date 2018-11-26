<template>
    <div class="part3">
      <div class="title">团队优势</div>
      <ul class="leader">
        <li class="leader-item one" @mouseenter="handleMouseenter1"><img src="http://product.gaoenergy.com/images/leader01.png" class="item-logo"></li>
        <li class="leader-item two" @mouseenter="handleMouseenter2"><img src="http://product.gaoenergy.com/images/leader02.png" class="item-logo"></li>
        <li class="leader-item three"><img src="http://product.gaoenergy.com/images/leader03.png" class="item-logo"></li>
        <li class="leader-item four"><img src="http://product.gaoenergy.com/images/leader04.png" class="item-logo"></li>
        <li class="leader-item five"><img src="http://product.gaoenergy.com/images/leader05.png" class="item-logo"></li>
        <li class="leader-item six"><img src="http://product.gaoenergy.com/images/leader06.png" class="item-logo"></li>
        <li class="leader-item seven"><img src="http://product.gaoenergy.com/images/leader07.png" class="item-logo"></li>
        <li class="leader-item eight"><img src="http://product.gaoenergy.com/images/leader08.png" class="item-logo"></li>
      </ul>
      <div class="detail">
        <ul class="detail-content" :class="{'selected':isShow1}">
          <li class="detail-item">
            <div class="desc1">沈炜</div>
            <p class="desc2">Mark</p>
            <div class="desc3">项目总监</div>
            <p class="desc4">拥有15年电力行业资产全生命周期管理软件项目策划、设计、管理经验，2年互联网+电力的敏捷团队创业经验，获得国际项目管理体系认证：Prince2(Practitioner)认证；PMP认证；PMI-ACP认证</p>
          </li>
          <li class="detail-item" :class="{'selected':isShow2}">
            <div class="desc1">沈炜</div>
            <p class="desc2">Mark</p>
            <div class="desc3">项目总监</div>
            <p class="desc4">拥有15年电力行业资产全生命周期管理软件项目策划、设计、管理经验，2年互联网+电力的敏捷团队创业经验，获得国际项目管理体系认证：Prince2(Practitioner)认证；PMP认证；PMI-ACP认证</p>
          </li>
          <li class="detail-item">
            <div class="desc1">沈炜</div>
            <p class="desc2">Mark</p>
            <div class="desc3">项目总监</div>
            <p class="desc4">拥有15年电力行业资产全生命周期管理软件项目策划、设计、管理经验，2年互联网+电力的敏捷团队创业经验，获得国际项目管理体系认证：Prince2(Practitioner)认证；PMP认证；PMI-ACP认证</p>
          </li>
          <li class="detail-item">
            <div class="desc1">沈炜</div>
            <p class="desc2">Mark</p>
            <div class="desc3">项目总监</div>
            <p class="desc4">拥有15年电力行业资产全生命周期管理软件项目策划、设计、管理经验，2年互联网+电力的敏捷团队创业经验，获得国际项目管理体系认证：Prince2(Practitioner)认证；PMP认证；PMI-ACP认证</p>
          </li>
          <li class="detail-item">
            <div class="desc1">沈炜</div>
            <p class="desc2">Mark</p>
            <div class="desc3">项目总监</div>
            <p class="desc4">拥有15年电力行业资产全生命周期管理软件项目策划、设计、管理经验，2年互联网+电力的敏捷团队创业经验，获得国际项目管理体系认证：Prince2(Practitioner)认证；PMP认证；PMI-ACP认证</p>
          </li>
          <li class="detail-item">
            <div class="desc1">沈炜</div>
            <p class="desc2">Mark</p>
            <div class="desc3">项目总监</div>
            <p class="desc4">拥有15年电力行业资产全生命周期管理软件项目策划、设计、管理经验，2年互联网+电力的敏捷团队创业经验，获得国际项目管理体系认证：Prince2(Practitioner)认证；PMP认证；PMI-ACP认证</p>
          </li>
          <li class="detail-item">
            <div class="desc1">沈炜</div>
            <p class="desc2">Mark</p>
            <div class="desc3">项目总监</div>
            <p class="desc4">拥有15年电力行业资产全生命周期管理软件项目策划、设计、管理经验，2年互联网+电力的敏捷团队创业经验，获得国际项目管理体系认证：Prince2(Practitioner)认证；PMP认证；PMI-ACP认证</p>
          </li>
          <li class="detail-item">
            <div class="desc1">沈炜</div>
            <p class="desc2">Mark</p>
            <div class="desc3">项目总监</div>
            <p class="desc4">拥有15年电力行业资产全生命周期管理软件项目策划、设计、管理经验，2年互联网+电力的敏捷团队创业经验，获得国际项目管理体系认证：Prince2(Practitioner)认证；PMP认证；PMI-ACP认证</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ForusPart3",
        data(){
          return{
            isShow1:true,
            isShow2:false,
            isShow3:false,
            isShow4:true,
            isShow5:false,
            isShow6:false,
            isShow7:false,
            isShow8:false
          }
        },
      methods:{
        handleMouseenter1(){
          this.isShow1=true
        },
        handleMouseenter2(){
          this.isShow2=true
        }
      }
    }
</script>

<style scoped lang="stylus">
  .part3
    width 100%
    background #eee
    padding 100px 0 50px
    .title
      font 400 48px microsoft
      padding 0 0 20px
      text-align center
    .leader
      position relative
      width 1200px
      height 600px
      margin 0 auto
      .leader-item
        position absolute
        bottom 0
        .item-logo
          display block
      .one
        left 0
      .two
        left 180px
      .three
        left 310px
      .four
        left 450px
      .five
        left 582px
      .six
        left 642px
      .seven
        left 825px
      .eight
        right 0
      .leader-item:hover
        position absolute
        z-index 10
        bottom 22px
        transform: matrix(1.0977, 0, 0, 1.0977, 0, 0)
        transition: 0.5s ease-in-out
    .detail
      .detail-content
        .detail-item
          display none
          text-align center
          .desc1
            font 700 36px simsun
            padding 30px 0 10px
          .desc2
            color #999
          .desc3
            font-size 16px
            padding 10px 0 20px
          .desc4
            font-size 16px
        .selected
          display block
</style>
