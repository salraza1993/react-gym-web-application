import React from 'react'
import { Link } from 'react-router-dom'
import { capitalizeLetters } from '../Common';

function ExerciseCard({ data }) {
  console.log(data);
  return (
    <div className='col-12 col-lg-6 col-xl-4'>
      <div className="exercise-card-item">
        <div className="card-thumbnail">
          <img src={data.gifUrl} alt="" />
          {/* <i className="fa-solid fa-image"></i> */}
        </div>
        <div className="card-content">
          <h4>{capitalizeLetters(data.name)}</h4>
          <hr />
          <ul className="labels">
            <li className="label label-primary">
              <Link to="#">Body Part: "{capitalizeLetters(data.bodyPart)}`"</Link>
            </li>
            <li className="label label-primary">
              <Link to="#">Equipment: "{capitalizeLetters(data.equipment)}"</Link>
            </li>
            <li className="label label-primary">
              <Link to="#">Target: "{capitalizeLetters(data.target)}"</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExerciseCard