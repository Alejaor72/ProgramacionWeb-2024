import { Button } from '../elements/Button/Button'
import PropTypes from 'prop-types'

export const Activity = ({ tasks, handleClick }) => {
  const allTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed === true).length

  return (
    <section className='activityButton'>
      <p>{completedTasks} {completedTasks <= 1 & completedTasks !== 0 ? 'Tarea completada' : 'Tareas completadas'} de {allTasks} </p>
      <Button
        type='clear-completed'
        text='Clear All Completed'
        handleClick={handleClick}
        id={Date.now()}
      />
    </section>
  )
}

Activity.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}