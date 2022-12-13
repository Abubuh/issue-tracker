import React, { useEffect, useState } from 'react'
import { AddColumn } from './AddColumn'
import { Column } from './Column'

export const Board = (props) => {

  return (
    <div className='flex h-[45rem] w-screen bg-teal-100 overflow-x-scroll'>
      {props.children}
    </div>
  )
}
