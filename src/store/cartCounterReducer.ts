export const cartCounterReducer = (
  state: number = 0,
  action: {
    type: string;
  }
) => {
  switch (action.type) {
    case "increaseCounter":
      return ++state;
    case "decreaseCounter":
      return --state;
    default:
      return state;
  }
};

export const increaseCounterAction = () => ({type: "increaseCounter"});
export const decreaseCounterAction = () => ({type: "decreaseCounter"});
