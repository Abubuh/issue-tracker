import React, { useState } from "react";

export const Column = ({title, columnNumber, dispatch, ...props}) => {

  const addCard = () => {
    const card = {
        id: self.crypto.randomUUID() ,
        title: "New card",
        description: "None",
        columnNumber: columnNumber
    }
    dispatch({type:"addCard", card})
}

  return (
    <div>
      <div className="border rounded-md my-3 mx-1 bg-green-300 border-green-500 border-2 w-[17rem] h-[43rem] overflow-auto">
        <input
        className="bg-green-300 w-[10.25rem] ml-2"
        defaultValue={title}/>
        <button onClick={addCard} className="border bg-emerald-400 border-emerald-400 hover:bg-emerald-500 ml-1 my-2 p-1 rounded-md text-xs">
          Add card
        </button>
        {props.children}
      </div>
    </div>
  );
};

//green 300 background
//emerald 300 header
//emerald 400 buttons
//
//mini mammut
//