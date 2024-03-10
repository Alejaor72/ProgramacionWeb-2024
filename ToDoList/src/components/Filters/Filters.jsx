import PropTypes from 'prop-types'

export const Filters = ({ selectedFilter, changeFilterList, selectedCategory, changeCategory }) => {
  const checkedInput = (value) => selectedFilter === value

  const handleFilterChange = (e) => {
    changeFilterList(e)
  }

  const handleCategoryChange = (e) => {
    changeCategory(e)
  }

  return (
    <section className='filters-section'>

      <div>
        <label>Filter by:</label>
        <select onChange={handleFilterChange} value={selectedFilter}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='pending'>Pending</option>
        </select>
      </div>

      <div>
        <label>Categories:</label>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value=''>All</option>
          <option value='home'>Home</option>
          <option value='university'>University</option>
          <option value='personal'>Personal</option>
        </select>
      </div>

    </section>
  )
}

Filters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  changeFilterList: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired
}
