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
    case "addColumn":
      return [...columns, action.column]
    default:
      return columns;
  }
};

export const ProjectView = () => {
  const [columns, dispatch] = useReducer(reducer, [
    {
      title: "Column 1",
      cards: [
        {
          id: 1,
          title: "Create stuff",
          description: "Do this",
        },
      ],
    },
    {
      title: "Column 2",
      cards: [
        {
          id: 2,
          title: "Create stuff 2",
          description: "Do that",
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <Header></Header>
        <Board>
          {columns.length > 0 &&
            columns.map((column, index) => {
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
          <AddColumn dispatch={dispatch}/>
        </Board>
      </div>
    </>
  );
};
