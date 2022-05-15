import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlternativesItem from "./AlternativesItem";

function AlternativesList(props) {
  const navigate = useNavigate();
  const [newAlternativeView, setNewAlternativeView] = useState(false);
  const [editAlternativeView, setEditAlternativeView] = useState(false);
  const [newAlternative, setNewAlternative] = useState({
    questionId: props.questionId,
    type: "discursiva",
    text: "",
    value: 0,
  });
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

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

  const submitEdit = (event) => {
    event.preventDefault();
    let data = newAlternative;
    data["type"] = type;
    data["text"] = text;
    data["value"] = value;
    data["id"] = id;
    setNewAlternative(data);
    setEditAlternativeView(false);
    props.edit(newAlternative);
    setNewAlternative({
      questionId: props.questionId,
      type: "discursiva",
      text: "",
      value: 0,
    });
  };

  const showAlternativeView = () => {
    if (newAlternativeView && !editAlternativeView) {
      return (
        <form onSubmit={localSubmit}>
          <select name="type" onChange={(event) => handleChange(event)}>
            <option value="discursiva">Discursiva</option>
            <option value="multiplaEscolha">Multipla escolha</option>
          </select>
          <input
            name="text"
            placeholder="Texto da alternativa"
            onChange={(event) => handleChange(event)}
          />
          <input
            name="value"
            placeholder="valor"
            type="number"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showEditAlternativeView = () => {
    if (!newAlternativeView && editAlternativeView) {
      return (
        <form onSubmit={submitEdit}>
          <select
            name="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="discursiva">Discursiva</option>
            <option value="multiplaEscolha">Multipla escolha</option>
          </select>
          <input
            name="text"
            placeholder="Texto da alternativa"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <input
            name="value"
            placeholder="valor"
            type="number"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showAddAlternativeButton = () => {
    if (!newAlternativeView) {
      return (
        <button
          onClick={() => {
            setNewAlternativeView(true);
            setEditAlternativeView(false);
          }}
        >
          Adicionar alternativa
        </button>
      );
    }
  };

  return (
    <>
      <button onClick={navigateBack}>Voltar</button>
      <table>
        <tbody>
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
              setType={setType}
              setText={setText}
              setValue={setValue}
              setId={setId}
              setNewAlternativeView={setNewAlternativeView}
              setEditAlternativeView={setEditAlternativeView}
            />
          ))}
        </tbody>
      </table>
      {showAlternativeView()}
      {showEditAlternativeView()}
      {showAddAlternativeButton()}
    </>
  );
}

export default AlternativesList;
