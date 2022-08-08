import {
  StyledButton,
  StyledTableCell,
  StyledTableRow,
} from "../StyledTableComponents";

function AlternativesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localType, localText, localValue) => {
    props.setType(localType);
    props.setText(localText);
    props.setValue(localValue);
    props.setId(id);
    props.modalOpen();
  };

  return (
    <StyledTableRow>
      <StyledTableCell>{props.type}</StyledTableCell>
      <StyledTableCell>{props.text}</StyledTableCell>
      <StyledTableCell>{props.value}</StyledTableCell>
      <StyledTableCell>
        <StyledButton
          sx={{ marginRight: "1px" }}
          size="small"
          variant="contained"
          onClick={() => {
            handleEdit(props.id, props.type, props.text, props.value);
          }}
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
  );
}

export default AlternativesItem;
