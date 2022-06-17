import React, { useEffect, useState } from 'react'
import { useCardContext } from '../contexts/CardContext';
import ExerciseCard from './ExerciseCard';

function ExerciseCardContainer() {
  const { exerciseData } = useCardContext();

  const [exerciseCard, setExerciseCard] = useState();
  // useEffect(() => {
  //   setExerciseCard();
  // }, [])

  return (
    <div className="exercise-card-container">
      <h5 style={{textTransform: 'uppercase', letterSpacing: '.25rem'}} className="mb-5 text-center text-secondary">Similer <span className='text-primary'>Equipment Exercises</span></h5>
      <div className="row g-4">
        {
          exerciseData.slice(0, 9).map((card, index) => {
            return <ExerciseCard key={card.id} data={card} />
          })
        }
      </div>
    </div>
  )
}

export default ExerciseCardContainer