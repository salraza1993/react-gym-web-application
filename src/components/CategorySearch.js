import React from 'react'

function CategorySearch() {
  return (
    <div className='category-search-container mb-5'>
      <form className="category-search d-flex">
        <input type="text" className="form-control form-control-lg bg-dark" placeholder="What are you looking for..." />
        <button className="btn btn-primary px-5">Search</button>
      </form>
    </div>
  )
}

export default CategorySearch