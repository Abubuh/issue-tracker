import React, { useReducer, useState } from "react";
import { Board } from "./Project/Board";
import { Header } from "./Project/Header";
import { Column } from "./Project/Column";
import { Card } from "./Project/Card";
import { AddColumn } from './Project/AddColumn'

export const ProjectView = () => {
    const [cards, setCards] =useState([])
    const [columns, setColumns] =useState([
        {
            title : "component1",
            cards: [
                {
                    id: 1,
                    title : "Create stuff",
                    description : "Do this"
                }
            ]
        },
        {
            title : "component 2",
            cards: [
                {
                    id: 2,
                    title : "Create stuff 2",
                    description: "Do that"
                }
            ]
        }
    ])

    const reducer = (columns, action) => {
        switch (action.type){
            case "CARDS":
                return columns.map((card) => {
                    if (card.id === action.id ){
                        return {...card, title: !card.title};
                    }else{
                        return card;
                    }
                });
                default:
                    return columns
            }
        };

        function Cards() {
            const [cards, dispatch] = useReducer(reducer, columns);

            const handleComplete = (column) => {
              dispatch({ type: "CARDS", id: column.id });
            };
        }

  return (
    <>
      <div>
        <Header></Header>
        <Board>
            {columns.length > 0 && columns.map((column) => {
                
                // function(title, description){
                // const oldCards = column.cards
                // const newCard = {title, description}
                // oldCards.push(newCard)
            return <Column title={column.title}>
                {column.cards?.map((card) =>
                    <Card title={card.title}/>
                )}
            </Column>
            })}
            <AddColumn/>
        </Board>
      </div>
    </>
  );
};
