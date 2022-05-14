function AlternativesItem(props) {
  const localDelete = () => {
    props.handleDelete(props.id);
  };

  return (
    <tr>
      <th>{props.type}</th>
      <th>{props.text}</th>
      <th>{props.value}</th>
      <button onClick={localDelete}> Excluir</button>
    </tr>
  );
}

export default AlternativesItem;
