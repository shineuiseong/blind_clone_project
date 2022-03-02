<template lang="">
    <div id="input-comment">
        <CameraIcon size="1x" class="icon"/>
        <div v-if="!enlarge" @click="Setenlarge(true)">댓글을 남겨주세요</div>
        <div v-else class="content-container">
            <textarea v-model="content"></textarea>
            <div class="foot">
                <a @click.prevent="Setenlarge(false)">취소</a>
                <a  :class="[content !== null && content !== '' && 'active']" @click.prevent="uploadComment">업로드</a>
            </div>
        </div>
    </div>
</template>
<script>
import { CameraIcon } from 'vue-feather-icons';
export default {
    components: {
        CameraIcon,
    },
    data() {
        return {
            enlarge: false,
            content:null,   

        }
    },
    props: {
        articleId: {
            type: String,
            required:true
        },
    },
    methods: {
        Setenlarge(bool) {
            this.enlarge = bool
        },
        async uploadComment(){
            const data = await this.$api.$post('/comment/create',{
                content: this.content,
                article: this.articleId

            })
            if(!data) return

            this.content = null
            this.enlarge = false

        }
    },
    
}
</script>
<style lang="scss" scoped>
#input-comment {
  display: flex;
  padding: 20px;
  border: 1px solid #d4d4d4;
  .icon {
    margin-right: 20px;
  }
  .empty {
    line-height: 28px;
    cursor: pointer;
  }
  .content-container {
    width: 100%;
  }
  textarea {
    resize: none;
    width: 100%;
    display: block;
    border: none;
    font-size: 16px;
    min-height: 100px;
    margin-bottom: 20px;
  }
  .foot {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    a {
      color: #d4d4d4;
      &.active {
        color: #222222;
      }
    }
  }
}
</style>