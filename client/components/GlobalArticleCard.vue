import { EyeIcon, ThumbsUpIcon, MessageCircleIcon } from 'vue-feather-icons';
<template lang="">
    <article>
        <div class="head">
            {{article.title}}
        </div>
        <div class="body">
            <p>{{article.content}}</p>
            <div class="info">
                <span class="company">{{article.author.company.name}}</span>
                <span class="nickname">{{article.author.nickname}}</span>
            </div>
        </div>
        <div class="foot">
            <div class="left">
                <span class="count"><EyeIcon  class="icon" size="1x"/>{{article.viewCount}}</span>
                <span class="count"><ThumbsUpIcon  class="icon" size="1x"/>{{article.thumbupCount}}</span>
                <span class="count"><MessageCircleIcon class="icon"  size="1x"/> {{article.commentCount}}</span>
            </div>
            <div class="right">
                <span>{{article.createdAt}}</span>
                <BookmarkIcon  class="icon"  size="1x"/>
            </div>
        </div>

        
    </article>
</template>
<script>
import {
  EyeIcon,
  ThumbsUpIcon,
  MessageCircleIcon,
  BookmarkIcon
} from "vue-feather-icons";

export default {
    props: {
        article: {
            type: Object,
        },
    },
     components: { EyeIcon, ThumbsUpIcon, MessageCircleIcon, BookmarkIcon }
}
</script>
<style lang="scss">
article {
  padding: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #eee;
  a {
    color: #222;
  }
  &:nth-child(2n - 1) {
    border-right: 1px solid #eee;
  }
  .head {
    .title {
      display: block;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.4em;
      margin-top: 1px;
      height: 52px;
      margin-bottom: 0;
    }
  }
  .body {
    .content {
      margin-top: 4px;
      color: #222;
      display: block;
      font-size: 14px;
      line-height: 1.25em;
    }
    .info {
      margin-top: 20px;
      display: block;
    }
  }
  .foot {
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    opacity: 0.4;
    .count {
      margin-right: 15px;
      .icon {
        position: relative;
        top: 1px;
      }
    }
  }
}
</style>