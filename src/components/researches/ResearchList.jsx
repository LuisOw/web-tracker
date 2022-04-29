import { useState } from "react";
import ResearchItem from "./ResearchItem";
import Backdrop from "../../components/researches/Backdrop";
import Questions from "../../components/researches/questions/Questions";

function ResearchesList(props) {
  const [questionsIsOpen, setQuestionsIsOpen] = useState(false);
  const [modulesIsOpen, setModulesIsOpen] = useState(false);
  const [questions, setQuestions] = useState([]);

  function showResearchHandler(questions) {
    setQuestionsIsOpen(true);
    setQuestions(questions);
  }

  function showModulesHandler() {
    setModulesIsOpen(true);
  }

  function closeAnyHandler() {
    setQuestionsIsOpen(false);
    setModulesIsOpen(false);
  }

  return (
    <>
      <table>
        <tr>
          <th>Título</th>
          <th>Módulos ativos</th>
          <th>Questions</th>
        </tr>
        {props.researches.map((research) => (
          <ResearchItem
            key={research.id}
            id={research.id}
            title={research.title}
            activeModules={research.activeModules}
            questions={research.questions}
            showResearchHandler={showResearchHandler}
            showModulesHandler={showModulesHandler}
          />
        ))}
        {modulesIsOpen && <Questions onClickClose={closeAnyHandler} />}
        {modulesIsOpen && <Backdrop onClickClose={closeAnyHandler} />}
        {questionsIsOpen && (
          <Questions onClickClose={closeAnyHandler} questions={questions} />
        )}
        {questionsIsOpen && <Backdrop onClickClose={closeAnyHandler} />}
      </table>
    </>
  );
}

export default ResearchesList;
