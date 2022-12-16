
import React from 'react'

interface iCard{
    name: string;
    age: string | number;
    hobby?: string;
    }

const Card = ({name, age, hobby}: iCard ) => {
  return (
    <div>
        <h4>{name}</h4>
        { (typeof age === "number") ? <p>{age.toString()}</p> : <p>{age}</p> }
        <p>{hobby}</p>
    </div>
  )
}

export default Card