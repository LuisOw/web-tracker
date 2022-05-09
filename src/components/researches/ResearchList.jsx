import { useState } from "react";
import ResearchItem from "./ResearchItem";

function ResearchesList(props) {
  const [newRresearchView, setNewResearchView] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newResearch, setNewResearch] = useState({ title: "" });

  const handleChange = (event) => {
    let data = newResearch;
    data[event.target.name] = event.target.value;
    setNewResearch(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setNewResearchView(false);
    props.add(newResearch);
  };

  const showNewResearchView = () => {
    if (newRresearchView) {
      return (
        <form onSubmit={localSubmit}>
          <input
            name="title"
            placeholder="Título"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showAddResearchButton = () => {
    if (!newRresearchView) {
      return (
        <button onClick={() => setNewResearchView(true)}>
          Adicionar pesquisa
        </button>
      );
    }
  };

  const showEditMode = () => {
    if (editMode) {
      return (
        <>
          <p>Editando pesquisa {}</p>
          <form>
            <input name="title" />
          </form>
        </>
      );
    }
  };

  function showResearchHandler() {}

  function showModulesHandler() {}

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Título</th>
            <th>Módulos ativos</th>
            <th>Questionários</th>
          </tr>
          {props.researches.map((research, index) => (
            <ResearchItem
              key={research.id}
              id={research.id}
              title={research.title}
              activeModules={research.activeModules}
              questions={research.questions}
              position={index}
              showResearchHandler={showResearchHandler}
              showModulesHandler={showModulesHandler}
              handleDelete={props.delete}
              handleSave={props.save}
              editSetter={setEditMode}
              //handleEdit={handleEditMode}
            />
          ))}
        </tbody>
      </table>
      {showEditMode()}
      {showNewResearchView()}
      {showAddResearchButton()}
    </>
  );
}

export default ResearchesList;
