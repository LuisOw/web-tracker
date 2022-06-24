import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ResearchItem from "./ResearchItem";
import Modal from "../modal/Modal";
import { MenuItem, TextField } from "@mui/material";
import { RESEARCH_MODEL } from "../../models/ResearchModel";
import {
  GENDER_TYPES,
  RACE_TYPES,
  SEXUAL_ORIENTATION,
  VISIBILITY,
} from "../../constants/ResearchesEnum";

function ResearchesList(props) {
  console.log(props.researches);
  const [newResearch, setNewResearch] = useState(RESEARCH_MODEL);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [visibility, setVisibility] = useState("");
  const [initialAge, setInitialAge] = useState(-1);
  const [finalAge, setFinalAge] = useState(-1);
  const [initialIncome, setInitialIncome] = useState(-1);
  const [finalIncome, setFinalIncome] = useState(-1);
  const [race, setRace] = useState("");
  const [gender, setGender] = useState("");
  const [sexualOrientation, setSexualOrientation] = useState("");
  const navigate = useNavigate();
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const raceList = [
    { value: RACE_TYPES.BRANCO, label: "Branco" },
    { value: RACE_TYPES.PRETO, label: "Preto" },
    { value: RACE_TYPES.AMARELO, label: "Amarelo" },
    { value: RACE_TYPES.INDIGENA, label: "Indígena" },
  ];

  const genderList = [
    { value: GENDER_TYPES.HOMEM_CIS, label: "Homem cis" },
    { value: GENDER_TYPES.MULHER_CIS, label: "Mulher cis" },
    { value: GENDER_TYPES.HOMEM_TRANS, label: "Homem trans" },
    { value: GENDER_TYPES.MULHER_TRANS, label: "Mulher trans" },
    { value: GENDER_TYPES.NAO_BINARIO, label: "Não binário" },
    { value: GENDER_TYPES.OUTRO, label: "Outros" },
  ];

  const orientationList = [
    { value: SEXUAL_ORIENTATION.HETERO, label: "Heterossexual" },
    { value: SEXUAL_ORIENTATION.HOMO, label: "Homossexual" },
    { value: SEXUAL_ORIENTATION.BI, label: "Bissexual" },
    { value: SEXUAL_ORIENTATION.OUTRO, label: "Outro" },
  ];

  const visibilityList = [
    { value: VISIBILITY.PUBLICO, label: "Público" },
    { value: VISIBILITY.PRIVADO, label: "Privado" },
  ];

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
    console.log("name = " + event.target.name);
    console.log("value = " + event.target.value);
    let data = newResearch;
    data[event.target.name] = event.target.value;
    setNewResearch(data);
  };

  const localSubmit = (event) => {
    event.preventDefault();
    setAddOpen(false);
    props.add(newResearch);
    setNewResearch(RESEARCH_MODEL);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    setEditOpen(false);
    let data = newResearch;
    data["title"] = title;
    data["id"] = id;
    data["visibility"] = visibility;
    data["initialAge"] = initialAge;
    data["finalAge"] = finalAge;
    data["initialIncome"] = initialIncome;
    data["finalIncome"] = finalIncome;
    data["initialAge"] = initialAge;
    data["gender"] = gender;
    data["sexualOrientation"] = sexualOrientation;
    data["race"] = race;
    setNewResearch(data);
    props.edit(newResearch);
    setNewResearch(RESEARCH_MODEL);
  };

  const errorSetting = (error, text, setterError, setterText) => {
    setterError(error);
    setterText(text);
  };

  const isPositive = (value, setterError, setterText) => {
    let error = "Valor deve ser positivo";
    value < 0
      ? errorSetting(true, error, setterError, setterText)
      : errorSetting(false, "", setterError, setterText);
  };

  const showNewResearchView = () => {
    return (
      <form>
        <TextField
          name="title"
          label="Título"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          select
          name="visibility"
          label="Visibilidade"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        >
          {visibilityList.map((visibility) => (
            <MenuItem key={visibility.value} value={visibility.value}>
              {visibility.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="initialAge"
          label="Idade inicial"
          type="number"
          onChange={(event) => {
            handleChange(event);
          }}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          name="finalAge"
          label="Idade final"
          type="number"
          onChange={(event) => {
            handleChange(event);
          }}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          name="initialIncome"
          label="Salário inicial"
          type="number"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          name="finalIncome"
          label="Salário final"
          type="number"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          select
          name="gender"
          label="Gênero"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        >
          {genderList.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          name="sexualOrientation"
          label="Orientação sexual"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        >
          {orientationList.map((orientation) => (
            <MenuItem key={orientation.value} value={orientation.value}>
              {orientation.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          name="race"
          label="Raça/Etinia"
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        >
          {raceList.map((race) => (
            <MenuItem key={race.value} value={race.value}>
              {race.label}
            </MenuItem>
          ))}
        </TextField>
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
        <TextField
          select
          defaultValue={visibility}
          name="visibility"
          label="Visibilidade"
          onChange={(event) => setVisibility(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        >
          {visibilityList.map((visibility) => (
            <MenuItem key={visibility.value} value={visibility.value}>
              {visibility.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          value={initialAge}
          name="initialAge"
          label="Idade inicial"
          type="number"
          onChange={(event) => {
            setInitialAge(event.target.value);
          }}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          value={finalAge}
          name="finalAge"
          label="Idade final"
          type="number"
          onChange={(event) => {
            setFinalAge(event.target.value);
          }}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          value={initialIncome}
          name="initialIncome"
          label="Salário inicial"
          type="number"
          onChange={(event) => setInitialIncome(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          value={finalIncome}
          name="finalIncome"
          label="Salário final"
          type="number"
          onChange={(event) => setFinalIncome(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          select
          defaultValue={gender}
          name="gender"
          label="Gênero"
          onChange={(event) => setGender(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        >
          {genderList.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          defaultValue={sexualOrientation}
          name="sexualOrientation"
          label="Orientação sexual"
          onChange={(event) => setSexualOrientation(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        >
          {orientationList.map((orientation) => (
            <MenuItem key={orientation.value} value={orientation.value}>
              {orientation.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          defaultValue={race}
          name="race"
          label="Raça/Etinia"
          onChange={(event) => setRace(event.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        >
          {raceList.map((race) => (
            <MenuItem key={race.value} value={race.value}>
              {race.label}
            </MenuItem>
          ))}
        </TextField>
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
            <th>Visibilidade</th>
            <th>Estado</th>
            <th>Módulos ativos</th>
            <th>Idade inicial</th>
            <th>Idade final</th>
            <th>Salário inicial</th>
            <th>Salário final</th>
            <th>Gênero</th>
            <th>Orientação sexual</th>
            <th>Raça/Etinia</th>
            <th>Questionários</th>
            <th>Ações</th>
          </tr>
          {props.researches.map((research) => (
            <ResearchItem
              key={research.id}
              research={research}
              navigate={navigateHandler}
              showModulesHandler={showModulesHandler}
              handleDelete={props.delete}
              setTitle={setTitle}
              setId={setId}
              setVisibility={setVisibility}
              setInitialAge={setInitialAge}
              setFinalAge={setFinalAge}
              setInitialIncome={setInitialIncome}
              setFinalIncome={setFinalIncome}
              setRace={setRace}
              setGender={setGender}
              setSexualOrientation={setSexualOrientation}
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
        operation={"Adicionar"}
      />
      <Modal
        open={editOpen}
        handleClose={handlEditClose}
        pageName={"pesquisa"}
        data={showEditResearchView}
        submit={submitEdit}
        operation={"Editar"}
      />
    </>
  );
}

export default ResearchesList;
