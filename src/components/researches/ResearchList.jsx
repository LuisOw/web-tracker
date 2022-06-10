import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ResearchItem from "./ResearchItem";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";

function ResearchesList(props) {
  const [newResearch, setNewResearch] = useState({ title: "" });
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleClickAddOpen = () => {
    setAddOpen(true);
  };

  const handlAddClose = () => {
    setAddOpen(false);
  };

  const handleClickEditOpen = () => {
    setEditOpen(true);
  };

  const handlEditClose = () => {
    setEditOpen(false);
  };

  const handleChange = (event) => {
    let data = newResearch;
    data[event.target.name] = event.target.value;
    setNewResearch(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setAddOpen(false);
    props.add(newResearch);
    setNewResearch({ title: "" });
  };

  const submitEdit = (event) => {
    event.preventDefault();
    setEditOpen(false);
    let data = newResearch;
    data["title"] = title;
    data["id"] = id;
    setNewResearch(data);
    props.edit(newResearch);
    setNewResearch({ title: "" });
  };

  const showNewResearchView = () => {
    return (
      <form>
        <TextField
          name="title"
          placeholder="Título"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
      </form>
    );
  };

  const showEditResearchView = () => {
    return (
      <form>
        <TextField
          name="title"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
      </form>
    );
  };

  const showAddResearchButton = () => {
    return (
      <button
        className="button button_add"
        onClick={() => {
          handleClickAddOpen();
        }}
      >
        Adicionar pesquisa
      </button>
    );
  };

  const navigateHandler = (id) => {
    navigate("/pesquisas/" + id + "/questionarios");
  };

  function showModulesHandler() {}

  return (
    <>
      {showAddResearchButton()}
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
              modalOpen={handleClickEditOpen}
            />
          ))}
        </tbody>
      </table>
      <Modal
        open={addOpen}
        handleClose={handlAddClose}
        pageName={"pesquisa"}
        data={showNewResearchView}
        submit={localSubmit}
      />
      <Modal
        open={editOpen}
        handleClose={handlEditClose}
        pageName={"pesquisa"}
        data={showEditResearchView}
        submit={submitEdit}
      />
    </>
  );
}

export default ResearchesList;
