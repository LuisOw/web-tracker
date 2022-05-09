import { useState } from "react";

function ResearchesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const localSave = () => {
    props.handleEdit();
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
        <button onClick={() => props.showResearchHandler(props.questions)}>
          Exibir questionários
        </button>
      </th>
      <th>
        <button onClick={() => props.editSetter(true)}>Editar</button>
        <button onClick={localDelete}>Excluir</button>
      </th>
    </tr>
  );
}

export default ResearchesItem;
