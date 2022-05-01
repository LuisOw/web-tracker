import React, { useState } from "react";

function NewResearchPage() {
  //const [alternativeForms, setAlternativeForms] = useState([]);
  //const [questionnaireForms, setQuestionnaireForms] = useState([]);
  //const [questionForms, setQuestionForms] = useState([]);
  // const [researchTitle, setResearchTitle] = useState("");

  const [research, setResearch] = useState({
    title: "",
    questionnaires: [
      {
        public: false,
        title: "",
        questions: [
          {
            query: "",
            order: 0,
            alternatives: [
              {
                type: "",
                text: "",
                value: 0,
              },
            ],
          },
        ],
      },
    ],
  });

  const handleAddQuestionnaire = () => {
    let data = research;
    data.questionnaires.push({ public: false, title: "", questions: [] });
    //console.log(data.questionnaires);
    setResearch(data);
    console.log(research);
  };

  const handleQuestionnaireChange = (index, event) => {
    let data = research;
    data.questionnaires[index].event.target.name = event.target.value;
    setResearch(data);
  };

  const handleQuestionChange = (indexQuestionnaire, indexQuestion, event) => {
    let data = research;
    data.questionnaires[indexQuestionnaire].questions[
      indexQuestion
    ].event.target.name = event.target.value;
    setResearch(data);
  };

  const handleSubmit = (event) => {
    console.log(research);
    setResearch({});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input name="title" placeholder="título" value={research.title} />
        <button type="button" onClick={() => handleAddQuestionnaire()}>
          Adicionar Questionário
        </button>
        {research.questionnaires.map((questionnaire, index) => (
          <React.Fragment key={index}>
            <div>
              <label htmlFor="title">Título</label>
              <input
                name="title"
                placeholder="título"
                value={questionnaire.title}
                onChange={(event) => handleQuestionnaireChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="public">Público</label>
              <input
                name="public"
                placeholder="público"
                value={questionnaire.public}
                onChange={(event) => handleQuestionnaireChange(index, event)}
              />
            </div>
            <button type="button" onClick="">
              Adicionar Questão
            </button>
            {questionnaire.questions.map((question, questionIndex) => (
              <React.Fragment key={questionIndex}>
                <div>
                  <label htmlFor="query">Pergunta</label>
                  <input
                    name="query"
                    placeholder="pergunta"
                    value={questionnaire.query}
                    onChange={(event) =>
                      handleQuestionChange(index, questionIndex, event)
                    }
                  />
                </div>
                <div>
                  <label htmlFor="order">Ordem</label>
                  <input
                    name="order"
                    placeholder="ordem"
                    value={questionnaire.order}
                    onChange={(event) =>
                      handleQuestionChange(index, questionIndex, event)
                    }
                  />
                </div>
                <button type="button" onClick="">
                  Adicionar Alternativa
                </button>
                {question.alternatives.map((alternative, index) => (
                  <React.Fragment key={index}>
                    <div>
                      <label htmlFor="tipo">Tipo</label>
                      <input
                        name="tipo"
                        placeholder="tipo"
                        value={alternative.tipo}
                        //onChange={(event) => handleChange(index, event)}
                      />
                    </div>
                    <div>
                      <label htmlFor="texto">Texto</label>
                      <input
                        name="texto"
                        placeholder="texto"
                        value={alternative.texto}
                        //onChange={(event) => handleChange(index, event)}
                      />
                    </div>
                    <div>
                      <label htmlFor="valor">Valor</label>
                      <input
                        name="valor"
                        placeholder="valor"
                        value={alternative.valor}
                        //onChange={(event) => handleChange(index, event)}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewResearchPage;

/*
  {
    Research: {
      questionnaires: [
        {
          questions: [
            alternatives: [
              
            ]
          ]
        }
      ]
    }
  }
*/

/**
 * {
 */
