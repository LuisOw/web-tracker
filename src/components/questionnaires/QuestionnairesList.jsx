import {
  Button,
  DialogActions,
  DialogContent,
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionnariesItem from "./QuestionnairesItem";
import Modal from "../modal/Modal";
import CollapsibleTable from "../CollapsTable";

function QuestionnairesList(props) {
  const navigate = useNavigate();
  const [newQuestionnaire, setNewQuestionnaire] = useState({
    researchId: props.researchId,
    title: "",
    public: "privado",
  });
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [_public, setPublic] = useState("privado");
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [viewState, setViewState] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleClickAddOpen = () => {
    setAddOpen(true);
  };

  const handlAddClose = () => {
    setAddOpen(false);
    setIsDisabled(true);
    setViewState(0);
    setSelectedIds([]);
  };

  const handleClickEditOpen = () => {
    setEditOpen(true);
  };

  const handlEditClose = () => {
    setEditOpen(false);
  };

  const handleChange = (event) => {
    let data = newQuestionnaire;
    data[event.target.name] = event.target.value;
    setNewQuestionnaire(data);
  };

  const localSubmit = (event) => {
    console.log(selectedIds.length);
    setAddOpen(false);
    setIsDisabled(true);
    setViewState(0);
    if (selectedIds.length === 0) {
      event.preventDefault();
      props.add(newQuestionnaire);
      setNewQuestionnaire({
        researchId: props.researchId,
        title: "",
        public: "privado",
      });
    } else {
      props.add({ selected_ids: selectedIds }, "/templates");
      setSelectedIds([]);
    }
  };

  const submitEdit = (event) => {
    event.preventDefault();
    setEditOpen(false);
    let data = newQuestionnaire;
    data["title"] = title;
    data["public"] = _public;
    data["id"] = id;
    setNewQuestionnaire(data);
    props.edit(newQuestionnaire);
    setNewQuestionnaire({
      researchId: props.researchId,
      title: "",
      public: "privado",
    });
  };

  const handleNavigate = (id) => {
    navigate(`/pesquisas/${props.researchId}/questionarios/${id}/questoes`);
  };

  const showNewQuestionnaireView = () => {
    if (viewState === 0) {
      return (
        <>
          <DialogContent>
            Deseja buscar por templates de questionários?
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setViewState(2);
                setIsDisabled(false);
              }}
            >
              Não
            </Button>
            <Button
              onClick={() => {
                setViewState(1);
                setIsDisabled(false);
              }}
            >
              Sim
            </Button>
          </DialogActions>
        </>
      );
    }
    if (viewState === 1) {
      return (
        <CollapsibleTable
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          rows={props.rows}
        />
      );
    }
    return (
      <>
        <FormControl fullWidth>
          <TextField
            name="title"
            placeholder="Título"
            onChange={(event) => handleChange(event)}
            variant="outlined"
            margin="dense"
            size="small"
          />
          <select name="public" onChange={(event) => handleChange(event)}>
            <option defaultValue={"privado"} value="privado">
              Privado
            </option>
            <option value="publico">Público</option>
          </select>
        </FormControl>
      </>
    );
  };

  const showEditQuestionnaireView = () => {
    return (
      <FormControl fullWidth>
        <TextField
          name="title"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {_public === "template" ? null : (
          <select
            name="public"
            value={_public}
            onChange={(event) => setPublic(event.target.value)}
          >
            <option value="privado">Privado</option>
            <option value="publico">Público</option>
          </select>
        )}
      </FormControl>
    );
  };

  const showAddQuestionnaireButton = () => {
    return (
      <button
        className="button button_add"
        onClick={() => {
          handleClickAddOpen();
        }}
      >
        Adicionar questionário
      </button>
    );
  };

  return (
    <>
      <h2>Questionários</h2>
      {showAddQuestionnaireButton()}
      <table className="table">
        <tbody>
          <tr>
            <th>Título</th>
            <th>Visibilidade</th>
            <th>Questões</th>
            <th>Ações</th>
          </tr>
          {props.questionnaires.map((questionnaire) => (
            <QuestionnariesItem
              key={questionnaire.id}
              id={questionnaire.id}
              title={questionnaire.title}
              public={questionnaire.public}
              handleDelete={props.delete}
              navigate={handleNavigate}
              setTitle={setTitle}
              setPublic={setPublic}
              setId={setId}
              modalOpen={handleClickEditOpen}
            />
          ))}
        </tbody>
      </table>
      <Modal
        open={addOpen}
        handleClose={handlAddClose}
        title={"Adicionar questionário"}
        data={showNewQuestionnaireView}
        submit={localSubmit}
        isDisabled={isDisabled}
      />
      <Modal
        open={editOpen}
        handleClose={handlEditClose}
        title={"Edit questionário"}
        data={showEditQuestionnaireView}
        submit={submitEdit}
      />
    </>
  );
}

export default QuestionnairesList;
