import React from 'react'

import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex m-2">
      <Button name="All"/>
      <Button name="Mixes"/>
      <Button name="Music"/>
      <Button name="News"/>
      <Button name="Cricket"/>
      <Button name="Live"/>
      <Button name="Cooking"/>
      <Button name="Bollywood Movies"/>

    </div>
  )
}

export default ButtonList