function AlternativesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  const handleEdit = (id, localType, localText, localValue) => {
    props.setType(localType);
    props.setText(localText);
    props.setValue(localValue);
    props.setId(id);
    props.setNewAlternativeView(false);
    props.setEditAlternativeView(true);
  };

  return (
    <tr>
      <td>{props.type}</td>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>
        <button
          className="button_edit"
          onClick={() => {
            handleEdit(props.id, props.type, props.text, props.value);
          }}
        >
          Editar
        </button>
        <button className="button_delete" onClick={localDelete}>
          {" "}
          Excluir
        </button>
      </td>
    </tr>
  );
}

export default AlternativesItem;
