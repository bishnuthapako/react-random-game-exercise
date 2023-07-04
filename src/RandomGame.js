import React, {useState} from 'react'

function RandomGame() {
    const random =()=>  Math.floor(Math.random()* 10)+1;
    const [guess, setGuess]=useState(random());
    const [target, setTarget]=useState(random());
    const [guessCount, setGuessCount] = useState(0)
    const restart =()=>{
      setTarget(random())
      setGuess(0)
      setGuessCount(0)
    }
    const makeGuess =()=>{
      setGuess(random());
      setGuessCount(guessCount + 1);
    }
    const isWinner = guess === target;
  return (

    <div>
        <h2>Your Target No:{target}</h2>
        <h2 className={isWinner ? "text-danger" : "text-success"}>Your Guess No: {guess}</h2>
        <p>Guess #{guessCount}</p>
        {isWinner ? <><h1 className='bg-success text-light'>Game Over</h1> <br /> <button onClick={restart} type="button" className="btn btn-danger btn-lg">New Game</button></> : <button onClick={makeGuess} type="button" className="btn btn-danger btn-lg">Start</button>}
        
    </div>

  )
}

export default RandomGame