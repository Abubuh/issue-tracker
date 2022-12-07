import React, { useEffect, useState } from 'react'
import { AddComponent } from './AddComponent'
import { Component } from './Component'

export const Board = (props) => {
  const [components, setComponents] = useState([])

  return (
    <div className='flex h-[46rem] bg-teal-100'>
      {props.children}
    </div>
  )
}
