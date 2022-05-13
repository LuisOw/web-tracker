import { useState } from "react";

function QuestionItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  return (
    <>
      <tr>
        <th>{props.id}</th>
        <th>{props.query}</th>
        <th>{props.order}</th>
        <th>
          <button onClick={() => props.navigate(props.id)}>
            Exibir alternativas
          </button>
        </th>
        <button onClick={localDelete}>Excluir</button>
      </tr>
    </>
  );
}

export default QuestionItem;
