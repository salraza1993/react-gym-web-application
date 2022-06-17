import React from 'react'
import ExerciseCategoreis from './../components/categories/ExerciseCategories';
import CategorySearch from './CategorySearch';
import ExerciseCardContainer from './ExerciseCardContainer.';


function HomeExerciseSection() {
  return (
    <section className="home-exersize-section">
      <div className="container">
        <h2 className='text-center mb-5'>
          Awesome Exercises <br /> you must know!
          <span className="breaker"></span>
        </h2>
        <ExerciseCategoreis />
        <CategorySearch />
        <ExerciseCardContainer />
      </div>
    </section>
  )
}

export default HomeExerciseSection