function QuestionItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localQuery, localOrder) => {
    props.setQuery(localQuery);
    props.setOrder(localOrder);
    props.setId(id);
    props.modalOpen();
  };

  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.query}</td>
        <td>{props.order}</td>
        <td>
          <button
            className="button button_view"
            onClick={() => props.navigate(props.id)}
          >
            Exibir alternativas
          </button>
        </td>
        <td>
          <div className="flex-container">
            <button
              className="button button_edit"
              onClick={() => handleEdit(props.id, props.query, props.order)}
            >
              Editar
            </button>
            <button className="button button_delete" onClick={localDelete}>
              Excluir
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default QuestionItem;
