const initialState = {
    visibilityFilter: 'SHOW_ALL',
    todos: []
  }
  
  function todoState(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo;
        })
      default:
        return state;
    }
  }

  function loginPopup (state = false, action) {
    switch (action.type) {
      case 'SHOW_LOGIN_POPUP':
        return true;
      case 'ClOSE_LOGIN_POPUP':
        return false;
      default:
        return state;
    }
  }
  
  function visibilityState (state = 'SHOW_ALL', action) {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
  
  function todoApp(state = initialState, action) {
    return {
      visibilityFilter: visibilityState(
        state.visibilityFilter, action),
      todos: todoState(state.todos, action),
      loginPopup: loginPopup(state.loginPopup, action)
    }
  }

export default todoApp;