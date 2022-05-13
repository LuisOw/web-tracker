import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlternativesItem from "./AlternativesItem";

function AlternativesList(props) {
  const navigate = useNavigate();
  const [newAlternativeView, setNewAlternativeView] = useState(false);
  const [newAlternative, setNewAlternative] = useState({
    questionId: props.questionId,
    type: "",
    text: "",
    value: 0,
  });

  const navigateBack = () => {
    navigate(
      "/pesquisas/" +
        props.researchId +
        "/questionarios/" +
        props.questionnaireId
    );
  };

  const handleChange = (event) => {
    let data = newAlternative;
    data[event.target.name] = event.target.value;
    setNewAlternative(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setNewAlternativeView(false);
    props.add(newAlternative);
  };

  const showAlternativeView = () => {
    if (newAlternativeView) {
      return (
        <form onSubmit={localSubmit}>
          <input
            name="type"
            placeholder="Tipo"
            onChange={(event) => handleChange(event)}
          />
          <input
            name="text"
            placeholder="Texto da alternativa"
            onChange={(event) => handleChange(event)}
          />
          <input
            name="value"
            placeholder="valor"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showAddAlternativeButton = () => {
    if (!newAlternativeView) {
      return (
        <button onClick={() => setNewAlternativeView(true)}>
          Adicionar alternativa
        </button>
      );
    }
  };

  return (
    <>
      <button onClick={navigateBack}>Voltar</button>
      <table>
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
            handleDelete={props.delete}
          />
        ))}
      </table>
      {showAlternativeView()}
      {showAddAlternativeButton()}
    </>
  );
}

export default AlternativesList;
