import React, { useState } from "react";
import NewQuestionnairePage from "./NewQuestionnairePage";

function NewResearchPage() {
  const [researchInformation, setResearchInformation] = useState({ title: "" });
  const [questionnaireForms, setQuestionnaireForms] = useState([]);
  const [questionForms, setQuestionForms] = useState([]);
  const [alternativeForms, setAlternativeForms] = useState([]);

  const handleChange = (index, forms, setter, event) => {
    let data = forms;
    data[index][event.target.name] = event.target.value;
    setter(data);
  };

  const formatBody = () => {
    const researchData = {
      reseachInfo: researchInformation,
      questionnaireInfo: questionnaireForms,
      questionInfo: questionForms,
      alternativeInfo: alternativeForms,
    };
    return JSON.stringify(researchData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("placeholderUrl/research", { method: "POST", body: formatBody() });
    console.log(
      researchInformation,
      questionnaireForms,
      questionForms,
      alternativeForms
    );
    setResearchInformation({ title: "" });
    setQuestionnaireForms([]);
    setQuestionForms([]);
    setAlternativeForms([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input
          name="title"
          placeholder="título"
          onChange={(event) => {
            let data = researchInformation;
            data[event.target.name] = event.target.value;
            setResearchInformation(data);
          }}
        />
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
