import QuestionItem from "./QuestionsItem";

function QuestionsList(props) {
  return (
    <>
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
    </>
  );
}

export default QuestionsList;
