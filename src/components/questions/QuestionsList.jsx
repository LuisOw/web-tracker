import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionItem from "./QuestionsItem";
import Modal from "../modal/Modal";

import {
  TableContainer,
  TextField,
  Paper,
  Table,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledButton, StyledTableCell } from "../StyledTableComponents";
import BasicBreadcrumbs from "../navegation/Breadcrumbs";

function QuestionsList(props) {
  const navigate = useNavigate();
  const [newQuestion, setNewQuestion] = useState({
    questionnaireId: props.questionnaireId,
    query: "",
    order: 0,
  });
  const [id, setId] = useState("");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState(0);
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

  const handleNavigate = (id) => {
    navigate(
      `/pesquisas/${props.researchId}/questionarios/${props.questionnaireId}/questoes/${id}/alternativas`
    );
  };

  const handleChange = (event) => {
    let data = newQuestion;
    data[event.target.name] = event.target.value;
    setNewQuestion(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setAddOpen(false);
    props.add(newQuestion);
    setNewQuestion({
      questionnaireId: props.questionnaireId,
      query: "",
      order: 0,
    });
  };

  const submitEdit = (event) => {
    event.preventDefault();
    setEditOpen(false);
    let data = newQuestion;
    data["query"] = query;
    data["order"] = order;
    data["id"] = id;
    setNewQuestion(data);
    props.edit(newQuestion);
    setNewQuestion({
      questionnaireId: props.questionnaireId,
      query: "",
      order: 0,
    });
  };

  const showQuestionView = () => {
    return (
      <form>
        <TextField
          name="query"
          placeholder="Pergunta"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          name="order"
          placeholder="Ordem"
          type="number"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
      </form>
    );
  };

  const showEditQuestionView = () => {
    return (
      <form>
        <TextField
          name="query"
          placeholder="Pergunta"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          name="order"
          placeholder="Ordem"
          type="number"
          value={order}
          onChange={(event) => setOrder(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
      </form>
    );
  };

  const showAddQuestionButton = () => {
    return (
      <StyledButton
        onClick={() => {
          handleClickAddOpen();
        }}
      >
        Adicionar questão
      </StyledButton>
    );
  };

  return (
    <>
      <h2>Questões</h2>
      <BasicBreadcrumbs />
      {showAddQuestionButton()}
      <TableContainer component={Paper}>
        <Table size="small" aria-label="dense table">
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid black" }}>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Pergunta</StyledTableCell>
              <StyledTableCell>Ordem</StyledTableCell>
              <StyledTableCell>Alternativas</StyledTableCell>
              <StyledTableCell>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          {props.questions.map((question) => (
            <QuestionItem
              key={question.id}
              id={question.id}
              query={question.query}
              order={question.order}
              handleDelete={props.delete}
              navigate={handleNavigate}
              setQuery={setQuery}
              setOrder={setOrder}
              setId={setId}
              modalOpen={handleClickEditOpen}
            />
          ))}
        </Table>
      </TableContainer>
      <Modal
        open={addOpen}
        handleClose={handlAddClose}
        pageName={"Questão"}
        data={showQuestionView}
        submit={localSubmit}
        operation={"Adicionar"}
      />
      <Modal
        open={editOpen}
        handleClose={handlEditClose}
        pageName={"Questão"}
        data={showEditQuestionView}
        submit={submitEdit}
        operation={"Editar"}
      />
    </>
  );
}

export default QuestionsList;
