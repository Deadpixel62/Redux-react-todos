export const SetTodo = (apiList) => {
  return {
    type: 'SetTodo',
    payload: apiList
  }
}

export const AddTodo = (input) => {
  return {
    type: 'AddTodo',
    payload: input 
  }  
};

export const RemoveTodo = (id) => {
 return { 
   type: 'RemoveTodo',
   payload: id 
}
}

export const ToggleTodo = (id) => {
  return {
    type: 'ToggleTodo',
    payload: id
  }
}

export const DeleteCompleted = () => {
  return {
    type: 'DeleteCompleted',
  }
}

export const ToggleAll = () => {
  return {
    type: 'ToggleAll'
  }
}

