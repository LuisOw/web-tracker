import {
  StyledButton,
  StyledTableCell,
  StyledTableRow,
} from "../StyledTableComponents";

function QuestionnairesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localTitle, localPublic) => {
    props.setTitle(localTitle);
    props.setPublic(localPublic);
    props.setId(id);
    props.modalOpen();
  };

  return (
    <>
      <StyledTableRow key={props.id}>
        <StyledTableCell>{props.title}</StyledTableCell>
        <StyledTableCell>{JSON.stringify(props.public)}</StyledTableCell>
        <StyledTableCell>
          <StyledButton
            size="small"
            variant="contained"
            onClick={() => props.navigate(props.id)}
          >
            Exibit questões
          </StyledButton>
        </StyledTableCell>
        <StyledTableCell>
          <StyledButton
            sx={{ marginRight: "1px" }}
            size="small"
            variant="contained"
            onClick={() => handleEdit(props.id, props.title, props.public)}
          >
            Editar
          </StyledButton>
          <StyledButton
            sx={{ marginLeft: "1px" }}
            size="small"
            variant="contained"
            onClick={localDelete}
          >
            Excluir
          </StyledButton>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}

export default QuestionnairesItem;
