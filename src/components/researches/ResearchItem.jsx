import dayjs from "dayjs";
import Chip from "../Chip";
import {
  StyledTableCell,
  StyledTableRow,
  StyledButton,
} from "../StyledTableComponents";

function ResearchesItem(props) {
  const research = props.research;
  const localDelete = () => {
    props.handleDelete(research.id);
  };

  const handleEdit = () => {
    props.setNewResearch(research);
    props.modalOpen();
  };

  const localStatus = () => {
    props.statusChange(research.id);
  };

  const localDownload = () => {
    let date = dayjs().format("DD-MM-YYYY-HH-mm");
    let filename = `${date}-${research.id}`;
    props.downloadResult(research.id, filename);
  };

  const conditionalButton = (state) => {
    console.log(research.id);
    return state !== "encerrada" ? (
      <StyledButton size="small" variant="contained" onClick={localStatus}>
        {state === "inativa" ? "Iniciar pesquisa" : "Encerrar pesquisa"}
      </StyledButton>
    ) : (
      <StyledButton size="small" variant="contained" onClick={localDownload}>
        Baixar resultados
      </StyledButton>
    );
  };

  const formatDateTime = (dateTime) => {
    return dateTime ? dayjs(dateTime).format("DD/MM/YYYY-HH:mm:ss") : "";
  };

  return (
    <StyledTableRow key={props.id}>
      <StyledTableCell>{research.title}</StyledTableCell>
      <StyledTableCell>{research.description}</StyledTableCell>
      <StyledTableCell>{research.visibility}</StyledTableCell>
      <StyledTableCell>{research.state}</StyledTableCell>
      <StyledTableCell>{formatDateTime(research.startTime)}</StyledTableCell>
      <StyledTableCell>{formatDateTime(research.endTime)}</StyledTableCell>
      <StyledTableCell>
        <StyledButton
          size="small"
          variant="contained"
          onClick={() => props.showModulesHandler()}
        >
          Exibir módulos
        </StyledButton>
      </StyledTableCell>
      <StyledTableCell>
        <Chip research={research} />
      </StyledTableCell>
      <StyledTableCell>
        <StyledButton
          size="small"
          variant="contained"
          onClick={() => {
            props.navigate(`${research.id}/questionarios`);
          }}
        >
          Exibir questionários
        </StyledButton>
      </StyledTableCell>
      <StyledTableCell>
        <div className="flex-container">
          {conditionalButton(research.state)}
          <StyledButton
            sx={{ marginLeft: "2px", marginRight: "2px" }}
            size="small"
            variant="contained"
            onClick={() => handleEdit()}
          >
            Editar
          </StyledButton>
          <StyledButton size="small" variant="contained" onClick={localDelete}>
            Excluir
          </StyledButton>
        </div>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default ResearchesItem;
