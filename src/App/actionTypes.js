const actions = {
  ADD_TODO: function (text) {
    return { type: 'ADD_TODO', text: text}
  },
  TOGGLE_TODO: function (index) {
    return { type: 'TOGGLE_TODO', index: index }
  },
  SET_VISIBILITY_FILTER: function (filter) {
    return { type: 'SET_VISIBILITY_FILTER', filter: filter}
  }
}

export default actions;