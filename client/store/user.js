// 로그인 사용자 상태
export const state = () => ({
  email: null,
  nickname: null,
});

// 상태변화
export const mutations = {
  SET_USER(state, { email, nickname, token }) {
    state.email = email;
    state.nickname = nickname;
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  },
};

// 상태와 관련된 행동
export const actions = {};
