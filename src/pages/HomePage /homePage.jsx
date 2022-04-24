import React, { useContext } from "react";
import ResearchesList from "../../components/researches/ResearchList";

import { AuthContext } from "../../context/auth";

const DUMMY_DATA = [
  {
    id: 39,
    title: "Research number 22",
    usageTimeCapture: true,
    questions: [
      {
        type: "multiple_choice",
        question: "pergunta 84",
        answers: ["string1", "string2", "string3"],
      },
      {
        type: "other",
        question: "pergunta 15",
      },
    ],
  },
  {
    id: 46,
    title: "Research number 19",
    usageTimeCapture: false,
    questions: [
      {
        type: "multiple_choice",
        question: "pergunta 96",
        answers: ["string1", "string2", "string3"],
      },
      {
        type: "other",
        question: "pergunta 62",
      },
    ],
  },
  {
    id: 55,
    title: "Research number 34",
    usageTimeCapture: true,
    questions: [
      {
        type: "multiple_choice",
        question: "pergunta 56",
        answers: ["string1", "string2", "string3"],
      },
      {
        type: "other",
        question: "pergunta 93",
      },
    ],
  },
];

const HomePage = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>Suas pesquisas</h1>
      <button onClick={handleLogout}>Logout</button>
      <ResearchesList researches={DUMMY_DATA} />
    </>
  );
};

export default HomePage;
