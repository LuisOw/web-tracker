import { useState } from "react";

function ResearchesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localTitle) => {
    props.setTitle(localTitle);
    props.setId(id);
    props.setNewResearchView(false);
    props.setEditResearchView(true);
  };

  return (
    <tr>
      <td>{props.title}</td>
      <td>
        <button
          className="button button_view"
          onClick={() => props.showModulesHandler()}
        >
          Exibir módulos ativos
        </button>
      </td>
      <td>
        <button
          className="button button_view"
          onClick={() => {
            props.navigate(props.id);
          }}
        >
          Exibir questionários
        </button>
      </td>
      <td>
        <div className="flex-container">
          <button
            className="button button_edit"
            onClick={() => handleEdit(props.id, props.title)}
          >
            Editar
          </button>
          <button className="button button_delete" onClick={localDelete}>
            Excluir
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ResearchesItem;
