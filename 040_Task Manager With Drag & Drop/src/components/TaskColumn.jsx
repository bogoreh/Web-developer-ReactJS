import { useDrop } from 'react-dnd'
import Task from './Task'
import { useTasks } from '../contexts/TaskContext'

export default function TaskColumn({ status, tasks }) {
  const { moveTask } = useTasks()

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const statusTitles = {
    'todo': 'To Do',
    'in-progress': 'In Progress',
    'done': 'Done'
  }

  return (
    <div 
      ref={drop} 
      className={`column ${isOver ? 'column--over' : ''}`}
    >
      <h2>{statusTitles[status]}</h2>
      <div className="tasks-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}