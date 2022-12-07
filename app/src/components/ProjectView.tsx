import React, { useState } from "react";
import { Board } from "./Project/Board";
import { Header } from "./Project/Header";
import { Component } from "./Project/Component";
import { Card } from "./Project/Card";
import { AddComponent } from './Project/AddComponent'

export const ProjectView = () => {
    const [cards, setCards] =useState([])
    const [components, setComponents] =useState(['component 1', 'component 2'])
  return (
    <>
      <div>
        <Header></Header>
        <Board>
            <Component components={components}>
                <Card/>
            </Component>
            <AddComponent/>
        </Board>
      </div>
    </>
  );
};
