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
        <td>{props.id}</td>
        <td>{props.query}</td>
        <td>{props.order}</td>
        <td>
          <button
            className="button_view"
            onClick={() => props.navigate(props.id)}
          >
            Exibir alternativas
          </button>
        </td>
        <td>
          <button
            className="button_edit"
            onClick={() => handleEdit(props.id, props.query, props.order)}
          >
            Editar
          </button>
          <button className="button_delete" onClick={localDelete}>
            Excluir
          </button>
        </td>
      </tr>
    </>
  );
}

export default QuestionItem;
