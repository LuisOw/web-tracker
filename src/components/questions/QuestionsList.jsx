import { useNavigate } from "react-router-dom";
import QuestionItem from "./QuestionsItem";

function QuestionsList(props) {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/pesquisas/" + props.researchId + "/questionarios");
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
            alternatives={question.alternatives}
          />
        ))}
      </table>
    </>
  );
}

export default QuestionsList;
