import {
  StyledButton,
  StyledTableCell,
  StyledTableRow,
} from "../StyledTableComponents";
import { useState } from "react";

function QuestionItem(props) {
  const isDisabled = useState(props.type === "descritiva");
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localQuery, localOrder, localType) => {
    props.setQuery(localQuery);
    props.setOrder(localOrder);
    props.setType(localType);
    props.setId(id);
    props.modalOpen();
  };

  return (
    <>
      <StyledTableRow key={props.id}>
        <StyledTableCell>{props.id}</StyledTableCell>
        <StyledTableCell>{props.query}</StyledTableCell>
        <StyledTableCell>{props.order}</StyledTableCell>
        <StyledTableCell>{props.type}</StyledTableCell>
        <StyledTableCell>
          <StyledButton
            size="small"
            variant="contained"
            disabled={props.type === "descritiva"}
            onClick={() => props.navigate(props.id)}
          >
            Exibir alternativas
          </StyledButton>
        </StyledTableCell>
        <StyledTableCell>
          <StyledButton
            sx={{ marginRight: "1px" }}
            size="small"
            variant="contained"
            onClick={() =>
              handleEdit(props.id, props.query, props.order, props.type)
            }
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

export default QuestionItem;
