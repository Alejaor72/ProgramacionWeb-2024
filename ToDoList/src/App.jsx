import './App.css'
import React, { useState, useEffect } from 'react'
import { Activity, Header,Form, Filters ,List } from './components'

function App() {
  const [tasks, setTasks] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('')
  
  useEffect( () => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text, category) => { 
    const newTask = {
      id: Date.now(),
      text,
      category,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (idTask) => {
    setTasks(tasks.filter(task => task.id !== idTask))
  }

  const handleToggleCompleted = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    }))
  }

  const filteredTasks = tasks.filter(task => {
    if (selectedFilter === 'completed') {
      return task.completed
    }
    if (selectedFilter === 'pending') {
      return !task.completed
    }
    if (selectedCategory && selectedCategory !== 'all') {
      return task.category === selectedCategory
    }
    return task
  })

  const changeFilterList = (e) => {
    const filterValue = e.target.value
    setSelectedFilter(filterValue)
  }

  const changeCategory = (e) => { 
    const categoryValue = e.target.value
    setSelectedCategory(categoryValue)
  }

  const clearAllCompletedTasks = () => {
    setTasks(tasks.filter(task => task.completed !== true))
  }

  return (
    <>
      <Header />
      <div className='Activity'>
        <Filters
        selectedFilter={selectedFilter}
        changeFilterList={changeFilterList}
        selectedCategory={selectedCategory} 
        changeCategory={changeCategory}
        />
        <Activity
        tasks={tasks}
        handleClick={clearAllCompletedTasks}
        />
      </div>
      <Form
        addTask={addTask}
        selectedCategory={selectedCategory}
      />
      <List
        items={filteredTasks}
        onToggleCompleted={handleToggleCompleted}
        deleteTask={deleteTask}
      />
    </>
  )
}

export default App
