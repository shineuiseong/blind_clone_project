// 모달 상태
export const state = () => ({
  login: { show: false, directLogin: false },
  writing: false,
  create: false,
});

// 상태변화
export const mutations = {
  SET_LOGIN_MODAL_OPEN(state) {
    state.login.show = true;
  },
  SET_LOGIN_MODAL_DIRECT_LOGIN(state) {
    state.login.directLogin = true;
  },
  SET_LOGIN_MODAL_CLOSE(state) {
    state.login = {
      show: false,
      directLogin: false,
    };
  },
  SET_WRITING_MODAL_STATE(state, display) {
    state.writing = display;
  },
  SET_CREATE_MODAL_STATE(state, display) {
    state.create = display;
  },
};

// 상태와 관련된 행동
export const actions = {};
