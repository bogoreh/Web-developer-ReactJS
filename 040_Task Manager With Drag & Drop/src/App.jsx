import { TaskProvider } from './contexts/TaskContext'
import TaskManager from './components/TaskManager'

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1>Task Manager</h1>
        <TaskManager />
      </div>
    </TaskProvider>
  )
}

export default App