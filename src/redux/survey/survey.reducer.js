import { ADD_SURVEY } from "./survey.types";

const INITIAL_STATE = {
  surveys: {},
};

const surveyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SURVEY:
      return Object.assign({}, state, {
        surveys: {
          ...state.surveys,
          [action.payload._id]: action.payload,
        },
      });
    default:
      return state;
  }
};

export default surveyReducer;
