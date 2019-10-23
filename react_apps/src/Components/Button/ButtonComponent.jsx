import React from 'react';

export default function ButtonComponent(variant,text){
  return (
      <button className={variant}>
          {text}
      </button>
  )
}