declare let window;

export const common = {
  state: {
    title: "hello wudd"
  },
  reducers: {
    setData(state, payload) {
      return payload;
    }
  },
  effects: dispatch => ({})
};
