import { useState } from "react";

function Selector() {
  const [song, setSong] = useState("holaaaa");

  return (
    <form>
      <div>
        <label htmlFor="song">Buscar Canción</label>
        <input
          type="text"
          id="song"
          placeholder="Sorry Justin Bieber"
          value={song}
          onChange={(event) => setSong(event.target.value)}
        />
      </div>
      <select name="pets" id="pet-select">
        <option value="">--Por favor, seleccione una opción--</option>
        <option value="dog">Rock</option>
        <option value="cat">Cumbia</option>
        <option value="hamster">Pop</option>
        <option value="parrot">Rock alternativo</option>
      </select>
      <button type="submit">Buscar</button>
      <h2>{song}</h2>
    </form>
  );
}

export default Selector;
