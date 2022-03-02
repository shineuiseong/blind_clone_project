<template>
  <div class="board-container">
    <section v-if="boardList.length > 0" class="board">
     <nuxt-link class="board-item"
      v-for="b in boardList" 
      :key="b._id" 
      :class="['board-item', $route.params.id === b.slug && 'active']"
      :to="{
         name: 'topics-id',
         params:{
             id:b.slug
         }
         }">
            {{b.title}}
         </nuxt-link>
    </section>
    <section class="article-list">
        <GlobalArticleCard v-for="(a) in articleList" :article="a" :key="a._id"  />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boardList: [],
      articleList: [],
      lastIndex: 0
    };
  },
  created() {
    this.getBoardList();
    this.getBoardArticleList()
  },
  methods: {
    async getBoardList() {
      const data = await this.$api.$get("/board/list");
      this.boardList = data;
    },
    async getBoardArticleList(){
        const data = await this.$api.$get(`/board/${this.$route.params.id}`)
        console.log(data)
        this.articleList = data.article
    }
    
}
}
</script>