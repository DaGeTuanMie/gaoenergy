<template>
    <div>
      <forus-part1></forus-part1>
      <forus-part2></forus-part2>
      <forus-part3></forus-part3>
      <forus-part4></forus-part4>
      <forus-part5></forus-part5>
      <forus-part6></forus-part6>
    </div>
</template>

<script>
    import axios from 'axios'
    import ForusPart1 from './components/Part1'
    import ForusPart2 from './components/Part2'
    import ForusPart3 from './components/Part3'
    import ForusPart4 from './components/Part4'
    import ForusPart5 from './components/Part5'
    import ForusPart6 from './components/Part6'
    export default {
        name: "Forus",
        components:{
          ForusPart1,
          ForusPart2,
          ForusPart3,
          ForusPart4,
          ForusPart5,
          ForusPart6
        }
    }
</script>

<style scoped>

</style>
