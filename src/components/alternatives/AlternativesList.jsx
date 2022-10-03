import {
  FormControl,
  TextField,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import AlternativesItem from "./AlternativesItem";
import Modal from "../modal/Modal";
import { StyledButton, StyledTableCell } from "../StyledTableComponents";
import BasicBreadcrumbs from "../navegation/Breadcrumbs";

function AlternativesList(props) {
  const [newAlternative, setNewAlternative] = useState({
    questionId: props.questionId,
    type: "discursiva",
    text: "",
    value: 0,
  });
  const [id, setId] = useState("");
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
      text: "",
      value: 0,
    });
  };

  const submitEdit = (event) => {
    event.preventDefault();
    setEditOpen(false);
    let data = newAlternative;
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
      <StyledButton
        onClick={() => {
          handleClickAddOpen();
        }}
      >
        Adicionar alternativa
      </StyledButton>
    );
  };

  return (
    <>
      <h2>Alternativas</h2>
      <BasicBreadcrumbs />
      {showAddAlternativeButton()}
      <TableContainer component={Paper}>
        <Table size="small" aria-label="dense table">
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid black" }}>
              <StyledTableCell>Texto</StyledTableCell>
              <StyledTableCell>Valor</StyledTableCell>
              <StyledTableCell>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          {props.alternatives.map((alternative) => (
            <AlternativesItem
              key={alternative.id}
              id={alternative.id}
              text={alternative.text}
              value={alternative.value}
              handleDelete={props.delete}
              setText={setText}
              setValue={setValue}
              setId={setId}
              modalOpen={handleClickEditOpen}
            />
          ))}
        </Table>
      </TableContainer>
      <Modal
        open={addOpen}
        handleClose={handlAddClose}
        pageName={"Alternativa"}
        data={showAlternativeView}
        submit={localSubmit}
        operation={"Adicionar"}
      />
      <Modal
        open={editOpen}
        handleClose={handlEditClose}
        pageName={"Alternativa"}
        data={showEditAlternativeView}
        submit={submitEdit}
        operation={"Editar"}
      />
    </>
  );
}

export default AlternativesList;
