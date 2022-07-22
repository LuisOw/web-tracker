import Chip from "../Chip";

function ResearchesItem(props) {
  const research = props.research;
  const localDelete = () => {
    props.handleDelete(research.id);
  };

  const handleEdit = () => {
    props.setNewResearch(research);
    props.modalOpen();
  };

  return (
    <tr>
      <td>{research.title}</td>
      <td>{research.description}</td>
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
      <td>
        <Chip research={research} />
      </td>
      <td>
        <button
          className="button button_view"
          onClick={() => {
            props.navigate(`${research.id}/questionarios`);
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
