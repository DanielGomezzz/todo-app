export const todoReducer = (initialState = [], action) => {
  
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payLoad]
      
      
  
    default:
      return initialState;
  }
}

