<template>
    <div class="part3">
      <div class="title">团队优势</div>
      <ul class="leader">
        <li class="leader-item one" @mouseenter="handleMouseenter1"><img src="http://product.gaoenergy.com/images/leader01.png" class="item-logo"></li>
        <li class="leader-item two" @mouseenter="handleMouseenter2"><img src="http://product.gaoenergy.com/images/leader02.png" class="item-logo"></li>
        <li class="leader-item three" @mouseenter="handleMouseenter3"><img src="http://product.gaoenergy.com/images/leader03.png" class="item-logo"></li>
        <li class="leader-item four" @mouseenter="handleMouseenter4"><img src="http://product.gaoenergy.com/images/leader04.png" class="item-logo"></li>
        <li class="leader-item five" @mouseenter="handleMouseenter5"><img src="http://product.gaoenergy.com/images/leader05.png" class="item-logo"></li>
        <li class="leader-item six" @mouseenter="handleMouseenter6"><img src="http://product.gaoenergy.com/images/leader06.png" class="item-logo"></li>
        <li class="leader-item seven" @mouseenter="handleMouseenter7"><img src="http://product.gaoenergy.com/images/leader07.png" class="item-logo"></li>
        <li class="leader-item eight" @mouseenter="handleMouseenter8"><img src="http://product.gaoenergy.com/images/leader08.png" class="item-logo"></li>
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
            <div class="desc1">魏嘉懿</div>
            <p class="desc2">Noah</p>
            <div class="desc3">首席架构师</div>
            <p class="desc4">原微软开发工程师，参与过WIN7的研发工作及微软首席支持项目，曾获微软GPGP内部奖项，参与贡献开源项目mariadb，Hive2Thrift，Reneto，.netcore。熟悉AI、机器学习、大数据、物联网等前沿技术</p>
          </li>
          <li class="detail-item" :class="{'selected':isShow3}">
            <div class="desc1">许晓鹤</div>
            <p class="desc2">Hermie</p>
            <div class="desc3">CEO</div>
            <p class="desc4">原腾讯微信支付产品经理，原微票儿电影项目总负责人，原QQ团购类目总监</p>
          </li>
          <li class="detail-item" :class="{'selected':isShow4}">
            <div class="desc1">廖宇</div>
            <p class="desc2">President</p>
            <div class="desc3">董事长</div>
            <p class="desc4">德国华人新能源协会创始人。曾任职于国家电力公司苏州供电局、西门子公司智能电网部、德国柏林电网公司调度中心</p>
          </li>
          <li class="detail-item" :class="{'selected':isShow5}">
            <div class="desc1">陈笑宇</div>
            <p class="desc2">Dream</p>
            <div class="desc3">CTO</div>
            <p class="desc4">早期就职于安徽电网软件研发中心，先后在多家上市公司任职CTO工作，对于电商及互联网有深刻了解，参与多个能源类创新项目：光伏车棚（上海智慧城市试点项目），光伏P2P，碳信用置换平台（上海重点扶持项目），智能建筑（国家低碳试点项目）</p>
          </li>
          <li class="detail-item" :class="{'selected':isShow6}">
            <div class="desc1">周滢垭</div>
            <p class="desc2">Crystal</p>
            <div class="desc3">首席能源官</div>
            <p class="desc4">清华大学、德国亚琛工大双硕士，41项国内外发明及实用新型专利的发明人，现为能源互联网、电力交易、售电软件及算法专家</p>
          </li>
          <li class="detail-item" :class="{'selected':isShow7}">
            <div class="desc1">张小红</div>
            <p class="desc2">Echo</p>
            <div class="desc3">运营总监</div>
            <p class="desc4">拥有10年以上大型广告公司、电商平台运营管理经验，熟悉网站整体规划、营销、推广、客户关系管理等系统性工作</p>
          </li>
          <li class="detail-item" :class="{'selected':isShow8}">
            <div class="desc1">向琛</div>
            <p class="desc2">Chen</p>
            <div class="desc3">首席算法研究员交易专家</div>
            <p class="desc4">上海交通大学本科，德国亚琛工大电气工程学硕士，熟悉电力行业各类预测算法。曾就职于ABB，负责风电、电力交易、虚拟电厂项目</p>
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
          this.isShow2=false
          this.isShow3=false
          this.isShow4=false
          this.isShow5=false
          this.isShow6=false
          this.isShow7=false
          this.isShow8=false

        },
        handleMouseenter2(){
          this.isShow1=false
          this.isShow2=true
          this.isShow3=false
          this.isShow4=false
          this.isShow5=false
          this.isShow6=false
          this.isShow7=false
          this.isShow8=false
        },
        handleMouseenter3(){
          this.isShow1=false
          this.isShow2=false
          this.isShow3=true
          this.isShow4=false
          this.isShow5=false
          this.isShow6=false
          this.isShow7=false
          this.isShow8=false
        },
        handleMouseenter4(){
          this.isShow1=false
          this.isShow2=false
          this.isShow3=false
          this.isShow4=true
          this.isShow5=false
          this.isShow6=false
          this.isShow7=false
          this.isShow8=false
        },
        handleMouseenter5(){
          this.isShow1=false
          this.isShow2=false
          this.isShow3=false
          this.isShow4=false
          this.isShow5=true
          this.isShow6=false
          this.isShow7=false
          this.isShow8=false
        },
        handleMouseenter6(){
          this.isShow1=false
          this.isShow2=false
          this.isShow3=false
          this.isShow4=false
          this.isShow5=false
          this.isShow6=true
          this.isShow7=false
          this.isShow8=false
        },
        handleMouseenter7(){
          this.isShow1=false
          this.isShow2=false
          this.isShow3=false
          this.isShow4=false
          this.isShow5=false
          this.isShow6=false
          this.isShow7=true
          this.isShow8=false
        },
        handleMouseenter8(){
          this.isShow1=false
          this.isShow2=false
          this.isShow3=false
          this.isShow4=false
          this.isShow5=false
          this.isShow6=false
          this.isShow7=false
          this.isShow8=true
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
