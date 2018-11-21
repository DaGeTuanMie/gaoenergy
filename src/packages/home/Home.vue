<template>
  <div>
    <home-part1></home-part1>
    <home-part2></home-part2>
  </div>
</template>

<script>
    import HomePart1 from './components/Part1'
    import HomePart2 from './components/Part2'
    export default {
        name: "Home",
        components:{
          HomePart1,
          HomePart2
        }
    }
</script>

<style scoped>

</style>
