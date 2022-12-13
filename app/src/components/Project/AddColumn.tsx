import React from 'react'

export const AddColumn = ({dispatch}) => {

  const addColumn = () => {
    const column = {
        title: "New column",
        cards: [{
          id: self.crypto.randomUUID(),
          title: "New card",
          description: "None"
        }]
  }
  dispatch({type:"addColumn", column})
  }

  return (
    <div>
        <button onClick={addColumn} className='mx-2 my-4 w-7 rounded-md border border-emerald-400 hover:bg-emerald-300 bg-emerald-200'> + </button>
    </div>
  )
}
