<template>
    <div class="part2">
      <h3 class="title">解决方案</h3>
      <div class="desc">为客户提供国内外最前沿的能源实践方案，以用户为先，不断学习成长，勇于接受审视，然后分享、合作、共创成功</div>
      <ul class="content">
        <li class="item one"><i class="iconfont icon">&#xe623;</i><div class="item-desc animated bounceInUp" v-if="isShow1"><p class="desc1">具有发电背景的能源经营</p><p class="desc2">对发电厂进行能效管理，了解电厂的发电效率，建立经济调度机制，根据不同的交易形式，优化发电过程的同时，结合打通各种交易平台，形成有效交易平台，将生产-交易的协同管理最优化，为利润最大化服务。</p></div><img src="http://www.gaoenergy.com/images/programme01.png" class="item-img"></li>
        <li class="item two" @mouseenter="handleMouseenter2" ref="two"><i class="iconfont icon">&#xe64c;</i><div class="item-desc animated bounceInUp" v-if="isShow2"><p class="desc1">分布式能源投资及建设</p><p class="desc2">在专家研究经验的基础上对分布式能源站项目经济效益及社会效益进行科学预测，通过综合能源决策系统的经济性分析和挖掘，从而为客户提供全面的、客观的、可靠的分布式能源站投资价值评估及分布式能源站项目建设进程等咨询意见。</p></div><img src="http://www.gaoenergy.com/images/programme02.png" class="item-img"></li>
        <li class="item three" @mouseenter="handleMouseenter3" ref="three"><i class="iconfont icon">&#xe616;</i><div class="item-desc animated bounceInUp" v-if="isShow3"><p class="desc1">配售电运营管理</p><p class="desc2">依托一体化调度管理系统（OMS）平台，在各调度机构以SOP为标准，全面实施统一的调控运行业务流程上线运行，最终实现流程管理的节点工作标准化、内容审计过程化、实时监督流程化、整改提高闭环化、防控调控人员责任事故，提升电网运行管控、专业管理水平。</p></div><img src="http://www.gaoenergy.com/images/programme03.png" class="item-img"></li>
        <li class="item four" @mouseenter="handleMouseenter4" ref="four"><i class="iconfont icon">&#xe611;</i><div class="item-desc animated bounceInUp" v-if="isShow4"><p class="desc1">集团化售电解决方案</p><p class="desc2">考虑集团对于发电厂的管理，通过售电公司管理平台，为旗下发电厂提供交易管理平台，形成各级能源管理的解决方案，即可分管也可通过售电公司进行协管，形成多级管理的能源经营解决方案，第一时间发现售电和发电的杠杆效应</p></div><img src="http://www.gaoenergy.com/images/programme04.png" class="item-img"></li>
        <li class="item five" @mouseenter="handleMouseenter5" ref="five"><i class="iconfont icon">&#xe64c;</i><div class="item-desc animated bounceInUp" v-if="isShow5"><p class="desc1">企业能源一体化管理</p><p class="desc2">能效电厂是一种虚拟电厂，“能效电厂”把各种节能措施、节能项目打包，通过实施一揽子节能计划，形成规模化的节电能力，减少电力用户的电力消耗需求，从而达到与扩建电力供应系统相同目的。</p></div><img src="http://www.gaoenergy.com/images/programme05.png" class="item-img"></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "HomePart2",
        data(){
          return{
            isShow1:true,
            isShow2:false,
            isShow3:false,
            isShow4:false,
            isShow5:false
          }
        },
        methods:{
          handleMouseenter2(){
            this.isShow1=false
            this.isShow2=true
            this.isShow3=false
            this.isShow4=false
            this.isShow5=false
            var that=this
            var step=0
            var timer=null
            timer=setInterval(function () {
              step=(194-that.$refs.two.offsetLeft)/2
              that.$refs.two.style.left=that.$refs.two.offsetLeft+step+"px"
              if(Math.abs(step)<2||that.$refs.two.offsetLeft<=194){
                that.$refs.two.style.left=194+"px"
                clearInterval(timer)
              }
            },100)
          },
          handleMouseenter3(){
            this.handleMouseenter2()
            this.isShow1=false
            this.isShow2=false
            this.isShow3=true
            this.isShow4=false
            this.isShow5=false
            var that=this
            var step=0
            var timer=null
            timer=setInterval(function () {
              step=(194*2-that.$refs.three.offsetLeft)/2
              that.$refs.three.style.left=that.$refs.three.offsetLeft+step+"px"
              if(Math.abs(step)<2||that.$refs.three.offsetLeft<=194*2){
                that.$refs.three.style.left=194*2+"px"
                clearInterval(timer)
              }
            },100)
          },
          handleMouseenter4(){
            this.handleMouseenter3()
            this.isShow1=false
            this.isShow2=false
            this.isShow3=false
            this.isShow4=true
            this.isShow5=false
            var that=this
            var step=0
            var timer=null
            timer=setInterval(function () {
              step=(194*3-that.$refs.four.offsetLeft)/2
              that.$refs.four.style.left=that.$refs.four.offsetLeft+step+"px"
              if(Math.abs(step)<2||that.$refs.four.offsetLeft<=194*3){
                that.$refs.four.style.left=194*3+"px"
                clearInterval(timer)
              }
            },100)
          },
          handleMouseenter5(){
            this.handleMouseenter4()
            this.isShow1=false
            this.isShow2=false
            this.isShow3=false
            this.isShow4=false
            this.isShow5=true
            var that=this
            var step=0
            var timer=null
            timer=setInterval(function () {
              step=(194*4-that.$refs.five.offsetLeft)/2
              that.$refs.five.style.left=that.$refs.five.offsetLeft+step+"px"
              if(Math.abs(step)<2||that.$refs.five.offsetLeft<=194*4){
                that.$refs.five.style.left=194*4+"px"
                clearInterval(timer)
              }
            },100)
          }
        }
    }
</script>

<style scoped lang="stylus">
  .part2
    width 100%
    .title
      font-size 48px
      font-weight 400
      text-align center
      padding-bottom 20px
    .desc
      font-size 18px
      font-weight 400
      text-align center
      padding-bottom 60px
    .content
      position relative
      height 509px
      margin 0 20px
      overflow hidden
      .item
        position absolute
        width 700px
        height 509px
        .iconfont
          position absolute
          font-size 52px
          line-height 509px
          color #ffffff
          left 60px
        .item-desc
          position absolute
          left 73px
          bottom 20px
          width 360px
          height 145px
          color #ffffff
          .desc1
            font-size 32px
            padding-bottom 10px
          .desc2
            font 400 14px/24px microsoft
      .one
        left 0
        top 0
      .two
        left 520px
        top 0
      .three
        left 694px
        top 0
      .four
        left 868px
        top 0
      .five
        left 1042px
        top 0
</style>
