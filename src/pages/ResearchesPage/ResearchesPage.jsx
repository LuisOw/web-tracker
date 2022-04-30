import React, { useContext } from "react";
import ResearchesList from "../../components/researches/ResearchList";
import QuestionsList from "../../components/researches/questions/QuestionsList";

import { AuthContext } from "../../context/auth";

const DUMMY_DATA = [
  {
    id: 9,
    title: "Research number64",
    activeModules: ["usageTime"],
    questionnaires: [
      {
        id: 9,
        public1: true,
        questions: [
          {
            query: "pergunta 53",
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
            question: "pergunta 91",
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
    ],
  },
  {
    id: 0,
    title: "Research number57",
    activeModules: ["totalClicks"],
    questionnaires: [
      {
        id: 1,
        public1: true,
        questions: [
          {
            query: "pergunta 2",
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
            question: "pergunta 61",
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
    ],
  },
  {
    id: 23,
    title: "Research number87",
    activeModules: ["usageTime"],
    questionnaires: [
      {
        id: 8,
        public1: true,
        questions: [
          {
            id: 0,
            query: "pergunta 81",
            order: 0,
            alternatives: [
              {
                id: 0,
                type: "multiple_choice",
                text: "alternativa1",
                value: 0,
              },
              {
                id: 0,
                type: "multiple_choice",
                text: "alternativa2",
                value: 1,
              },
            ],
          },
          {
            id: 1,
            question: "pergunta 22",
            order: 0,
            alternatives: [
              {
                id: 0,
                type: "other",
                text: "alternativa única",
                value: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];

const DUMMY_DATA2 = {
  id: 1,
  public: true,
  title: "questionario 1",
  questions: [
    {
      id: 1,
      query: "pergunta 16",
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
      id: 2,
      query: "pergunta 92",
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
};

const ResearchesPage = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <>
      <h1>Suas pesquisas</h1>
      <button onClick={handleLogout}>Logout</button>
      <ResearchesList researches={DUMMY_DATA} />
      <h1>Exibidor de questão</h1>
      <QuestionsList questionnaire={DUMMY_DATA2} />
    </>
  );
};

export default ResearchesPage;
