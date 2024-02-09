import './index.css'

const WinOrLoseCard = props => {
  const {winOrLoss, latestScore, totalScore, restartGame} = props

  if (winOrLoss) {
    return (
      <div className="result-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="result-image"
        />
        <div className="details">
          <h1 className="text">You Won</h1>
          <p className="best-score-text">Best Score</p>
          <p className="result">
            {latestScore}/{totalScore}
          </p>
          <button
            type="button"
            className="play-again-button"
            onClick={restartGame}
          >
            Play Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="result-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="result-image"
      />
      <div className="details">
        <h1 className="text">You Lose</h1>
        <p className="best-score-text">Score</p>
        <p className="result">
          {latestScore}/{totalScore}
        </p>
        <button
          type="button"
          className="play-again-button"
          onClick={restartGame}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
