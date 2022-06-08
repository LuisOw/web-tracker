import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ResearchItem from "./ResearchItem";

function ResearchesList(props) {
  const [newRresearchView, setNewResearchView] = useState(false);
  const [editResearchView, setEditResearchView] = useState(false);
  const [newResearch, setNewResearch] = useState({ title: "" });
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    let data = newResearch;
    data[event.target.name] = event.target.value;
    setNewResearch(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setNewResearchView(false);
    props.add(newResearch);
    setNewResearch({ title: "" });
  };

  const submitEdit = (event) => {
    event.preventDefault();
    let data = newResearch;
    data["title"] = title;
    data["id"] = id;
    setNewResearch(data);
    setEditResearchView(false);
    props.edit(newResearch);
    setNewResearch({ title: "" });
  };

  const showNewResearchView = () => {
    if (newRresearchView && !editResearchView) {
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

  const showEditResearchView = () => {
    if (!newRresearchView && editResearchView) {
      return (
        <form onSubmit={submitEdit}>
          <input
            name="title"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      );
    }
  };

  const showAddResearchButton = () => {
    if (!newRresearchView) {
      return (
        <button
          className="button button_add"
          onClick={() => {
            setNewResearchView(true);
            setEditResearchView(false);
          }}
        >
          Adicionar pesquisa
        </button>
      );
    }
  };

  const navigateHandler = (id) => {
    navigate("/pesquisas/" + id + "/questionarios");
  };

  function showModulesHandler() {}

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <th>Título</th>
            <th>Módulos ativos</th>
            <th>Questionários</th>
            <th>Ações</th>
          </tr>
          {props.researches.map((research) => (
            <ResearchItem
              key={research.id}
              id={research.id}
              title={research.title}
              activeModules={research.activeModules}
              questions={research.questions}
              navigate={navigateHandler}
              showModulesHandler={showModulesHandler}
              handleDelete={props.delete}
              setTitle={setTitle}
              setId={setId}
              setNewResearchView={setNewResearchView}
              setEditResearchView={setEditResearchView}
            />
          ))}
        </tbody>
      </table>
      {showNewResearchView()}
      {showEditResearchView()}
      {showAddResearchButton()}
    </>
  );
}

export default ResearchesList;
