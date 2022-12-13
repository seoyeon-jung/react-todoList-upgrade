// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO"; // 진행중-완료 toggle
const GET_TODO_ID = "GET_TODO_ID"; // id 값을 받아오기 (상세보기에 필요함)

// Action Creator
// add
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// delete
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// toggle
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

// id 값 받아와서 조회
export const getTodoID = (payload) => {
  return {
    type: GET_TODO_ID,
    payload,
  };
};

// initial state (기능 작동을 위한 초기 setting - 나중에 삭제)
const initialState = {
  todos: [
    {
      id: "1",
      title: "React",
      text: "숙련 과제 하기",
      check: false,
    },
  ],
};

// todos 전체
const Todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, check: !todo.check } : todo
        ),
      };
    case GET_TODO_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default Todos;
