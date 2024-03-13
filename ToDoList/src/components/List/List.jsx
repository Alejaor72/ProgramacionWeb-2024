import PropTypes from 'prop-types'
import { Task } from './Task/Task'

export const List = ({ items, onToggleCompleted, deleteTask }) => {
  return (
    <section className='list'>

      {items.length !== 0
        ? (items.map(({ id, text, category, completed }) => (
          <Task
            key={id}
            text={text}
            category={category} 
            id={id}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            deleteTask={deleteTask}
          />
          )))
        : 'No Tasks for Show'}

    </section>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}