import { useState } from "react";

import "./ResearchItem.css";

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
      <th>{props.title}</th>
      <th>
        <button onClick={() => props.showModulesHandler()}>
          Exibir módulos ativos
        </button>
      </th>
      <th>
        <button
          onClick={() => {
            props.navigate(props.id);
          }}
        >
          Exibir questionários
        </button>
      </th>
      <th>
        <button
          className="research_item_button_edit"
          onClick={() => handleEdit(props.id, props.title)}
        >
          Editar
        </button>
        <button className="research_item_button_delete" onClick={localDelete}>
          Excluir
        </button>
      </th>
    </tr>
  );
}

export default ResearchesItem;
