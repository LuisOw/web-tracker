import { useState } from "react";

import AlternativesList from "../../alternatives/AlternativesList";

function QuestionItem(props) {
  const [viewAlternatives, setViewAlternatives] = useState(false);

  return (
    <>
      <tr>
        <th>{props.id}</th>
        <th>{props.query}</th>
        <th>{props.order}</th>
        <th>
          <button onClick={() => setViewAlternatives(!viewAlternatives)}>
            Exibir alternativas
          </button>
        </th>
      </tr>
      {viewAlternatives ? (
        <AlternativesList alternatives={props.alternatives} />
      ) : null}
    </>
  );
}

export default QuestionItem;
