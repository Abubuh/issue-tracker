import React, { useState } from "react";
import { Card } from "./Card";

export const Component = (props) => {
    const [cards, setCards] = useState([])


  return (
    <div>
      <div className="border rounded-md my-3 mx-1 bg-green-300 border-green-500 border-2 w-[17rem] h-[43rem]">
        <button className="border bg-emerald-400 border-emerald-400 hover:bg-emerald-500  m-2 p-1 rounded-md text-xs">
          Add card
        </button>
        {props.children}
        <Card addCard={addCard}/>
      </div>
    </div>
  );
};
