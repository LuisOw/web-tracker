function NewAlternative(props) {
  return (
    <>
      <div>
        <p>---------Alternativa--------</p>
      </div>
      <div>
        <label htmlFor="type">Tipo</label>
        <input
          name="type"
          placeholder="tipo"
          onChange={(event) => props.changer(props.myKey, props.setter, event)}
        />
      </div>
      <div>
        <label htmlFor="text">Texto</label>
        <input
          name="text"
          placeholder="texto"
          onChange={(event) => props.changer(props.myKey, props.setter, event)}
        />
      </div>
      <div>
        <label htmlFor="value">Valor</label>
        <input
          name="value"
          placeholder="0"
          onChange={(event) => props.changer(props.myKey, props.setter, event)}
        />
      </div>
    </>
  );
}

export default NewAlternative;
