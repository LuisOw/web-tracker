import { useState } from "react";
import ResearchItem from "./ResearchItem";
import Backdrop from "../../components/researches/Backdrop";
import Questions from "../../components/researches/questions/Questions";

function ResearchesList(props) {
  const [questionsIsOpen, setQuestionsIsOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  function showResearchHandler() {
    setQuestionsIsOpen(true);
  }

  function closeResearchHandler() {
    setQuestionsIsOpen(false);
  }

  return (
    <>
      <table>
        <tr>
          <th>Título</th>
          <th>Capturar tempo de uso</th>
          <th>Questions</th>
        </tr>
        {props.researches.map((research) => (
          <ResearchItem
            key={research.id}
            id={research.id}
            title={research.title}
            usageTimeCapture={research.usageTimeCapture}
            questions={research.questions}
            showResearchHandler={showResearchHandler}
          />
        ))}
        {questionsIsOpen && <Questions onClickClose={closeResearchHandler} />}
        {questionsIsOpen && <Backdrop onClickClose={closeResearchHandler} />}
      </table>
    </>
  );
}

export default ResearchesList;
