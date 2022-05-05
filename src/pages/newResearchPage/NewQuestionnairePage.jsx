import { useState } from "react";
import NewQuestionPage from "./NewQuestionPage";

function NewQuestionnairePage(props) {
  const [questionForms, setQuestionForms] = useState([]);

  const handleChange = (index, setter, event) => {
    let data = questionForms;
    data[index][event.target.name] = event.target.value;
    setter(data);
  };

  const showQuestionForms = (question, index) => {
    if (question.questionnaireId === props.myKey) {
      return (
        <NewQuestionPage
          key={index}
          myKey={index}
          changer={handleChange}
          question={question}
          setter={setQuestionForms}
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
          onChange={(event) => props.changer(props.myKey, props.setter, event)}
        />
      </div>
      <div>
        <label htmlFor="title">Título</label>
        <input
          name="title"
          placeholder="título"
          onChange={(event) => props.changer(props.myKey, props.setter, event)}
        />
      </div>
      <div>
        <label htmlFor="order">Ordem</label>
        <input
          name="order"
          placeholder="ordem"
          onChange={(event) => props.changer(props.myKey, props.setter, event)}
        />
      </div>
      {questionForms.map((question, index) =>
        showQuestionForms(question, index)
      )}
      <button
        type="button"
        onClick={() =>
          setQuestionForms((prev) => [
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
