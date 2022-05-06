import { useState } from "react";
import QuestionsList from "../questions/QuestionsList";

function QuestionnariesItem(props) {
  const [viewQuestions, setViewQuestions] = useState(false);

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
      </tr>
      {viewQuestions ? <QuestionsList questions={props.questions} /> : null}
    </>
  );
}

export default QuestionnariesItem;
