import { initialState } from "./State"

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PROJECT_DETAILS':
      return {...state,
        project: {
          target: action.target,
          days: action.days,
          amounted: action.amounted,
          backers: action.backers
        }
      }
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
    case 'RESET_PLEDGE_DATA':
      return {...state,
        pledge: {
          id: [], name: [], description: [], total: [], minAmount: []
        }
      }
    default:
      return state
  }
}