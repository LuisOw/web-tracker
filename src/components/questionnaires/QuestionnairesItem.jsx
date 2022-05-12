import { useState } from "react";
import QuestionsList from "../questions/QuestionsList";

function QuestionnairesItem(props) {
  const [viewQuestions, setViewQuestions] = useState(false);

  const localDelete = () => {
    props.handleDelete(props.id);
  };

  return (
    <>
      <tr>
        <th>{props.title}</th>
        <th>{JSON.stringify(props.public)}</th>
        <th>
          <button onClick={() => setViewQuestions(!viewQuestions)}>
            {viewQuestions ? "Esconder questões" : "Exibir questões"}
          </button>
        </th>
        <button onClick={localDelete}>Excluir</button>
      </tr>
    </>
  );
}

export default QuestionnairesItem;
