<template>
  <div>
    <home-part1></home-part1>
    <home-part2></home-part2>
    <home-part3></home-part3>
  </div>
</template>

<script>
    import HomePart1 from './components/Part1'
    import HomePart2 from './components/Part2'
    import HomePart3 from './components/Part3'
    export default {
        name: "Home",
        components:{
          HomePart1,
          HomePart2,
          HomePart3
        }
    }
</script>

<style scoped>

</style>
