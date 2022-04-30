import ResearchItem from "./ResearchItem";

function ResearchesList(props) {
  function showResearchHandler() {}

  function showModulesHandler() {}

  return (
    <>
      <table>
        <tr>
          <th>Título</th>
          <th>Módulos ativos</th>
          <th>Questionários</th>
        </tr>
        {props.researches.map((research) => (
          <ResearchItem
            key={research.id}
            id={research.id}
            title={research.title}
            activeModules={research.activeModules}
            questions={research.questions}
            showResearchHandler={showResearchHandler}
            showModulesHandler={showModulesHandler}
          />
        ))}
      </table>
    </>
  );
}

export default ResearchesList;
