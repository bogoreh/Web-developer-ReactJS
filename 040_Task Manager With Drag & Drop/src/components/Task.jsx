import { useDrag } from 'react-dnd'
import { useTasks } from '../contexts/TaskContext'

export default function Task({ task }) {
  const { deleteTask, updateTask } = useTasks()

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const handleDelete = () => {
    deleteTask(task.id)
  }

  const handleToggleComplete = () => {
    updateTask({
      ...task,
      completed: !task.completed
    })
  }

  return (
    <div 
      ref={drag} 
      className={`task ${isDragging ? 'task--dragging' : ''} ${task.completed ? 'task--completed' : ''}`}
    >
      <div className="task-header">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={handleToggleComplete}
        />
        <button onClick={handleDelete} className="delete-btn">×</button>
      </div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  )
}