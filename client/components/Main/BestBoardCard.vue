<template lang="">
    <div class ="board-card">
        <div class="head">
             <div class="title-side">
                <div class="board-icon"></div>
                <h2>토픽 베스트</h2>
            </div>
            
            <nuxt-link :to="{
                name:'topics-id',
                params:{
                    id:'토픽-베스트'
                }
                }">더보기 ></nuxt-link>
        </div>
    </div>
</template>
<script>
export default {

     articleList:{
        type:Array,
        default:[]
    }
    
}
</script>
<style lang="">
    
</style>