import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [gameState, setGameState] = useState({
    score1: 0,
    color1: 'red',
    score2: 0,
    color2: 'blue',
  })
  
  const handleScore = (player, amount) => {
    setGameState(prev => 
      (player === 1 ? { ...prev, score1: prev.score1 - amount } : { ...prev, score2: prev.score2 - amount })
    )
  }

  const handleColor = (player, color) => {
    setGameState(prev => 
      (player === 1 ? { ...prev, color1: color } : { ...prev, color2: color })
    )
  }

  const handleReset = () => {
    setGameState({
      score1: 0,
      color1: gameState.color1,
      score2: 0,
      color2: gameState.color2,
    })
}
  return (
    <>
      <Head>
        <title>score.me | Contador de Pontos</title>
        <meta name="description" content="Contador de pontos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <div className="player1" style={{backgroundColor: gameState.color1}}>
          <div className="wrapper">
            <div className="info">
              <span>TIME A</span>
              <span>|</span>
              <div className="color-wrapper">
                <span>COR:</span>
                <input style={{marginLeft: '.5rem'}} type='color' onChange={(e) => handleColor(1, e.target.value)}/>
              </div>
            </div>
            <div className="controls">
              <div className="lower-btns">
                <button onClick={(e) => handleScore(1,1)} className="btn">-1</button>
                <button onClick={(e) => handleScore(1,3)} className="btn">-3</button>
                <button onClick={(e) => handleScore(1,5)} className="btn">-5</button>
                <button onClick={(e) => handleScore(1,10)} className="btn">-10</button>
              </div>
              <span className='score'>{gameState.score1}</span>
              <div className="add-btns">
                  <button onClick={(e) => handleScore(1,-1)} className="btn">+1</button>
                  <button onClick={(e) => handleScore(1,-3)} className="btn">+3</button>
                  <button onClick={(e) => handleScore(1,-5)} className="btn">+5</button>
                  <button onClick={(e) => handleScore(1,-10)} className="btn">+10</button>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleReset} className="reset-btn">RESET!</button>
        <div className="player2" style={{backgroundColor: gameState.color2}}>
          <div className="wrapper">
            <div className="info">
              <span>TIME B</span>
              <span>|</span>
              <div className="color-wrapper">
                <span>COR:</span>
                <input type='color' style={{marginLeft: '.5rem'}} onChange={(e) => handleColor(2, e.target.value)}/>
              </div>
            </div>
            <div className="controls">
              <div className="lower-btns">
                <button onClick={(e) => handleScore(2,1)} className="btn">-1</button>
                <button onClick={(e) => handleScore(2,3)} className="btn">-3</button>
                <button onClick={(e) => handleScore(2,5)} className="btn">-5</button>
                <button onClick={(e) => handleScore(2,10)} className="btn">-10</button>
              </div>
              <span className='score'>{gameState.score2}</span>
              <div className="add-btns">
                  <button onClick={(e) => handleScore(2,-1)} className="btn">+1</button>
                  <button onClick={(e) => handleScore(2,-3)} className="btn">+3</button>
                  <button onClick={(e) => handleScore(2,-5)} className="btn">+5</button>
                  <button onClick={(e) => handleScore(2,-10)} className="btn">+10</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
