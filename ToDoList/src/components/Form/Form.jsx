import PropTypes from 'prop-types'
import { useState } from 'react'

export const Form = ({ addTask }) => {
  const [text, setText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('') 
  const isSubmitDisabled = text.length < 1

  const updateText = (e) => {
    setText(e.target.value)
    //console.log('textUpdate', text)
  }

  const onSubmmit = (e) => {
    e.preventDefault()
    addTask(text, selectedCategory)
    setText('')
  }

  const onChangeText = (e) => {
    updateText(e)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <form onSubmit={onSubmmit} className='form'>
      <input
        type='text'
        placeholder='Task'
        value={text}
        className='task-input'
        onChange={onChangeText}
      />

      <select value={selectedCategory} onChange={handleCategoryChange} className='category-select'>
        <option value=''>Select category</option>
        <option value='home'>Home</option>
        <option value='university'>University</option>
        <option value='personal'>Personal</option>
      </select>

      <input
        className='submit-input'
        type='submit'
        value='Add task'
        disabled={isSubmitDisabled}
      />
    </form>
  )
}

Form.propTypes = {
  addTask: PropTypes.func.isRequired
}
