import React from 'react'
import LoginButton from './LoginButton';
import Navigation from './Navigation';
import TopLogo from './TopLogo';
import TopSearch from './TopSearch';

function Header() {
  return (
    <header className="p-3 bg-dark text-white border-0" style={{borderBottom: '1px solid rgba(255, 255, 255, 0.1)'}}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className='d-flex align-items-center'>
            <TopLogo />
            <span className='d-inline-block mx-3 text-secondary'>|</span>
            <Navigation />
          </div>
          <div className='d-flex align-items-center'>
            <TopSearch />
            <LoginButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header