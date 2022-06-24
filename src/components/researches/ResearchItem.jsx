function ResearchesItem(props) {
  const research = props.research;
  const localDelete = () => {
    props.handleDelete(research.id);
  };

  const handleEdit = () => {
    props.setTitle(research.title);
    props.setId(research.id);
    props.setVisibility(research.visibility);
    props.setInitialAge(research.initialAge);
    props.setFinalAge(research.finalAge);
    props.setInitialIncome(research.initialIncome);
    props.setFinalIncome(research.finalIncome);
    props.setGender(research.gender);
    props.setSexualOrientation(research.sexualOrientation);
    props.setRace(research.race);
    props.modalOpen();
  };

  return (
    <tr>
      <td>{research.title}</td>
      <td>{research.visibility}</td>
      <td>{research.state}</td>
      <td>
        <button
          className="button button_view"
          onClick={() => props.showModulesHandler()}
        >
          Exibir módulos ativos
        </button>
      </td>
      <td>{research.initialAge}</td>
      <td>{research.finalAge}</td>
      <td>{research.initialIncome}</td>
      <td>{research.finalIncome}</td>
      <td>{research.gender}</td>
      <td>{research.sexualOrientation}</td>
      <td>{research.race}</td>

      <td>
        <button
          className="button button_view"
          onClick={() => {
            props.navigate(research.id);
          }}
        >
          Exibir questionários
        </button>
      </td>
      <td>
        <div className="flex-container">
          <button className="button button_edit" onClick={() => handleEdit()}>
            Editar
          </button>
          <button className="button button_delete" onClick={localDelete}>
            Excluir
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ResearchesItem;
