import { useState } from "react";

function QuestionnairesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localTitle, localPublic) => {
    props.setTitle(localTitle);
    props.setPublic(localPublic);
    props.setId(id);
    props.setNewQuestionnaireView(false);
    props.setEditQuestionnaireView(true);
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
        <th>
          <button
            onClick={() => handleEdit(props.id, props.title, props.public)}
          >
            Editar
          </button>
          <button onClick={localDelete}>Excluir</button>
        </th>
      </tr>
    </>
  );
}

export default QuestionnairesItem;
