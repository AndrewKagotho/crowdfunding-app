import { initialState } from "./State"

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PLEDGES':
      return {...state,
        pledge: {
          id: [...state.pledge.id, action.id],
          name: [...state.pledge.name, action.name],
          description: [...state.pledge.description, action.description],
          total: [...state.pledge.total, action.total],
          minAmount: [...state.pledge.minAmount, action.minAmount]
        }
      }
    default:
      return state
  }
}