<template>
    <div>
      <forus-part1></forus-part1>
      <forus-part2></forus-part2>
      <forus-part3 :leaderList="leaderList"></forus-part3>
    </div>
</template>

<script>
    import axios from 'axios'
    import ForusPart1 from './components/Part1'
    import ForusPart2 from './components/Part2'
    import ForusPart3 from './components/Part3'
    export default {
        name: "Forus",
        data(){
          return{
            leaderList:[]
          }
        },
        components:{
          ForusPart1,
          ForusPart2,
          ForusPart3
        },
      methods:{
        getCityInfo(){
          axios.get('../../../static/mock/forus.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
          res=res.data
          if(res.ret && res.data){
            const data=res.data
            this.leaderList=data.leaderList
          }
        }
      },
      mounted(){
        this.getCityInfo()
      }
    }
</script>

<style scoped>

</style>
