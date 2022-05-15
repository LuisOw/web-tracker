import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import QuestionnairesList from "../../components/questionnaires/QuestionnairesList";

function QuestionnairesPage() {
  const { researchId } = useParams();
  const url =
    "http://127.0.0.1:8000/pesquisas/" + researchId + "/questionarios/";
  const [loading, setLoading] = useState(true);
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/pesquisas/" + researchId + "/questionarios/",
        {
          method: "GET",
          headers: { Authorizaton: "Bearer 1" },
        }
      );
      const data = await response.json();
      setQuestionnaires(data);
      setLoading(false);
    })();
  }, []);

  const handleSubmit = async (dataToSend) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorizaton: "Bearer 1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const data = await response.json();
    setQuestionnaires((prev) => [
      ...prev,
      {
        id: data.id,
        researchId: data.researchId,
        title: data.title,
        public: data.public,
      },
    ]);
  };

  const handleEdit = async (dataToSend) => {
    const response = await fetch(
      "http://127.0.0.1:8000/pesquisas/" +
        researchId +
        "/questionarios/" +
        dataToSend.id,
      {
        method: "PUT",
        headers: {
          Authorizaton: "Bearer 1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
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
    const response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        Authorizaton: "Bearer 1",
      },
    });
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
    <>
      <h1>Questionário da pesquisa de id = {researchId}</h1>
      <QuestionnairesList
        questionnaires={questionnaires}
        researchId={researchId}
        add={handleSubmit}
        delete={handleDelete}
        edit={handleEdit}
      />
    </>
  );
}

export default QuestionnairesPage;
