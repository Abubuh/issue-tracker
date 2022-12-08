import React, { useEffect, useState } from 'react'
import { AddColumn } from './AddColumn'
import { Column } from './Column'

export const Board = (props) => {

  return (
    <div className='flex h-[46rem] bg-teal-100'>
      {props.children}
    </div>
  )
}
