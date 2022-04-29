import React, { useContext } from "react";
import ResearchesList from "../../components/researches/ResearchList";

import { AuthContext } from "../../context/auth";

const DUMMY_DATA = [
  {
    id: 86,
    title: "Research number 84",
    activeModules: ["totalClicks"],
    questions: [
      {
        question: "pergunta 16",
        order: 0,
        alternatives: [
          {
            type: "multiple_choice",
            text: "alternativa1",
            value: 0,
          },
          {
            type: "multiple_choice",
            text: "alternativa2",
            value: 1,
          },
        ],
      },
      {
        question: "pergunta 92",
        order: 1,
        alternatives: [
          {
            type: "other",
            text: "alternativa única",
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 56,
    title: "Research number 15",
    activeModules: ["usageTime"],
    questions: [
      {
        question: "pergunta 65",
        order: 0,
        alternatives: [
          {
            type: "multiple_choice",
            text: "alternativa1",
            value: 0,
          },
          {
            type: "multiple_choice",
            text: "alternativa2",
            value: 1,
          },
        ],
      },
      {
        question: "pergunta 77",
        order: 1,
        alternatives: [
          {
            type: "other",
            text: "alternativa única",
            value: 0,
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: "Research number 30",
    activeModules: ["usageTime"],
    questions: [
      {
        question: "pergunta 59",
        order: 1,
        alternatives: [
          {
            type: "multiple_choice",
            text: "alternativa1",
            value: 0,
          },
          {
            type: "multiple_choice",
            text: "alternativa2",
            value: 1,
          },
        ],
      },
      {
        question: "pergunta 72",
        order: 0,
        alternatives: [
          {
            type: "other",
            text: "alternativa única",
            value: 0,
          },
        ],
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
