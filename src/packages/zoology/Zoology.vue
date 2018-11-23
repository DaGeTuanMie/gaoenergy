<template>
    <div>
      <zoology-part1></zoology-part1>
      <zoology-content></zoology-content>
      <zoology-footer></zoology-footer>
      <zoology-scroll></zoology-scroll>
    </div>
</template>

<script>
    import ZoologyPart1 from './components/Part1'
    import ZoologyContent from './components/Content'
    import ZoologyFooter from './components/Footer'
    import ZoologyScroll from './components/Scroll'
    export default {
        name: "Zoology",
        components:{
          ZoologyPart1,
          ZoologyContent,
          ZoologyFooter,
          ZoologyScroll
        }
    }
</script>

<style scoped>

</style>
