function AlternativesItem(props) {
  return (
    <tr>
      <th>{props.type}</th>
      <th>{props.text}</th>
      <th>{props.value}</th>
    </tr>
  );
}

export default AlternativesItem;
