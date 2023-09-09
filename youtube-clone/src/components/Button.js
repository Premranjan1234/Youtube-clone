import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className="bg-gray-200 px-5 py-2 m-5 rounded-lg">{name}</button>
    </div>
  )
}

export default Button