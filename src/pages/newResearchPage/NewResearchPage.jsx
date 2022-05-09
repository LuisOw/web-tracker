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
      researchInfo: researchInformation.title,
      questionnaireInfo: questionnaireForms,
      questionInfo: questionForms,
      alternativeInfo: alternativeForms,
    };
    return JSON.stringify(researchData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/pesquisas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formatBody(),
    });
    console.log(formatBody());
    setResearchInformation({ title: "" });
    setQuestionnaireForms([]);
    setQuestionForms([]);
    setAlternativeForms([]);
  };

  const handleSubmitTemp = (event) => {
    event.preventDefault();
    console.log(researchInformation);
    fetch("http://127.0.0.1:8000/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: researchInformation.title }),
    });
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
