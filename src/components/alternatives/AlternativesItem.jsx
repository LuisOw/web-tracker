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
      <th>{props.type}</th>
      <th>{props.text}</th>
      <th>{props.value}</th>
      <th>
        <button
          onClick={() => {
            handleEdit(props.id, props.type, props.text, props.value);
          }}
        >
          Editar
        </button>
        <button onClick={localDelete}> Excluir</button>
      </th>
    </tr>
  );
}

export default AlternativesItem;
