import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { httpFetch, httpFetchWithBody } from "../../services/Services";
import { AuthContext } from "../../context/auth";
import QuestionsList from "../../components/questions/QuestionsList";
import Layout from "../../components/layout/Layout";

function QuestionsPage() {
  const { token, logout } = useContext(AuthContext);
  const { researchId, questionnaireId } = useParams();
  const endpoint = `pesquisas/${researchId}/questionarios/${questionnaireId}/questoes`;
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await httpFetch(endpoint, token);
      setQuestions(response);
      setLoading(false);
    })();
  }, []);

  const handleSubmit = async (dataToSend) => {
    const response = await httpFetchWithBody(endpoint, "POST", dataToSend, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    setQuestions((prev) => [
      ...prev,
      {
        id: response.id,
        questionnaireId: response.questionnaireId,
        query: response.query,
        order: response.order,
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
    const newData = questions.map((question) => {
      if (question.id === dataToSend.id) {
        return dataToSend;
      }
      return question;
    });
    setQuestions(newData);
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
    let state = questions;
    const newState = state.filter((question) => question.id !== id);
    setQuestions(newState);
  };

  if (loading) {
    return <div>Carregante...</div>;
  }

  return (
    <Layout>
      <div className="page_container">
        <QuestionsList
          questions={questions}
          researchId={researchId}
          questionnaireId={questionnaireId}
          add={handleSubmit}
          delete={handleDelete}
          edit={handleEdit}
        />
      </div>
    </Layout>
  );
}

export default QuestionsPage;
