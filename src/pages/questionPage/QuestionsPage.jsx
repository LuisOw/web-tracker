import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import QuestionsList from "../../components/questions/QuestionsList";

function QuestionsPage() {
  const { researchId, questionnaireId } = useParams();
  const url =
    "http://127.0.0.1:8000/pesquisas/" + researchId + "/questionarios/";
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/pesquisas/" +
          researchId +
          "/questionarios/" +
          questionnaireId,
        {
          method: "GET",
          headers: { Authorizaton: "Bearer 1" },
        }
      );
      const data = await response.json();
      setQuestions(data);
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
    setQuestions((prev) => [
      ...prev,
      {
        id: data.id,
        questionnaireId: data.questionnaireId,
        query: data.query,
        order: data.order,
      },
    ]);
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
    let state = questions;
    const newState = state.filter((question) => question.id !== id);
    setQuestions(newState);
  };

  if (loading) {
    return <div>Carregante...</div>;
  }

  return (
    <>
      <h1>Questão do questionário de id = {questionnaireId}</h1>
      <QuestionsList
        questions={questions}
        researchId={researchId}
        questionnaireId={questionnaireId}
        add={handleSubmit}
        delete={handleDelete}
      />
    </>
  );
}

export default QuestionsPage;
