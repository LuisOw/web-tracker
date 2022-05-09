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

  /*
  const handlePost = async (dataToSend) => {
    const response = await fetch("http://127.0.0.1:8000/pesquisas", {
      method: "POST",
      headers: {
        Authorizaton: "Bearer 1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const data = await response.json();
    return data;
  };
  */

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

  const handleSave = async (dataToSend) => {
    const response = await fetch("http://127.0.0.1:8000/pesquisas", {
      method: "POST",
      headers: {
        Authorizaton: "Bearer 1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const data = await response.json();
    let state = researches;
    state.forEach((research) => {
      if (research.id === data.id) {
        research.title = data.title;
      }
    });
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
        save={handleSave}
      />
    </>
  );
};

export default ResearchesPage;
