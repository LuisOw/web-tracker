import { useState } from "react";
import NewQuestionPage from "./NewQuestionPage";

function NewQuestionnairePage(props) {
  const showQuestionForms = (question, index) => {
    if (question.questionnaireId === props.myKey) {
      return (
        <NewQuestionPage
          key={index}
          myKey={index}
          changer={props.changer}
          question={question}
          questionSetter={props.questionSetter}
          questionForms={props.questionForms}
          alternativeSetter={props.alternativeSetter}
          alternativeForms={props.alternativeForms}
        />
      );
    }
  };

  return (
    <>
      <div>
        <p>---------Questionário--------</p>
      </div>
      <div>
        <label htmlFor="public">Público</label>
        <input
          name="public"
          placeholder="nome"
          onChange={(event) =>
            props.changer(
              props.myKey,
              props.questionnaireForms,
              props.questionnaireSetter,
              event
            )
          }
        />
      </div>
      <div>
        <label htmlFor="title">Título</label>
        <input
          name="title"
          placeholder="título"
          onChange={(event) =>
            props.changer(
              props.myKey,
              props.questionnaireForms,
              props.questionnaireSetter,
              event
            )
          }
        />
      </div>
      <div>
        <label htmlFor="order">Ordem</label>
        <input
          name="order"
          placeholder="ordem"
          onChange={(event) =>
            props.changer(
              props.myKey,
              props.questionnaireForms,
              props.questionnaireSetter,
              event
            )
          }
        />
      </div>
      {props.questionForms.map((question, index) =>
        showQuestionForms(question, index)
      )}
      <button
        type="button"
        onClick={() =>
          props.questionSetter((prev) => [
            ...prev,
            { questionnaireId: props.myKey, query: "", order: 0 },
          ])
        }
      >
        Adicionar Questão
      </button>
    </>
  );
}

export default NewQuestionnairePage;
