import { OPEN_POPUP, CLOSE_POPUP } from '../actions/popupAction';

const initialState = {
  show: false,
  selected: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_POPUP:
      return { ...state, show: true, selected: payload.movie };

    case CLOSE_POPUP:
      return { ...state, show: false };
    default:
      return state;
  }
};
