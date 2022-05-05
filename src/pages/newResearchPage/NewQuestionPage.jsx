import { useState } from "react";
import NewAlternative from "./NewAlternative";

function NewQuestionPage(props) {
  const [alternativeForms, setAlternativeForms] = useState([]);

  const handleChange = (index, setter, event) => {
    let data = alternativeForms;
    data[index][event.target.name] = event.target.value;
    setter(data);
  };

  const showAlternativeForms = (alternative, index) => {
    if (alternative.questionId === props.myKey) {
      return (
        <NewAlternative
          key={index}
          myKey={index}
          changer={handleChange}
          alternative={alternative}
          setter={setAlternativeForms}
        />
      );
    }
  };

  return (
    <>
      <div>
        <p>---------Questão--------</p>
      </div>
      <div>
        <label htmlFor="query">Pergunta</label>
        <input
          name="query"
          placeholder="pergunta"
          onChange={(event) => props.changer(props.myKey, props.setter, event)}
        />
      </div>
      <div>
        <label htmlFor="order">Ordem</label>
        <input
          name="order"
          placeholder="0"
          onChange={(event) => props.changer(props.myKey, props.setter, event)}
        />
      </div>
      {alternativeForms.map((alternative, index) =>
        showAlternativeForms(alternative, index)
      )}
      <button
        type="button"
        onClick={() =>
          setAlternativeForms((prev) => [
            ...prev,
            { questionId: props.myKey, type: "", text: "", value: 0 },
          ])
        }
      >
        Adicionar Alternativa
      </button>
    </>
  );
}

export default NewQuestionPage;
