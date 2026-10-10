function Hamster({ hunger }) {
    let mood;
let image;

if (hunger > 70) {
  mood = "starving";
  image = "/hungryImg.png";
} else if (hunger > 30) {
  mood = "hungry";
  image = "/hunger.png";
} else {
  mood = "happy";
  image = "/fullImg.png";
}
  
return (
  <section className="hamster-section">
    <h1>hiee, im hamsterruuw!</h1>

    <div className="hamster-frame">
      <img
        className="hamster-image"
        src={image}
        alt={`Hamster is ${mood}`}
      />
    </div>

    <span className="mood-badge">
      {mood === "happy" ? "♡ happy baby ♡" :
       mood === "hungry" ? "♡ lil hungry ♡" :
       "♡ feed me please ♡"}
    </span>
  </section>
);

}

export default Hamster;