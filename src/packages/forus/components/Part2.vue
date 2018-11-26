<template>
    <div class="part2">
      <div class="section1-nav">
        <ul class="section1-header">
          <li class="section1-item"><a href="#" class="section1-link link-one">公司介绍</a></li>
          <li class="section1-item"><a href="#" class="section1-link" @mouseenter="handlemouseenter1" @mouseout="handlemouseout1" :class="{'link-one':isShow1}">团队优势</a></li>
          <li class="section1-item"><a href="#" class="section1-link" @mouseenter="handlemouseenter2" @mouseout="handlemouseout2" :class="{'link-one':isShow2}">企业文化</a></li>
          <li class="section1-item"><a href="#" class="section1-link" @mouseenter="handlemouseenter3" @mouseout="handlemouseout3" :class="{'link-one':isShow3}">商务合作</a></li>
          <li class="section1-item"><a href="#" class="section1-link" @mouseenter="handlemouseenter4" @mouseout="handlemouseout4" :class="{'link-one':isShow4}">媒体报道</a></li>
          <li class="section1-item"><a href="#" class="section1-link" @mouseenter="handlemouseenter5" @mouseout="handlemouseout5" :class="{'link-one':isShow5}">加入我们</a></li>
        </ul>
      </div>
      <div class="content">
        <div class="content-title">公司介绍</div>
        <div class="content-desc">朋迈是拥有一群致力重构能源行业的“极客”，基于“深度学习”的能源交易策略，利用NLP打造电力技术搜索引擎，基于大数据的能效数据共享生态圈，能源OTC交易服务平台、通过云计算将电力行业算法云端化等等。</div>
        <div class="content-desc">借力云技术,从“售电、用电、购电”三个步骤搭建了“售电三朵云”,“售电云”将为售电公司提供智慧化售电经营解决方案,“能效云”将为用电企业全生命周期的能效服务,“交易云”将为交易员提供自动化交易工具，将互联网、大数据、区块链新技术，打破传统行业、产业和系统的界限和束缚，连接电力服务商实现能源技术社会化协同的最大化，提供基于数据和算法的应用市场，做一个售电公司好朋友，实现革命性的对接和整合。</div>
        <div class="content-desc">朋迈致力通过互联网技术+电力技术一系列技术的组合来实现对产业的变革，传感器、通信、云计算、大数据，乃至当前市场上流行的区块链、虚拟现实（VR）、增强现实（AR）、人工智能等技术融合发力，辅助更多电力云化的应用上线。</div>
        <div class="content-footer">
          <img src="http://product.gaoenergy.com/images/about-logo01.png" class="item-logo">
          <img src="http://product.gaoenergy.com/images/about-logo02.png" class="item-logo">
          <img src="http://product.gaoenergy.com/images/about-logo03.png" class="item-logo">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ForusPart2",
        data(){
          return{
            isShow1:false,
            isShow2:false,
            isShow3:false,
            isShow4:false,
            isShow5:false
          }
        },
        methods:{
          handlemouseenter1(){
            this.isShow1=true
          },
          handlemouseout1(){
            this.isShow1=false
          },
          handlemouseenter2(){
            this.isShow2=true
          },
          handlemouseout2(){
            this.isShow2=false
          },
          handlemouseenter3(){
            this.isShow3=true
          },
          handlemouseout3(){
            this.isShow3=false
          },
          handlemouseenter4(){
            this.isShow4=true
          },
          handlemouseout4(){
            this.isShow4=false
          },
          handlemouseenter5(){
            this.isShow5=true
          },
          handlemouseout5(){
            this.isShow5=false
          }
        }
    }
</script>

<style scoped lang="stylus">
  .part2
    width 100%
    /*padding-top 50px*/
    .section1-nav
      height 65px
      border-bottom 1px solid #ddd
      .section1-header
        width 1200px
        height 67px
        margin 0 auto
        text-align center
        .section1-item
          float left
          width 200px
          height 65px
          text-align center
          .section1-link
            display inline-block
            font 400 16px/65px microsoft
            color #000
          .link-one
            color #00CC99
            border-bottom 2px solid #00CC99
    .content
      padding-top 50px
      width 900px
      margin 0 auto
      .content-title
        font 400 48px microsoft
        padding 50px 0 20px
        text-align center
      .content-desc
        font 400 14px/26px microsoft
        margin-bottom 20px
        text-align left
      .content-footer
        padding 80px 0 100px
        text-align center
        .item-logo
          padding 0 10px
</style>
