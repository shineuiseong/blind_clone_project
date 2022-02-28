<template>
  <div class="main-container">
    <main>
      <Searchbar/>
      <BestBoardCard/>
      <!-- <BoardCard v-for=""/> -->
    </main>
  </div>
</template>

<script>
import BoardCard from '@/components/Main/BoardCard'
import BestBoardCard from '@/components/Main/BestBoardCard'
export default {
  components:{
    BestBoardCard,
    BoardCard,
  },
  created(){
    this.getRecentBoardArticleList()
  },
  methods: {
    async getRecentBoardArticleList()
    {

    }

  },
}
</script>

<style lang="scss" scoped>
  
.main-container
{
  display: flex;
  
}

</style>>

