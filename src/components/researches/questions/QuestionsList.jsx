import QuestionItem from "./QuestionsItem";

function QuestionsList(props) {
  return (
    <>
      <h2>Informações Questionário</h2>
      <table>
        <tr>
          <th>Título</th>
          <th>Público</th>
        </tr>
        <tr>
          <th>{props.questionnaire.title}</th>
          <th>{JSON.stringify(props.questionnaire.public)}</th>
        </tr>
      </table>
      <p>Lista de questões</p>
      <table>
        <tr>
          <th>ID</th>
          <th>Pergunta</th>
          <th>Ordem</th>
          <th>Alternativas</th>
        </tr>
        {props.questionnaire.questions.map((question) => (
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
