import { useTasks } from '../contexts/TaskContext'
import TaskColumn from './TaskColumn'
import TaskForm from './TaskForm'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const statuses = ['todo', 'in-progress', 'done']

export default function TaskManager() {
  const { tasks } = useTasks()

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="task-manager">
        <TaskForm />
        
        <div className="columns-container">
          {statuses.map(status => (
            <TaskColumn 
              key={status}
              status={status}
              tasks={tasks.filter(task => task.status === status)}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  )
}