<template>
  <div>
    <home-part1></home-part1>
    <home-part2></home-part2>
    <home-part3></home-part3>
    <home-part4></home-part4>
    <home-part5></home-part5>
    <home-footer></home-footer>
    <home-scroll></home-scroll>
  </div>
</template>

<script>
    import HomePart1 from './components/Part1'
    import HomePart2 from './components/Part2'
    import HomePart3 from './components/Part3'
    import HomePart4 from './components/Part4'
    import HomePart5 from './components/Part5'
    import HomeFooter from './components/Footer'
    import HomeScroll from './components/Scroll'
    export default {
        name: "Home",
        components:{
          HomePart1,
          HomePart2,
          HomePart3,
          HomePart4,
          HomePart5,
          HomeFooter,
          HomeScroll
        }
    }
</script>

<style scoped>

</style>
