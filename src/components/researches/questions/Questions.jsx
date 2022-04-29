function Questions(props) {
  console.log(props);
  return (
    <div className="modal">
      {props.questions.map((question) => (
        <p>
          {question.question}
          {question.order}
        </p>
      ))}
      <button onClick={props.onClickClose}>Fechar</button>
    </div>
  );
}

export default Questions;
