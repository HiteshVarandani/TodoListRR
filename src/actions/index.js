
//Write actions for

//--Adding a task
const ADD_TODO = 'ADD_TODO'
//--Marking a task as complete
const TOGGLE_TODO = 'TOGGLE_TODO'
//--Filtering tasks
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const addTodo = text => ({
  type: ADD_TODO, text, id: 0
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER, filter
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO, id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_REMAINING: 'SHOW_REMAINING'
}