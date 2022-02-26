export const cartCounterReducer = (
  state: number = 0,
  action: {
    type: string;
  }
) => {
  switch (action.type) {
    case "increaseCounter":
      return ++state;
    default:
      return state;
  }
};

export const cartCounterAction = () => ({
  type: "increaseCounter"
});
