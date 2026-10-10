function HungerBar({ hunger, setHunger }) {
  
return (
  <section className="hunger-section">
    <div className="hunger-heading">
      <span>🍓</span>
      <span>little tummy status</span>
    </div>

    <div className="hunger-track">
      <div
        className="hunger-fill"
        style={{ width: `${hunger}%` }}
      />
    </div>

    <p className="hunger-number">
      tummy level: <strong>{hunger}/100</strong>
    </p>

    <div className="button-group">
      <button
        className="feed-button"
        onClick={() =>
          setHunger(h => Math.max(h - 10, 0))
        }
      >
        🍓 feed me
      </button>

      <button
        className="hungry-button"
        onClick={() =>
          setHunger(h => Math.min(h + 10, 100))
        }
      >
        + get hungry
      </button>
    </div>
  </section>
);

}

export default HungerBar;