//--Adding a task
const ADD_TODO = 'ADD_TODO'
//--Marking a task as complete
const TOGGLE_TODO = 'TOGGLE_TODO'
//--Filtering tasks
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const todos = (state = [], action) => {
    // write Reducers to handle the actions.
    switch (action.type) {
      case ADD_TODO:
        
        return [...state, 
        {
          text: action.text,
          completed: false,
          id: state.length
        }];

      case TOGGLE_TODO:
        return state.map((todo) => {
          if (action.id === todo.id) {
            return Object.assign({}, todo, {completed: !todo.completed})
          }
          return todo;
        })
    
      default:
        return state;
    }
  }
  
  export default todos