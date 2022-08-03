import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import ResearchesList from "../../components/researches/ResearchList";

import { AuthContext } from "../../context/auth";
import { httpFetch, httpFetchWithBody } from "../../services/Services";

import "./ResearchesPage.css";

const ResearchesPage = () => {
  const { token, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [researches, setResearches] = useState([]);
  const endpoint = "pesquisas";
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    (async () => {
      const response = await httpFetch(endpoint, token);
      setResearches(response);
      setLoading(false);
    })();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleSubmit = async (dataToSend) => {
    console.log(dataToSend);
    const response = await httpFetchWithBody(
      endpoint,
      "POST",
      dataToSend,
      header
    );
    setResearches((prev) => [...prev, { ...response }]);
  };

  const handleEdit = async (dataToSend) => {
    const response = await httpFetchWithBody(
      `${endpoint}/${dataToSend.id}`,
      "PUT",
      dataToSend,
      header
    );
    const newData = researches.map((research) => {
      if (research.id === dataToSend.id) {
        return dataToSend;
      }
      return research;
    });
    setResearches(newData);
  };

  const handleStatusChange = async (id) => {
    const response = await httpFetchWithBody(
      `${endpoint}/${id}`,
      "PATCH",
      null,
      header
    );
    console.log({ ...response });
    const newData = researches.map((research) => {
      if (research.id === id) {
        return { ...response };
      }
      return research;
    });
    setResearches(newData);
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
    let state = researches;
    const newState = state.filter((research) => research.id !== id);
    setResearches(newState);
  };

  if (loading) {
    return <div>Carregante...</div>;
  }

  return (
    <Layout>
      <div className="page_container">
        <h1>Suas pesquisas</h1>
        <ResearchesList
          researches={researches}
          add={handleSubmit}
          delete={handleDelete}
          edit={handleEdit}
          statusChange={handleStatusChange}
        />
      </div>
    </Layout>
  );
};

export default ResearchesPage;
