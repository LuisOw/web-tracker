import { useState } from "react";
import QuestionsList from "../questions/QuestionsList";

function QuestionnairesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  return (
    <>
      <tr>
        <th>{props.title}</th>
        <th>{JSON.stringify(props.public)}</th>
        <th>
          <button onClick={() => props.navigate(props.id)}>
            Exibit questões
          </button>
        </th>
        <button onClick={localDelete}>Excluir</button>
      </tr>
    </>
  );
}

export default QuestionnairesItem;
