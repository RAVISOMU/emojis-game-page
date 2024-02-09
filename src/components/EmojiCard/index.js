import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = eachEmoji

  const onSelectEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card-item">
      <button type="button" className="emoji-button" onClick={onSelectEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
