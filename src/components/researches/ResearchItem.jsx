function ResearchesItem(props) {
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
    </tr>
  );
}

export default ResearchesItem;
