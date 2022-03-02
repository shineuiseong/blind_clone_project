<template lang="">
    <div v-if="modal.create"   class="modal-outside">
        <div id="create-modal"  >
            <div class="head">
                <h5>회원가입</h5>
                    <a @click.prevent="$store.commit('modal/SET_CREATE_MODAL_STATE',false)" class = "close-btn">
                    <img src="/icon/close.png" alt="닫기">
                    </a>
                    
            </div>
            <div class="body">
                    <div class="row">
                        <label for="user-email">이메일</label>
                        <input id="user-email" type="email" v-model="email"/>    
                    </div>
                    <div class="row">
                        <label for="user-nickname">이름</label>
                        <input  id="ser-nickname" type="nickname" v-model="nickname"/>
                    </div>
                    <div class="row">
                        <label for="user-password">비밀번호</label>
                        <input  id="user-password" type="password" v-model="password"/>
                    </div>
                      <div class="row">
                        <label for="user-passwordConfirm">비밀번호 확인</label>
                        <input  id="user-passwordconfirm" type="password" v-model="passwordconfirm"/>
                        
                    </div>
                     <label for="user-company">회사 선택 :</label>
                     <span>{{companyname}}</span>
                    <div class="dropdown" v-if="companylist.length > 0">
                        <a class="current-select" @click.prevent="isCompanySelected =!isCompanySelected">
                            <span>{{companylist[currentSelectedCompany].title}}</span>
                            <ChevronDownIcon :class="[isCompanySelected && 'rotated', 'down-icon']" />
                        </a>
                        
                        <div v-if="isCompanySelected" class="board-container">
                            <div
                                v-for="(c, i) in companylist"
                                :key="c._id"
                                class="company-item"
                                @click="clickCompany(i,c.name)"
                                >{{c.name}}
                            </div>
                        
                        </div>
                    </div>
                    <span class="confirmbtn">
                        <a @click="createUser()">등록</a>
                    </span>
                    
                    
            </div>
            <LoginModal/>
            
        </div>
    
    </div>
</template>
<script>
import {
  ChevronDownIcon
} from "vue-feather-icons";
import LoginModal from "@/components/Modal/Login";
import {mapState} from 'vuex'
export default {
    computed:{...mapState(['modal']),
    ...mapState(['user']),},
    components: {
        ChevronDownIcon,
        LoginModal,
        
    },
    data() {
        return {
            email: '',
            password: '',
            nickname: '',
            passwordconfirm:'',
            companylist:[],
            currentSelectedCompany: 0,
            isCompanySelected: false,
            companyname:'',
            showConfirmModal: false,
            confirmTitle: "",

        }
    },
    created () {
        this.getCompanylist();
    },
    methods: {
        //  const { email, password, nickname, company } = req.body
        async createUser() {
            const data =  await this.$api.$post('/user/create',{
                email: this.email,
                password: this.password,
                nickname: this.nickname,
                company: this.companylist[this.currentSelectedCompany]._id

            })
            if(!data) return
            console.log(data)
            this.$store.commit("modal/SET_CREATE_MODAL_STATE", false);
            this.$store.commit('modal/SET_LOGIN_MODAL_DIRECT_LOGIN');
            this.$store.commit('modal/SET_LOGIN_MODAL_OPEN');
        },
        async getCompanylist(){
            const data = await this.$api.$get('/company/list')
            if(!data) return
            this.companylist = data
        },
        clickCompany(index,name) {
            this.companyname = name
            this.currentSelectedCompany = index;
            this.isCompanySelected = false;
        },
    },
}
</script>
<style lang="scss" scoped>

#create-modal
{
  width: 450px;
  height: auto;
  background: white;
  height: 610px;
      .dropdown {
    width: inherit;
    user-select: none;
    .current-select {
      height: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
      border-bottom: 1px solid #d4d4d4;
      .down-icon {
        transition: 0.3s ease-in-out;
        &.rotated {
          transform: rotate(180deg);
        }
      }
    }
    .company-container {
      position: absolute;
      overflow-y: auto;
      width: inherit;
      border-bottom: 1px solid #d4d4d4;
      height: 100%;
      max-height: 252px;
    }
    .company-item {
      padding: 12px 20px 11px;
      font-size: 12px;
      border-bottom: 1px solid #f6f7fa;
      cursor: pointer;
      background: white;
      &:hover {
        color: #fff;
        background: #da3238;
      }
    }
  }

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

        .confirmbtn{
             display: flex;
            margin-top: 30px;
            justify-content: flex-end;
        }

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