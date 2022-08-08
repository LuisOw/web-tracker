import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ResearchItem from "./ResearchItem";
import Modal from "../modal/Modal";
import { RESEARCH_MODEL } from "../../models/ResearchModel";
import {
  GENDER_TYPES,
  RACE_TYPES,
  SEXUAL_ORIENTATION,
  VISIBILITY,
  DEFAULT_TYPE,
} from "../../constants/ResearchesEnum";
import {
  Box,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { StyledButton, StyledTableCell } from "../StyledTableComponents";
import BasicBreadcrumbs from "../../components/navegation/Breadcrumbs";

function ResearchesList(props) {
  const [newResearch, setNewResearch] = useState(RESEARCH_MODEL);
  const navigate = useNavigate();
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const raceList = [
    { value: RACE_TYPES.BRANCO, label: "Branco" },
    { value: RACE_TYPES.PRETO, label: "Preto" },
    { value: RACE_TYPES.AMARELO, label: "Amarelo" },
    { value: RACE_TYPES.INDIGENA, label: "Indígena" },
    { value: DEFAULT_TYPE.NENHUM, label: "Nenhum" },
  ];

  const genderList = [
    { value: GENDER_TYPES.HOMEM_CIS, label: "Homem cis" },
    { value: GENDER_TYPES.MULHER_CIS, label: "Mulher cis" },
    { value: GENDER_TYPES.HOMEM_TRANS, label: "Homem trans" },
    { value: GENDER_TYPES.MULHER_TRANS, label: "Mulher trans" },
    { value: GENDER_TYPES.NAO_BINARIO, label: "Não binário" },
    { value: GENDER_TYPES.OUTRO, label: "Outros" },
    { value: DEFAULT_TYPE.NENHUM, label: "Nenhum" },
  ];

  const orientationList = [
    { value: SEXUAL_ORIENTATION.HETERO, label: "Heterossexual" },
    { value: SEXUAL_ORIENTATION.HOMO, label: "Homossexual" },
    { value: SEXUAL_ORIENTATION.BI, label: "Bissexual" },
    { value: SEXUAL_ORIENTATION.OUTRO, label: "Outro" },
    { value: DEFAULT_TYPE.NENHUM, label: "Nenhum" },
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
    setNewResearch(RESEARCH_MODEL);
  };

  const handleClickEditOpen = () => {
    setEditOpen(true);
  };

  const handlEditClose = () => {
    setEditOpen(false);
    setNewResearch(RESEARCH_MODEL);
  };

  const handleChange = (event) => {
    newResearch[event.target.name] = event.target.value;
    setNewResearch(newResearch);
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
    props.edit(newResearch);
    setNewResearch(RESEARCH_MODEL);
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
          name="description"
          label="Descrição"
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
          defaultValue={newResearch.title}
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          name="description"
          defaultValue={newResearch.description}
          onChange={(event) => handleChange(event)}
          variant="outlined"
          margin="dense"
          fullWidth
          size="small"
        />
        <TextField
          select
          defaultValue={newResearch.visibility}
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
          defaultValue={newResearch.initialAge}
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
          defaultValue={newResearch.finalAge}
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
          defaultValue={newResearch.initialIncome}
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
          defaultValue={newResearch.finalIncome}
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
          defaultValue={newResearch.gender}
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
          defaultValue={newResearch.sexualOrientation}
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
          defaultValue={newResearch.race}
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

  const ShowAddResearchButton = () => {
    return (
      <StyledButton
        sx={{ fontSize: 12 }}
        onClick={() => {
          handleClickAddOpen();
        }}
      >
        Adicionar pesquisa
      </StyledButton>
    );
  };

  const navigateHandler = (endpoint) => {
    navigate(`/pesquisas/${endpoint}`);
  };

  function showModulesHandler() {}

  return (
    <>
      <BasicBreadcrumbs />
      <ShowAddResearchButton />
      <TableContainer component={Paper}>
        <Table size="small" aria-label="dense table">
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid black" }}>
              <StyledTableCell>Título</StyledTableCell>
              <StyledTableCell>Descrição</StyledTableCell>
              <StyledTableCell>Visibilidade</StyledTableCell>
              <StyledTableCell>Estado</StyledTableCell>
              <StyledTableCell>Início</StyledTableCell>
              <StyledTableCell>Encerramento</StyledTableCell>
              <StyledTableCell>Módulos ativos</StyledTableCell>
              <StyledTableCell>Filtros</StyledTableCell>
              <StyledTableCell>Questionários</StyledTableCell>
              <StyledTableCell>Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.researches.map((research) => (
              <ResearchItem
                key={research.id}
                research={research}
                navigate={navigateHandler}
                showModulesHandler={showModulesHandler}
                handleDelete={props.delete}
                modalOpen={handleClickEditOpen}
                setNewResearch={setNewResearch}
                statusChange={props.statusChange}
                downloadResult={props.downloadResult}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
