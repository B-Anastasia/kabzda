export const HIDDEN_ACCORDION = "HIDDEN_ACCORDION";
export type StateType = {
  hidden: boolean;
};
export type ActionType = {
  type: string;
  // type: typeof HIDDEN_ACCORDION;
};

export const reducer = (state: StateType, action: ActionType) => {
  console.log("reducer");
  switch (action.type) {
    case "HIDDEN_ACCORDION":
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      throw new Error("Error in the action type");
  }
};
