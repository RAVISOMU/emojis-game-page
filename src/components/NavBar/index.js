import './index.css'

const NavBar = props => {
  const {topScore, latestScore, isGameInProgress} = props

  if (isGameInProgress) {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="emoji-logo"
            />
            <h1 className="emoji-game-heading">Emoji Game</h1>
          </div>
          <div className="scores-container">
            <p className="score">Score: {latestScore}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        </div>
      </nav>
    )
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-game-heading">Emoji Game</h1>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
