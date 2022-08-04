import dayjs from "dayjs";
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

  const localStatus = () => {
    props.statusChange(research.id);
  };

  const localDownload = () => {
    let date = dayjs().format("DD-MM-YYYY-HH-mm");
    let filename = `${date}-${research.id}`;
    props.downloadResult(research.id, filename);
  };

  const conditionalButton = (state) => {
    console.log(research.id);
    return state !== "encerrada" ? (
      <button className="button button_edit" onClick={localStatus}>
        {state === "inativa" ? "Iniciar pesquisa" : "Encerrar pesquisa"}
      </button>
    ) : (
      <button className="button button_edit" onClick={localDownload}>
        Exibir resultados
      </button>
    );
  };

  const formatDateTime = (dateTime) => {
    return dateTime ? dayjs(dateTime).format("DD/MM/YYYY-HH:mm:ss") : "";
  };

  return (
    <tr>
      <td>{research.title}</td>
      <td>{research.description}</td>
      <td>{research.visibility}</td>
      <td>{research.state}</td>
      <td>{formatDateTime(research.startTime)}</td>
      <td>{formatDateTime(research.endTime)}</td>
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
          {conditionalButton(research.state)}
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
