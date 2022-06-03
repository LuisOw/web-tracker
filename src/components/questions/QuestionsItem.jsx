import { useState } from "react";

function QuestionItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localQuery, localOrder) => {
    props.setQuery(localQuery);
    props.setOrder(localOrder);
    props.setId(id);
    props.setNewQuestionView(false);
    props.setEditQuestionView(true);
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
        <th>
          <button
            onClick={() => handleEdit(props.id, props.query, props.order)}
          >
            Editar
          </button>
          <button onClick={localDelete}>Excluir</button>
        </th>
      </tr>
    </>
  );
}

export default QuestionItem;
