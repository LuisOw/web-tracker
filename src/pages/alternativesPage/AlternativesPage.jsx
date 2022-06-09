import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { httpFetch, httpFetchWithBody } from "../../services/Services";
import { AuthContext } from "../../context/auth";
import AlternativesList from "../../components/alternatives/AlternativesList";
import Layout from "../../components/Layout/Layout";

function AlternativesPage() {
  const { token, logout } = useContext(AuthContext);
  const { researchId, questionnaireId, questionId } = useParams();
  const endpoint = `pesquisas/${researchId}/questionarios/${questionnaireId}/questoes/${questionId}/alternativas`;
  const [loading, setLoading] = useState(true);
  const [alternatives, setAlternatives] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await httpFetch(endpoint, token);
      setAlternatives(response);
      setLoading(false);
    })();
  }, []);

  const handleSubmit = async (dataToSend) => {
    const response = await httpFetchWithBody(endpoint, "POST", dataToSend, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    setAlternatives((prev) => [
      ...prev,
      {
        id: response.id,
        questionId: response.questionId,
        type: response.type,
        text: response.text,
        value: response.value,
      },
    ]);
  };

  const handleEdit = async (dataToSend) => {
    const response = await httpFetchWithBody(
      `${endpoint}/${dataToSend.id}`,
      "PUT",
      dataToSend,
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    );
    const newData = alternatives.map((alternative) => {
      if (alternative.id === dataToSend.id) {
        return dataToSend;
      }
      return alternative;
    });
    setAlternatives(newData);
  };

  const handleDelete = async (id) => {
    const response = await httpFetchWithBody(
      `${endpoint}/${id}`,
      "DELETE",
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    stateRemoval(id);
  };

  const stateRemoval = (id) => {
    let state = alternatives;
    const newState = state.filter((alternative) => alternative.id !== id);
    setAlternatives(newState);
  };

  if (loading) {
    return <div>Carregante...</div>;
  }

  return (
    <Layout>
      <div className="page_container">
        <AlternativesList
          alternatives={alternatives}
          researchId={researchId}
          questionnaireId={questionnaireId}
          questionId={questionId}
          add={handleSubmit}
          delete={handleDelete}
          edit={handleEdit}
        />
      </div>
    </Layout>
  );
}

export default AlternativesPage;
