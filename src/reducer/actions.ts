export enum ACTIONS_ENUM {
  ADD = "ADD",
  SORT = "SORT",
  DELETE = "DELETE",
}

export type TActions =
  | {
      type: ACTIONS_ENUM.DELETE;
      payload: string;
    }
  | {
      type: ACTIONS_ENUM.SORT;
    }
  | {
      type: ACTIONS_ENUM.ADD;
      payload: number;
    };
