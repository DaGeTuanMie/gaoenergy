<template>
    <div>
      <forus-part1></forus-part1>
      <forus-part2></forus-part2>
    </div>
</template>

<script>
    import ForusPart1 from './components/Part1'
    import ForusPart2 from './components/Part2'
    export default {
        name: "Forus",
        components:{
          ForusPart1,
          ForusPart2
        }
    }
</script>

<style scoped>

</style>
