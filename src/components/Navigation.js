import React from 'react'
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 gap-3">
        <li><Link to="#" className="nav-link px-2 text-white">About</Link></li>
        <li><Link to="#" className="nav-link px-2 text-white">Courses</Link></li>
        <li><Link to="#" className="nav-link px-2 text-white">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navigation