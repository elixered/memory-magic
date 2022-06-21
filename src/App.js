import { useState, useEffect } from 'react';
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "https://elixered.github.io/memory-magic/img/helmet-1.png", matched: false },
  { "src": "https://elixered.github.io/memory-magic/img/potion-1.png", matched: false },
  { "src": "https://elixered.github.io/memory-magic/img/ring-1.png", matched: false },
  { "src": "https://elixered.github.io/memory-magic/img/scroll-1.png", matched: false },
  { "src": "https://elixered.github.io/memory-magic/img/shield-1.png", matched: false },
  { "src": "https://elixered.github.io/memory-magic/img/sword-1.png", matched: false }
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCards = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random()) }))

    setCards(shuffledCards)
    setTurns(0)
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare two cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(cards
          .map((card) =>
            (card.src === choiceOne.src || card.src === choiceTwo.src) ?
              { ...card, matched: true } : card))
        resetTurn()
      }
      else {
        setTimeout(() => {
          resetTurn()
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => {
    shuffleCards()
  }, [])


  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(turns + 1)
    setDisabled(false)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App