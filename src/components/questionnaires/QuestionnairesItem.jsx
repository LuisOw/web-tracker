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
        <td>{props.title}</td>
        <td>{JSON.stringify(props.public)}</td>
        <td>
          <button
            className="button_view"
            onClick={() => props.navigate(props.id)}
          >
            Exibit questões
          </button>
        </td>
        <td>
          <div className="flex-container">
            <button
              className="button_edit"
              onClick={() => handleEdit(props.id, props.title, props.public)}
            >
              Editar
            </button>
            <button className="button_delete" onClick={localDelete}>
              Excluir
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default QuestionnairesItem;
