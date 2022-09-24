import Image from "./images/Charizard.png";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Charizard";
  const pokeCharacteristics = { type: "Fire", move: "Fire Blast" };
  return (
    <div className="body">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: "100", width: "100" }}
        src={Image}
        alt={favPokemon}
      ></img>
      <h2>
        {favPokemon}'s type is{" "}
        <span className="type">{pokeCharacteristics.type}</span> and one of
        their moves is <span className="moves">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
