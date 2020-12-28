const INITIAL_STATE = {
  current_user: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
