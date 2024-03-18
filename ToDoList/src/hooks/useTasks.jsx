import { useState, useEffect } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(window.localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, category) => {
    const newTask = {
      id: Date.now(),
      text,
      category,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (idTask) => {
    setTasks(tasks.filter((task) => task.id !== idTask));
  };

  const toggleCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const changeFilter = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  const changeCategory = (categoryValue) => {
    setSelectedCategory(categoryValue);
  };

  const clearAllCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === 'completed') {
      return task.completed;
    }
    if (selectedFilter === 'pending') {
      return !task.completed;
    }
    if (selectedCategory && selectedCategory !== 'all') {
      return task.category === selectedCategory;
    }
    return task;
  });

  return {
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
  };
};

export default useTasks;
