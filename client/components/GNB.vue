<template lang="">
    <nav>

        <div class="left-side">
            <nuxt-link to="/">
                <img src="/logo/main.png" alt="블라인드 로고"/>
            </nuxt-link>
             <nuxt-link to="/">
                홈
            </nuxt-link>
             <nuxt-link to="/company">
                기업리뷰
            </nuxt-link>
        </div>

        <div class="right_side">
            <SmallSearchbar/>
            <a @click.prevent="clickWritingButton">글쓰기</a>

            <a @click.prevent="clickLoginButton">로그인</a>

        </div>
        <LoginModal/>
        <WritingModal/>
    </nav>
</template>
<script>
import LoginModal from '@/components/Modal/Login'
import WritingModal from '@/components/Modal/Writing'
import SmallSearchbar from '@/components/GNB/SmallSearchbar'

import {mapState} from 'vuex'
export default {
    components:{
        LoginModal,
        WritingModal,
        SmallSearchbar,
    },
    computed: {
        ...mapState(["user"])
    },
    methods: {
        clickWritingButton(){
            if(!this.user.email)
            {
                this.$store.commit('modal/SET_LOGIN_MODAL_OPEN');
            }
            this.$store.commit("modal/SET_WRITING_MODAL_STATE", true);
        },
        clickLoginButton(){
            if(!this.user.email)
            {
                this.$store.commit('modal/SET_LOGIN_MODAL_OPEN');
            }
        }
    },
    
    
}
</script>
<style lang="scss">
    
</style>