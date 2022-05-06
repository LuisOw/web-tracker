import { useState } from "react";
import NewAlternative from "./NewAlternative";

function NewQuestionPage(props) {
  const showAlternativeForms = (alternative, index) => {
    if (alternative.questionId === props.myKey) {
      return (
        <NewAlternative
          key={index}
          myKey={index}
          changer={props.changer}
          alternative={alternative}
          alternativeSetter={props.alternativeSetter}
          alternativeForms={props.alternativeForms}
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
          onChange={(event) =>
            props.changer(
              props.myKey,
              props.questionForms,
              props.questionSetter,
              event
            )
          }
        />
      </div>
      <div>
        <label htmlFor="order">Ordem</label>
        <input
          name="order"
          placeholder="0"
          onChange={(event) =>
            props.changer(
              props.myKey,
              props.questionForms,
              props.questionSetter,
              event
            )
          }
        />
      </div>
      {props.alternativeForms.map((alternative, index) =>
        showAlternativeForms(alternative, index)
      )}
      <button
        type="button"
        onClick={() =>
          props.alternativeSetter((prev) => [
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
