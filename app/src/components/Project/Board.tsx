import React from 'react'
import { Component } from './Component'

export const Board = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>>}) => {
  return (
    <div className='h-[46rem] bg-teal-100'>{props.children}
      <Component addComponent={addComponent}/>
    </div>
  )
}
