import React from 'react'

import { capitalizeLetters  } from './../../Common'

function ExerciseCategoryItem({ data }) {
  return (
    <li className='category-item'>{ capitalizeLetters(data) } </li>
  )
}

export default ExerciseCategoryItem