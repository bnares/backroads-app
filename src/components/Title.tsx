import React from 'react'


export type Title = {
    firstWord:string,
    secondWord: string,
}

const Title = (props:Title) => {
  return (
    <div className="section-title">
        <h2>{props.firstWord} <span>{props.secondWord}</span></h2>
    </div>
  )
}

export default Title
