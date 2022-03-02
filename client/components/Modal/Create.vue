<template lang="">
    <div v-if="modal.create"  class="modal-outside">
        <div id="create-modal">
            <div class="head">
                <h5>회원가입</h5>
                    <a @click.prevent="$store.commit('modal/SET_LOGIN_MODAL_CLOSE')" class = "close-btn">
                    <img src="/icon/close.png" alt="닫기">
                </a>
            </div>
            <div class="body">
              
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{...mapState(['modal'])},

}
</script>
<style lang="scss" scoped>

#create-modal
{
    background: white;
    width: 520px;
    .head{
        color: rgb(34,34,34);
        font-size: 18px;
        font-weight: 700;
        padding:23px 30px;
        border-bottom: solid 1px rgb(223,225,228);
        h5 {
            margin: 0;
        }
    }
    .body{
        font-size: 16px;
        padding: 0 30px;
        line-height: 24px;

        p{
            padding: 20px 0;
            margin:0;
        }
        .info{
            color: rgb(148, 150, 155);
        font-size: 14px;
        letter-spacing: -0.1px;
        margin: 20px 0 30px;
        line-height: 21px;
        }
        .row{
            margin: 20px 0;
            label{
                display: block;
            }
            input{
                width:100%;
                box-sizing: border-box;
                padding: 12px;
            }
        }
        .otp_btn{
              display: flex;
          justify-content: center;
        align-items: center;
        background: rgb(55, 172, 201);
        border: none;
        color: white;
        font-size: 40px;
        font-weight: 400;
        width: 100%;
        height: 82px;
    }

    .login_btn{
               display: flex;
          justify-content: center;
        align-items: center;
        background: rgb(55, 172, 201);
        border: none;
        color: white;
        font-size: 24px;
        font-weight: 400;
        width: 100%;
        height: 64px;
        margin-bottom: 30px;
    }
    .left-time{
        text-align: center;
        color: rgb(55,172,201);
        font-size: 14px;
        font-weight: 700;
        margin-top: 16px;
    }

    }
    .foot{
        color: rgb(160,160,174);
        font-size: 14px;
        line-height: 17.5px;
        text-align: center;
        text-decoration: underline;
        padding: 30px;

    }
    

}
</style>