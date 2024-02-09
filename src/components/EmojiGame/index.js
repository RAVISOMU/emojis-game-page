import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, isGameInProgress: true, selectedEmojiList: []}

  gameOver = latestScore => {
    const {topScore} = this.state
    let updatedTopScore = topScore
    if (latestScore > topScore) {
      updatedTopScore = latestScore
    }

    this.setState({topScore: updatedTopScore, isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {selectedEmojiList} = this.state
    if (selectedEmojiList.includes(id)) {
      this.gameOver(selectedEmojiList.length)
    } else {
      if (selectedEmojiList.length === emojisList.length - 1) {
        this.gameOver(emojisList.length)
      }
      this.setState(prevState => ({
        selectedEmojiList: [...prevState.selectedEmojiList, id],
      }))
    }
  }

  restartGame = () => {
    this.setState({isGameInProgress: true, selectedEmojiList: []})
  }

  displayEmojisList = () => {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <ul className="emojis-card-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            eachEmoji={eachEmoji}
            key={eachEmoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  displayWinOrLoseCard = () => {
    const {emojisList} = this.props
    const {selectedEmojiList} = this.state

    return (
      <div className="win-or-lose-card">
        <div className="card-container">
          <WinOrLoseCard
            winOrLoss={emojisList.length === selectedEmojiList.length}
            latestScore={selectedEmojiList.length}
            totalScore={emojisList.length}
            restartGame={this.restartGame}
          />
        </div>
      </div>
    )
  }

  render() {
    const {topScore, selectedEmojiList, isGameInProgress} = this.state
    return (
      <div className="emoji-game-page-bg-container">
        <NavBar
          latestScore={selectedEmojiList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        {isGameInProgress
          ? this.displayEmojisList()
          : this.displayWinOrLoseCard()}
      </div>
    )
  }
}

export default EmojiGame
