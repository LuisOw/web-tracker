import React, { useContext, useEffect, useState } from "react";
import ResearchesList from "../../components/researches/ResearchList";

import { AuthContext } from "../../context/auth";

const ResearchesPage = () => {
  const { authenticated, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://127.0.0.1:8000/pesquisas", {
        method: "GET",
        headers: { Authorizaton: "Bearer 1" },
      });
      const data = await response.json();
      setResearches(data);
      setLoading(false);
    })();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleSubmit = async (dataToSend) => {
    const response = await fetch("http://127.0.0.1:8000/pesquisas", {
      method: "POST",
      headers: {
        Authorizaton: "Bearer 1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const data = await response.json();
    setResearches((prev) => [...prev, { id: data.id, title: data.title }]);
  };

  const handleEdit = async (dataToSend) => {
    const response = await fetch(
      "http://127.0.0.1:8000/pesquisas/" + dataToSend.id,
      {
        method: "PUT",
        headers: {
          Authorizaton: "Bearer 1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      }
    );
    const newData = researches.map((research) => {
      if (research.id === dataToSend.id) {
        return dataToSend;
      }
      return research;
    });
    setResearches(newData);
  };

  const handleDelete = async (id) => {
    const response = await fetch("http://127.0.0.1:8000/pesquisas/" + id, {
      method: "DELETE",
      headers: {
        Authorizaton: "Bearer 1",
      },
    });
    stateRemoval(id);
  };

  const stateRemoval = (id) => {
    let state = researches;
    const newState = state.filter((research) => research.id !== id);
    setResearches(newState);
  };

  if (loading) {
    return <div>Carregante...</div>;
  }

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <h1>Suas pesquisas</h1>
      <ResearchesList
        researches={researches}
        add={handleSubmit}
        delete={handleDelete}
        edit={handleEdit}
      />
    </>
  );
};

export default ResearchesPage;
