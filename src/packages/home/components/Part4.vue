<template>
    <div class="part4">
      <h3 class="title">朋迈研究院，致力探索更多领域</h3>
      <div class="desc">我们邀请更多能源科学家，需求探索能源互联网</div>
      <ul class="content">
        <li class="item one">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">用能曲线及负荷预测</p>
        </li>
        <li class="item one">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">合作伙伴集成</p>
        </li>
        <li class="item one">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">信用共识机制</p>
        </li>
        <li class="item one">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">大数据捕捉及集成</p>
        </li>
        <li class="item">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">情报及决策分析</p>
        </li>
        <li class="item two">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">售电营销推广</p>
        </li>
        <li class="item two">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">虚拟电厂及经济调度</p>
        </li>
        <li class="item two">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">报价及套餐规划</p>
        </li>
        <li class="item two">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">能源采购及平衡服务</p>
        </li>
        <li class="item three">
          <i class="iconfont">&#xe69d;</i>
          <p class="item-desc">多能联动及新能源</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "HomePart4"
    }
</script>

<style scoped lang="stylus">
  .part4
    height 900px
    margin-top 50px
    background url("http://www.gaoenergy.com/images/s3bg.png")no-repeat
    .title
      font-family simsun
      font-size 48px
      font-weight 400
      text-align center
      color #ffffff
      padding-bottom 20px
      padding-top 100px
    .desc
      font-family simsun
      font-size 18px
      font-weight 400
      color #ffffff
      text-align center
      padding-bottom 60px
    .content
      width 1004px
      height 361px
      margin 0 auto
      .item
        float left
        width 200px
        height 180px
        text-align center
        background #ffffff
        .iconfont
          display inline-block
          font-size 48px
          color #3399ff
          margin 40px 0 20px
        .iconfont:hover
          -webkit-transition: 0.8s ease-out
          -moz-transition: 0.8s ease-out
          -ms-transition: 0.8s ease-out
          -o-transition: 0.8s ease-out
          transition: 0.8s ease-out
          -webkit-transform: rotate(45deg)
          -moz-transform: rotate(45deg)
          -ms-transform: rotate(45deg)
          -o-transform: rotate(45deg)
          transform: rotate(45deg)
        .item-desc
          color #333333
          font-size 12px
          font-family simsun
      .one
        margin 0 1px 1px 0
      .two
        margin-right 1px
      .three
        margin-top 1px
</style>
