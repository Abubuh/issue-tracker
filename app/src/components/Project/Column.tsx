import React, { useState } from "react";

export const Column = ({title, columnNumber, dispatch, ...props}) => {

  const addCard = () => {
    console.log("Helo")
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
      <div className="border rounded-md my-3 mx-1 bg-green-300 border-green-500 border-2 w-[17rem] h-[43rem]">
        {title}
        <button onClick={addCard} className="border bg-emerald-400 border-emerald-400 hover:bg-emerald-500  m-2 p-1 rounded-md text-xs">
          Add card
        </button>
        {props.children}
      </div>
    </div>
  );
};
function dispatch(arg0: { type: string; card: { id: string; title: string; description: string; }; }) {
  throw new Error("Function not implemented.");
}

