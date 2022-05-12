import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionnariesItem from "./QuestionnairesItem";

function QuestionnairesList(props) {
  const navigate = useNavigate();
  const [newQuestionnaireView, setNewQuestionnaireView] = useState(false);
  const [newQuestionnaire, setNewQuestionnaire] = useState({
    researchId: props.researchId,
    title: "",
    public: "",
  });

  const handleChange = (event) => {
    let data = newQuestionnaire;
    data[event.target.name] = event.target.value;
    setNewQuestionnaire(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setNewQuestionnaireView(false);
    props.add(newQuestionnaire);
  };

  const navigateBack = () => {
    navigate("/pesquisas");
  };

  const handleNavigate = (id) => {
    navigate("/pesquisas/" + props.researchId + "/questionarios/" + id);
  };

  const showNewQuestionnaireView = () => {
    if (newQuestionnaireView) {
      return (
        <form onSubmit={localSubmit}>
          <input
            name="title"
            placeholder="Título"
            onChange={(event) => handleChange(event)}
          />
          <input
            name="public"
            placeholder="Público"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showAddQuestionnaireButton = () => {
    if (!newQuestionnaireView) {
      return (
        <button onClick={() => setNewQuestionnaireView(true)}>
          Adicionar questionário
        </button>
      );
    }
  };

  return (
    <>
      <button onClick={navigateBack}>Voltar</button>
      <h2>Questionários</h2>
      <table>
        <tr>
          <th>Título</th>
          <th>Público</th>
          <th>Questões</th>
        </tr>
        {props.questionnaires.map((questionnaire) => (
          <QuestionnariesItem
            key={questionnaire.id}
            id={questionnaire.id}
            title={questionnaire.title}
            public={questionnaire.public}
            questions={questionnaire.questions}
            handleDelete={props.delete}
            navigate={handleNavigate}
          />
        ))}
      </table>
      {showNewQuestionnaireView()}
      {showAddQuestionnaireButton()}
    </>
  );
}

export default QuestionnairesList;
