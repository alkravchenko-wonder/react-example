const initialState = {
  todos: [],
  loading: true
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload,
      }
    case 'FETCH_LOADER_ON':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_LOADER_OFF':
      return {
        ...state,
        loading: false
      }
    default: return state
  }
}

export default reducer