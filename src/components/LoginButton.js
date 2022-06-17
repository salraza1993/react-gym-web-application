import React from 'react'

function LoginButton() {
  return (
    <div className="text-end d-flex gap-3">
      <button type="button" className="btn btn-primary border-0 border-radius-0">Sign-up</button>
      <button type="button" className="btn btn-outline-light border-radius-0">Login</button>
    </div>
  )
}

export default LoginButton