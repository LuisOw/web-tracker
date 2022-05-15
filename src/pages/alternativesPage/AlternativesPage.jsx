import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AlternativesList from "../../components/alternatives/AlternativesList";

function AlternativesPage() {
  const { researchId, questionnaireId, questionId } = useParams();
  const url =
    "http://127.0.0.1:8000/pesquisas/" +
    researchId +
    "/questionarios/" +
    questionnaireId +
    "/questoes/" +
    questionId +
    "/alternativas/";
  const [loading, setLoading] = useState(true);
  const [alternatives, setAlternatives] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/pesquisas/" +
          researchId +
          "/questionarios/" +
          questionnaireId +
          "/questoes/" +
          questionId +
          "/alternativas",
        {
          method: "GET",
          headers: { Authorizaton: "Bearer 1" },
        }
      );
      const data = await response.json();
      setAlternatives(data);
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
    setAlternatives((prev) => [
      ...prev,
      {
        id: data.id,
        questionId: data.questionId,
        type: data.type,
        text: data.text,
        value: data.value,
      },
    ]);
  };

  const handleEdit = async (dataToSend) => {
    const response = await fetch(url + dataToSend.id, {
      method: "PUT",
      headers: {
        Authorizaton: "Bearer 1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const newData = alternatives.map((alternative) => {
      if (alternative.id === dataToSend.id) {
        return dataToSend;
      }
      return alternative;
    });
    setAlternatives(newData);
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
    let state = alternatives;
    const newState = state.filter((alternative) => alternative.id !== id);
    setAlternatives(newState);
  };

  if (loading) {
    return <div>Carregante...</div>;
  }

  return (
    <>
      <h1>Alternativa da questão de id = {questionId}</h1>
      <AlternativesList
        alternatives={alternatives}
        researchId={researchId}
        questionnaireId={questionnaireId}
        questionId={questionId}
        add={handleSubmit}
        delete={handleDelete}
        edit={handleEdit}
      />
    </>
  );
}

export default AlternativesPage;
