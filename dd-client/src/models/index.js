export default {
  namespace: 'index',

  state: {
    active: 0,
    activeNews: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: 'save' });
    }
  },

  reducers: {
    switchNav(state, action) {
      return { ...state, ...action.payload };
    },
    showNewsDetail(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
