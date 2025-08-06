import React, { createContext, useContext, useReducer } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TaskContext = createContext()

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id ? action.payload : task
        )
      }
    case 'MOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id 
            ? { ...task, status: action.payload.status } 
            : task
        )
      }
    default:
      return state
  }
}

export const TaskProvider = ({ children }) => {
  const [savedTasks, saveTasks] = useLocalStorage('tasks', {
    tasks: []
  })

  const [state, dispatch] = useReducer(taskReducer, savedTasks)

  // Save to localStorage whenever tasks change
  React.useEffect(() => {
    saveTasks(state)
  }, [state, saveTasks])

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        ...task,
        id: Date.now().toString()
      }
    })
  }

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id })
  }

  const updateTask = (task) => {
    dispatch({ type: 'UPDATE_TASK', payload: task })
  }

  const moveTask = (id, status) => {
    dispatch({ type: 'MOVE_TASK', payload: { id, status } })
  }

  return (
    <TaskContext.Provider value={{
      tasks: state.tasks,
      addTask,
      deleteTask,
      updateTask,
      moveTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}