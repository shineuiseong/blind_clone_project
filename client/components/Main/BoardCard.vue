<template lang="">
    <div class ="board-card">
        <div class="head">
            <div class="title-side">
                <div class="board-icon"></div>
                <h2>{{title}}</h2>
            </div>
            <nuxt-link :to="{
                name:'topics-id',
                params:{
                    id:slug
                }
                }">더보기 ></nuxt-link>
        </div>
        <div class="body">
            <ul class="article-list">
                <li v-for="a in articleList" :key="a.id">
                    <span class="article-title">{{a.title}}</span>
                    <span class="view-count">{{a.viewCount}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title: {
            type:String,
            required: true,
        },
        slug:{
        title: String,
        requried: true,
        },
        articleList:{
        type:Array,
        default:[]
        }

    },
    
}
</script>
<style lang="scss">
.board-card{
    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;

        
    }
    h2{
        font-size: 18px;
        line-height: 43px;
    }
    a{
        position: relative;
        opacity: 0.2;
        top:3px;
        color:#222;
        font-size: 15px;
    }
}
.article-list{
    padding-left: 0;
    li{
        list-style: none;
        display: flex;
        padding-top: 9px;
        span{
            display: inline-block;
            line-height: 20px;
            color:#222
        }
        .article-title{
            width: calc(100% - 80px)
        }
        .view-count{
            width:80px
        }
    }
}
    
</style>