import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { httpFetch, httpFetchWithBody } from "../../services/Services";
import { AuthContext } from "../../context/auth";

import QuestionnairesList from "../../components/questionnaires/QuestionnairesList";
import Layout from "../../components/layout/Layout";

function QuestionnairesPage() {
  const { token, logout } = useContext(AuthContext);
  const { researchId } = useParams();
  const endpoint = `pesquisas/${researchId}/questionarios`;
  const [loading, setLoading] = useState(true);
  const [questionnaires, setQuestionnaires] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await httpFetch(endpoint, token);
      setQuestionnaires(response);
      const rows = await httpFetch(`questionarios`, token);
      setRows(rows);
      setLoading(false);
    })();
  }, []);

  const handleSubmit = async (dataToSend, url = "") => {
    console.log(`${endpoint}${url}`);
    const response = await httpFetchWithBody(
      `${endpoint}${url}`,
      "POST",
      dataToSend,
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    );
    if (Array.isArray(response)) {
      response.map((questionnaire) =>
        setQuestionnaires((prev) => [...prev, { ...questionnaire }])
      );
      return;
    }
    setQuestionnaires((prev) => [...prev, { ...response }]);
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
    const newData = questionnaires.map((questionnaire) => {
      if (questionnaire.id === dataToSend.id) {
        return dataToSend;
      }
      return questionnaire;
    });
    setQuestionnaires(newData);
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
    let state = questionnaires;
    const newState = state.filter((questionnaire) => questionnaire.id !== id);
    setQuestionnaires(newState);
  };

  if (loading) {
    return <div>Carregante...</div>;
  }

  return (
    <Layout>
      <QuestionnairesList
        questionnaires={questionnaires}
        researchId={researchId}
        add={handleSubmit}
        delete={handleDelete}
        edit={handleEdit}
        rows={rows}
      />
    </Layout>
  );
}

export default QuestionnairesPage;
