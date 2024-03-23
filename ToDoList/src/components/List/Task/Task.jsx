import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../Button/Button'
import { useTasks } from '../../../hooks/useTasks'


export const Task = ({ text, category, completed, id }) => {
  const { toggleCompleted, deleteTask } = useTasks()
  
  const handleToggleCompleted = (e) => {
    toggleCompleted(id, e.target.checked)
  }

  return (
    <div className='task'>

      <div>
        <input
          type='checkbox'
          checked={completed}
          onChange={(e) => handleToggleCompleted(e)}
        />
        <p>{text}</p>
        <p>{category}</p>
      </div>

      <Button
        type='delete'
        text='Delete'
        id={id}
        handleClick={() => deleteTask(id)}
      />
    </div>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}