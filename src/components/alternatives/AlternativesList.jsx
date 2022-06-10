import { FormControl, TextField } from "@mui/material";
import { useState } from "react";
import AlternativesItem from "./AlternativesItem";
import Modal from "../modal/Modal";

function AlternativesList(props) {
  const [newAlternative, setNewAlternative] = useState({
    questionId: props.questionId,
    type: "discursiva",
    text: "",
    value: 0,
  });
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
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
    let data = newAlternative;
    data[event.target.name] = event.target.value;
    setNewAlternative(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setAddOpen(false);
    props.add(newAlternative);
    setNewAlternative({
      questionId: props.questionId,
      type: "discursiva",
      text: "",
      value: 0,
    });
  };

  const submitEdit = (event) => {
    event.preventDefault();
    setEditOpen(false);
    let data = newAlternative;
    data["type"] = type;
    data["text"] = text;
    data["value"] = value;
    data["id"] = id;
    setNewAlternative(data);
    props.edit(newAlternative);
    setNewAlternative({
      questionId: props.questionId,
      type: "discursiva",
      text: "",
      value: 0,
    });
  };

  const showAlternativeView = () => {
    return (
      <>
        <FormControl>
          <select
            defaultValue={"discursiva"}
            name="type"
            onChange={(event) => handleChange(event)}
          >
            <option value="discursiva">Discursiva</option>
            <option value="multiplaEscolha">Multipla escolha</option>
          </select>
          <TextField
            name="text"
            placeholder="Texto da alternativa"
            onChange={(event) => handleChange(event)}
            variant="outlined"
            margin="dense"
            fullWidth
            size="small"
          />
          <TextField
            name="value"
            placeholder="valor"
            type="number"
            onChange={(event) => handleChange(event)}
            variant="outlined"
            margin="dense"
            fullWidth
            size="small"
          />
        </FormControl>
      </>
    );
  };

  const showEditAlternativeView = () => {
    return (
      <FormControl>
        <select
          name="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="discursiva">Discursiva</option>
          <option value="multiplaEscolha">Multipla escolha</option>
        </select>
        <TextField
          name="text"
          placeholder="Texto da alternativa"
          value={text}
          onChange={(event) => setText(event.target.value)}
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          name="value"
          placeholder="valor"
          type="number"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          margin="dense"
          fullWidth
          size="small"
        />
      </FormControl>
    );
  };

  const showAddAlternativeButton = () => {
    return (
      <button
        className="button button_add"
        onClick={() => {
          handleClickAddOpen();
        }}
      >
        Adicionar alternativa
      </button>
    );
  };

  return (
    <>
      <h2>Alternativas</h2>
      {showAddAlternativeButton()}
      <table className="table">
        <tbody>
          <tr>
            <th>Tipo</th>
            <th>Texto</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
          {props.alternatives.map((alternative) => (
            <AlternativesItem
              key={alternative.id}
              id={alternative.id}
              type={alternative.type}
              text={alternative.text}
              value={alternative.value}
              handleDelete={props.delete}
              setType={setType}
              setText={setText}
              setValue={setValue}
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
        data={showAlternativeView}
        submit={localSubmit}
      />
      <Modal
        open={editOpen}
        handleClose={handlEditClose}
        pageName={"pesquisa"}
        data={showEditAlternativeView}
        submit={submitEdit}
      />
    </>
  );
}

export default AlternativesList;
