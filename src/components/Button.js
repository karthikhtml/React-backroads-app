import React from 'react'

function buttonEvent() {
  const navButton = document.getElementById('nav-toggle-button-item')
  if (navButton.classList.contains('nav-toggle-item')) {
    navButton.classList.remove('nav-toggle-item')
  } else {
    navButton.classList.add('nav-toggle-item')
  }
}

const Button = () => {
  return (
    <button
      type="button"
      className="nav-toggle"
      id="nav-toggle"
      onClick={buttonEvent}
    >
      <i className="fas fa-bars"></i>
    </button>
  )
}

export default Button
