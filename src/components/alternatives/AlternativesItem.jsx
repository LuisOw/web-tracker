import {
  StyledButton,
  StyledTableCell,
  StyledTableRow,
} from "../StyledTableComponents";

function AlternativesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localText, localValue) => {
    props.setText(localText);
    props.setValue(localValue);
    props.setId(id);
    props.modalOpen();
  };

  return (
    <StyledTableRow>
      <StyledTableCell>{props.text}</StyledTableCell>
      <StyledTableCell>{props.value}</StyledTableCell>
      <StyledTableCell>
        <StyledButton
          sx={{ marginRight: "1px" }}
          size="small"
          variant="contained"
          onClick={() => {
            handleEdit(props.id, props.text, props.value);
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
