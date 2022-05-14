import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionItem from "./QuestionsItem";

function QuestionsList(props) {
  const navigate = useNavigate();
  const [newQuestionView, setNewQuestionView] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    questionnaireId: props.questionnaireId,
    query: "",
    order: 0,
  });

  const navigateBack = () => {
    navigate("/pesquisas/" + props.researchId + "/questionarios");
  };

  const handleNavigate = (id) => {
    navigate(
      "/pesquisas/" +
        props.researchId +
        "/questionarios/" +
        props.questionnaireId +
        "/questoes/" +
        id
    );
  };

  const handleChange = (event) => {
    let data = newQuestion;
    data[event.target.name] = event.target.value;
    setNewQuestion(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setNewQuestionView(false);
    props.add(newQuestion);
  };

  const showQuestionView = () => {
    if (newQuestionView) {
      return (
        <form onSubmit={localSubmit}>
          <input
            name="query"
            placeholder="Pergunta"
            onChange={(event) => handleChange(event)}
          />
          <input
            name="order"
            placeholder="Ordem"
            type="number"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showAddQuestionButton = () => {
    if (!newQuestionView) {
      return (
        <button onClick={() => setNewQuestionView(true)}>
          Adicionar questão
        </button>
      );
    }
  };

  return (
    <>
      <button onClick={navigateBack}>Voltar</button>
      <table>
        <tr>
          <th>ID</th>
          <th>Pergunta</th>
          <th>Ordem</th>
          <th>Alternativas</th>
        </tr>
        {props.questions.map((question) => (
          <QuestionItem
            key={question.id}
            id={question.id}
            query={question.query}
            order={question.order}
            handleDelete={props.delete}
            navigate={handleNavigate}
          />
        ))}
      </table>
      {showQuestionView()}
      {showAddQuestionButton()}
    </>
  );
}

export default QuestionsList;
