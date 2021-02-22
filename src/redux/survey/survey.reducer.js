import { ADD_SURVEY, FETCH_SURVEYS } from "./survey.types";

const INITIAL_STATE = {
  surveys: {},
};

const surveyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SURVEY:
      return {
        ...state,
        [action.payload._id]: action.payload,
      };

    case FETCH_SURVEYS:
      return {
        ...state.surveys,
        ...action.payload.reduce((newObj, eleObj) => {
          newObj[eleObj._id] = eleObj;
          return newObj;
        }, {}),
      };

    default:
      return state;
  }
};

export default surveyReducer;
