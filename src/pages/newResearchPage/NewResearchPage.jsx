import React, { useState } from "react";
import NewQuestionnairePage from "./NewQuestionnairePage";

function NewResearchPage() {
  const [researchInformation, setResearchInformation] = useState();
  const [questionnaireForms, setQuestionnaireForms] = useState([]);
  const [questionForms, setQuestionForms] = useState([]);
  const [alternativeForms, setAlternativeForms] = useState([]);

  const handleChange = (index, setter, event) => {
    let data = questionnaireForms;
    data[index][event.target.name] = event.target.value;
    setter(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResearchInformation();
    setQuestionnaireForms([]);
    console.log(questionnaireForms);
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
            setter={setQuestionnaireForms}
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
