import QuestionnariesItem from "./QuestionnairesItem";

function QuestionnairesList(props) {
  return (
    <>
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
          />
        ))}
      </table>
    </>
  );
}

export default QuestionnairesList;
