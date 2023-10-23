import React from 'react';
import { GameBoard } from '../GameBoard/GameBoard';
import './SimonGame.css';

export const SimonGame = () => {
  return (
    <div>
      <section id='simon-section' className='simon-game-outer-container'>
        <h2 className='simon-title'>Simon Game</h2>
        <GameBoard />
      </section>
      <div className="simon-clip-path-bottom"></div>
    </div>
  )
}
