import { useState } from 'react'
import { useTasks } from '../contexts/TaskContext'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { addTask } = useTasks()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    
    addTask({
      title,
      description,
      status: 'todo',
      completed: false
    })
    
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}