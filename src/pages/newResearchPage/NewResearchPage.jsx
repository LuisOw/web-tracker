import React, { useState } from "react";
import NewQuestionnairePage from "./NewQuestionnairePage";

function NewResearchPage() {
  const [researchInformation, setResearchInformation] = useState();
  const [questionnaireForms, setQuestionnaireForms] = useState([]);
  const [questionForms, setQuestionForms] = useState([]);
  const [alternativeForms, setAlternativeForms] = useState([]);

  const handleChange = (index, forms, setter, event) => {
    let data = forms;
    data[index][event.target.name] = event.target.value;
    setter(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResearchInformation();
    setQuestionnaireForms([]);
    setQuestionForms([]);
    setAlternativeForms([]);
    console.log(questionnaireForms, questionForms, alternativeForms);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input name="title" placeholder="título" />
        {questionnaireForms.map((questionnarie, index) => (
          <NewQuestionnairePage
            key={index}
            myKey={index}
            changer={handleChange}
            questionnarie={questionnarie}
            questionnaireForms={questionnaireForms}
            questionnaireSetter={setQuestionnaireForms}
            questionForms={questionForms}
            questionSetter={setQuestionForms}
            alternativeForms={alternativeForms}
            alternativeSetter={setAlternativeForms}
          />
        ))}
        <button
          type="button"
          onClick={() =>
            setQuestionnaireForms((prev) => [
              ...prev,
              { public: "", title: "", order: 0 },
            ])
          }
        >
          Adicionar Questionário
        </button>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default NewResearchPage;
