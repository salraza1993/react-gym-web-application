import React from 'react'
import { useCardContext } from '../../contexts/CardContext';
import ExerciseCategoryItem from './ExerciseCategoryItem';


function ExerciseCategories() {
  const { exerciseCategoryData } = useCardContext();

  
  return (
    <ul className='exercise-categories-container flex-wrap mb-5'>
        {/* exerciseCategoryData.length === 0 ? <span className>Loading...</span> : */}
      {
        exerciseCategoryData.map((item, index) => {
          return <ExerciseCategoryItem data={item} key={index} />
        })
      }
    </ul>
  )
}

export default ExerciseCategories