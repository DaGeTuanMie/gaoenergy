<template>
    <div>
      <zoology-part1></zoology-part1>
      <zoology-content></zoology-content>
      <zoology-footer></zoology-footer>
    </div>
</template>

<script>
    import ZoologyPart1 from './components/Part1'
    import ZoologyContent from './components/Content'
    import ZoologyFooter from './components/Footer'
    export default {
        name: "Zoology",
        components:{
          ZoologyPart1,
          ZoologyContent,
          ZoologyFooter
        }
    }
</script>

<style scoped>

</style>
