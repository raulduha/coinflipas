const Confetti = () => {
    return (
      <div className="confetti-container">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
    );
  };
  
  export default Confetti;