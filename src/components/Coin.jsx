import './Coin.css';

const Coin = ({ result, isFlipping }) => {
  return (
    <div className={`coin ${isFlipping ? 'flipping' : ''} ${result || 'initial'}`}>
      <div className="coin-face front">  
        <span>💋 Kiss</span>
      </div>
      <div className="coin-face back">
      <span>🤚 Slap</span>
      </div>
    </div>
  );
};

export default Coin;