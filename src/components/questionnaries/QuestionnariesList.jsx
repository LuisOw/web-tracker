import QuestionnariesItem from "./QuestionnariesItem";

function QuestionnariesList(props) {
  return (
    <>
      <h2>Questionários</h2>
      <table>
        <tr>
          <th>Título</th>
          <th>Público</th>
          <th>Questões</th>
        </tr>
        {props.questionnaries.map((questionnarie) => (
          <QuestionnariesItem
            key={questionnarie.id}
            id={questionnarie.id}
            title={questionnarie.title}
            public={questionnarie.public}
            questions={questionnarie.questions}
          />
        ))}
      </table>
    </>
  );
}

export default QuestionnariesList;
