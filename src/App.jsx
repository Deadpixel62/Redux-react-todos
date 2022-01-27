import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

function App() {
const [theme, setTheme] = useState("light")

  return (
    <div className="App" data-theme={theme}>
   <h1>TODO LIST</h1>
   <Todo/>
   <TodoList/>
    </div>
  )
}

export default App
