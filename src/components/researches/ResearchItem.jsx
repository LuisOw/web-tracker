function ResearchesItem(props) {
  function showResearchHandler() {
    console.log(props.title);
    props.showResearchHandler();
  }

  return (
    <tr>
      <th>{props.title}</th>
      <th>{JSON.stringify(props.usageTimeCapture)}</th>
      <th>
        <button onClick={showResearchHandler}>Exibir perguntas</button>
      </th>
    </tr>
  );
}

export default ResearchesItem;
