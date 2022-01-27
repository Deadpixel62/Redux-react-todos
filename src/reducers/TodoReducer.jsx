

const initialState = {
  todos: [],
  isToggled : false,
};

  
   



const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SetTodo":
      console.log("****************")
      console.log(action.payload)
      console.log("****************")
      return {
        todos : action.payload
      }

    case "AddTodo":
      console.log(state.todos);
      return {
        todos: [...state.todos, action.payload],
      };

    case "RemoveTodo":
      console.log(action.payload);
      return {
        todos: state.todos.filter((el) => el.id != action.payload),
      };

    case "ToggleTodo":
      console.log(action.payload.completed);

      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            let completed = !todo.completed;
            return { ...todo, completed };
          }
          return todo;
        }),
      };

    case "DeleteCompleted":
      return {
        todos: state.todos.filter((el) => el.completed === false),
      };

    case "ToggleAll" :
       if(!state.isToggled){
        
        return {
        isToggled : !state.isToggled,
        todos: state.todos.map((todo)=> {
          let completed = true;
          return {...todo, completed}
         
        })
      }
      } else {
          return {
            isToggled: !state.isToggled,
            todos: state.todos.map((todo) => {
              let completed = false;
              return { ...todo, completed };
            }),
          };
      }
     
        

    default:
      return state;
  }
};

export default todoReducer;
