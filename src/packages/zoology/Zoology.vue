<template>
    <div>
      <zoology-part1></zoology-part1>
      <zoology-content></zoology-content>
    </div>
</template>

<script>
    import ZoologyPart1 from './components/Part1'
    import ZoologyContent from './components/Content'
    export default {
        name: "Zoology",
        components:{
          ZoologyPart1,
          ZoologyContent
        }
    }
</script>

<style scoped>

</style>
