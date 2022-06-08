import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionnariesItem from "./QuestionnairesItem";

function QuestionnairesList(props) {
  const navigate = useNavigate();
  const [newQuestionnaireView, setNewQuestionnaireView] = useState(false);
  const [editQuestionnaireView, setEditQuestionnaireView] = useState(false);
  const [newQuestionnaire, setNewQuestionnaire] = useState({
    researchId: props.researchId,
    title: "",
    public: "privado",
  });
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [_public, setPublic] = useState("privado");

  const handleChange = (event) => {
    let data = newQuestionnaire;
    data[event.target.name] = event.target.value;
    setNewQuestionnaire(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setNewQuestionnaireView(false);
    props.add(newQuestionnaire);
    setNewQuestionnaire({
      researchId: props.researchId,
      title: "",
      public: "privado",
    });
  };

  const submitEdit = (event) => {
    event.preventDefault();
    let data = newQuestionnaire;
    data["title"] = title;
    data["public"] = _public;
    data["id"] = id;
    setNewQuestionnaire(data);
    setEditQuestionnaireView(false);
    props.edit(newQuestionnaire);
    setNewQuestionnaire({
      researchId: props.researchId,
      title: "",
      public: "privado",
    });
  };

  const navigateBack = () => {
    navigate("/pesquisas");
  };

  const handleNavigate = (id) => {
    navigate("/pesquisas/" + props.researchId + "/questionarios/" + id);
  };

  const showNewQuestionnaireView = () => {
    if (newQuestionnaireView && !editQuestionnaireView) {
      return (
        <form onSubmit={localSubmit}>
          <input
            name="title"
            placeholder="Título"
            onChange={(event) => handleChange(event)}
          />
          <select name="public" onChange={(event) => handleChange(event)}>
            <option defaultValue={"privado"} value="privado">
              Privado
            </option>
            <option value="publico">Público</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showEditQuestionnaireView = () => {
    if (!newQuestionnaireView && editQuestionnaireView) {
      return (
        <form onSubmit={submitEdit}>
          <input
            name="title"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <select
            name="public"
            value={_public}
            onChange={(event) => setPublic(event.target.value)}
          >
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showAddQuestionnaireButton = () => {
    if (!newQuestionnaireView) {
      return (
        <button
          className="button button_add"
          onClick={() => {
            setNewQuestionnaireView(true);
            setEditQuestionnaireView(false);
          }}
        >
          Adicionar questionário
        </button>
      );
    }
  };

  return (
    <>
      <button onClick={navigateBack}>Voltar</button>
      <h2>Questionários</h2>
      <table className="table">
        <tbody>
          <tr>
            <th>Título</th>
            <th>Visibilidade</th>
            <th>Questões</th>
            <th>Ações</th>
          </tr>
          {props.questionnaires.map((questionnaire) => (
            <QuestionnariesItem
              key={questionnaire.id}
              id={questionnaire.id}
              title={questionnaire.title}
              public={questionnaire.public}
              handleDelete={props.delete}
              navigate={handleNavigate}
              setTitle={setTitle}
              setPublic={setPublic}
              setId={setId}
              setNewQuestionnaireView={setNewQuestionnaireView}
              setEditQuestionnaireView={setEditQuestionnaireView}
            />
          ))}
        </tbody>
      </table>
      {showNewQuestionnaireView()}
      {showEditQuestionnaireView()}
      {showAddQuestionnaireButton()}
    </>
  );
}

export default QuestionnairesList;
