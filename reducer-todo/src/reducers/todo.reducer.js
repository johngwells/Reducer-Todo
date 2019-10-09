export const initialState = {
  completed: false,
  id: Date.now(),
  title: 'walk the dog',
  todo: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_TODO':
      const newTodo = {
        title: action.payload,
        id: Date.now(),
        completed: false
      }
      return {
        ...state,
        todo: [...state.todo, newTodo]
      }
    case 'CLEAR_COMPLETED':
        return {
          ...state,
          completed: !state.completed
        };
    default:
      return state;
  }
};
