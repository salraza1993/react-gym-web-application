import React from 'react'
import { Link } from 'react-router-dom';

import ReactLogo from '../assets/images/gymat_light-1.svg';

function TopLogo() {
  return (
    <div>
      <Link to='/' className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-4">
        <img src={ReactLogo} alt="" />
      </Link>
    </div>
  )
}

export default TopLogo