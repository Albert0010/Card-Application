import { TCard } from "../components/Card";
import uuid from "react-uuid";
import { ACTIONS_ENUM, TActions } from "./actions";

export const reducer = (state: TCard[], action: TActions): TCard[] => {
  switch (action.type) {
    case ACTIONS_ENUM.ADD: {
      const { payload } = action;
      return [
        ...state,
        {
          _id: uuid(),
          number: payload,
          isDeleted: false,
        },
      ];
    }
    case ACTIONS_ENUM.DELETE: {
      const { payload } = action;
      return state.filter(({ _id }) => _id !== payload);
    }
    case ACTIONS_ENUM.SORT: {
      return [...state.sort((a, b) => a.number - b.number)];
    }
    default: {
      return state;
    }
  }
};
