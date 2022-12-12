import React, { useReducer, useState } from "react";
import { Board } from "./Project/Board";
import { Header } from "./Project/Header";
import { Column } from "./Project/Column";
import { Card } from "./Project/Card";
import { AddColumn } from "./Project/AddColumn";

const reducer = (columns, action) => {
  switch (action.type) {
    case "addCard":
      return columns.map((column, index) => {
        if (index + 1 === action.card.columnNumber) {
          return {...column, cards: [...column.cards, action.card]}
        }
        return column;
      });

    default:
      return columns;
  }
};

export const ProjectView = () => {
  const [cards, setCards] = useState([]);
  const [columns, dispatch] = useReducer(reducer, [
    {
      title: "component1",
      cards: [
        {
          id: 1,
          title: "Create stuff",
          description: "Do this",
        },
      ],
    },
    {
      title: "component 2",
      cards: [
        {
          id: 2,
          title: "Create stuff 2",
          description: "Do that",
        },
      ],
    },
  ]);

  // const addCard = () => {
  //     console.log("Helo")
  //     const card = {
  //         id: self.crypto.randomUUID() ,
  //         title: "New card",
  //         description: "None"
  //     }
  //     dispatch({type:"addCard", card})
  // }

  return (
    <>
      <div>
        <Header></Header>
        <Board>
          {columns.length > 0 &&
            columns.map((column, index) => {
              // function(title, description){
              // const oldCards = column.cards
              // const newCard = {title, description}
              // oldCards.push(newCard)
              return (
                <Column
                  title={column.title}
                  dispatch={dispatch}
                  columnNumber={index + 1}
                >
                  {column.cards?.map((card) => {
                    return <Card title={card.title} />;
                  })}
                </Column>
              );
            })}
          <AddColumn />
        </Board>
      </div>
    </>
  );
};
