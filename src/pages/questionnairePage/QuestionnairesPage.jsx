import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { httpFetch, httpFetchWithBody } from "../../services/Services";
import { AuthContext } from "../../context/auth";

import QuestionnairesList from "../../components/questionnaires/QuestionnairesList";

function QuestionnairesPage() {
  const { token, logout } = useContext(AuthContext);
  const { researchId } = useParams();
  const endpoint = `pesquisas/${researchId}/questionarios`;
  const [loading, setLoading] = useState(true);
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await httpFetch(endpoint, token);
      setQuestionnaires(response);
      setLoading(false);
    })();
  }, []);

  const handleSubmit = async (dataToSend) => {
    const response = await httpFetchWithBody(endpoint, "POST", dataToSend, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    setQuestionnaires((prev) => [
      ...prev,
      {
        id: response.id,
        researchId: response.researchId,
        title: response.title,
        public: response.public,
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
    <div className="page_container">
      <QuestionnairesList
        questionnaires={questionnaires}
        researchId={researchId}
        add={handleSubmit}
        delete={handleDelete}
        edit={handleEdit}
      />
    </div>
  );
}

export default QuestionnairesPage;
