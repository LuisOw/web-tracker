import AlternativesItem from "./AlternativesItem";

function AlternativesList(props) {
  return (
    <>
      <tr>
        <th>Tipo</th>
        <th>Texto</th>
        <th>Valor</th>
      </tr>
      {props.alternatives.map((alternative) => (
        <AlternativesItem
          key={alternative.id}
          id={alternative.id}
          type={alternative.type}
          text={alternative.text}
          value={alternative.value}
        />
      ))}
    </>
  );
}

export default AlternativesList;
