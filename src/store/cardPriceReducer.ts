export const cardPriceReducer = (state = 0, action: {type: string, payload: number}) => {
  switch (action.type) {
    case 'setPrice':
      return state + action.payload;
    case 'increasePrice':
      return state + action.payload;
    case 'decreasePrice':
      return state + action.payload;
    default:
      return state
  }
}

export const setPriceAction = (payload: number) => ({type: 'setPrice', payload});
export const increasePriceAction = (payload: number) => ({type: 'increasePrice', payload});
export const decreasePriceAction = (payload: number) => ({type: 'decreasePrice', payload});
