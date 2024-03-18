import './App.css';
import React from 'react';
import { Header, Form, Filters, List, Activity } from './components';
import useTasks from './hooks/useTasks';

function App() {
  const {
    tasks,
    selectedFilter,
    selectedCategory,
    filteredTasks,
    addTask,
    deleteTask,
    toggleCompleted,
    changeFilter,
    changeCategory,
    clearAllCompletedTasks,
  } = useTasks();

  return (
    <>
      <Header />
      <div className='Activity'>
        <Filters
          selectedFilter={selectedFilter}
          changeFilter={changeFilter} 
          selectedCategory={selectedCategory}
          changeCategory={changeCategory}
        />
        <Activity tasks={tasks} handleClick={clearAllCompletedTasks} />
      </div>
      <Form addTask={addTask} selectedCategory={selectedCategory} changeCategory={changeCategory} />
      <List
        items={filteredTasks}
        onToggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
