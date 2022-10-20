import { useEffect, useState } from "react";

const COLORS = [
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#ffeaa7",
  "#fab1a0",
  "#ff7675",
  "#fd79a8",
  "#b2bec3",
  "#c7ecee",
  "#badc58",
  "#ea8685",
  "#f8a5c2",
  "#778beb",
  "#32ff7e",
];

const PokemonCard = (prop) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(prop.url)
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          setPokemon(response);
        }
      });
  }, []);

  return (
    pokemon && (
      <div
        className="card w-full justify-self-center"
        style={{
          background: COLORS[Math.floor(Math.random() * COLORS.length)],
        }}
      >
        <div className="card-body text-left">
          <img src={pokemon?.sprites.front_default} height={75} width={75} />
          <div id="info">
            <p className="text-sm font-light m-0">
              #{String(pokemon?.id).padStart(3, "0")}
            </p>
            <h2 className="card-title capitalize m-0">{prop.name}</h2>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2 justify-between"
            id="stats"
          >
            {pokemon?.stats.map((stat) => (
              <p key={stat.stat.name} className="text-xs font-light">
                {stat.stat.name}:{" "}
                <span className="font-medium">{stat.base_stat}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default PokemonCard;
