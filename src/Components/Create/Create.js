import React, { useState } from "react";
import "./Create.css";
import PollTitle from "./Create-Components/PollTitle";
import PollOption from "./Create-Components/PollOption";
import PollSubmit from "./Create-Components/PollSubmit";
import AddMoreOptionsButton from "./Create-Components/AddMoreOptionsButton";

function Create() {
  const [pollAmount, setPollAmount] = useState(5);
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([
    "", "", ""
  ]);

  function update(index, event) {
    const newAnswers = [...answers];
    newAnswers[index] = event;
    setAnswers(newAnswers);
  }

  const handleSubmit = async e => {
    // e.preventDefault();
    const tmpAnswers = [];
    if (question.length > 2 && answers.length > 0) {
      answers.forEach(e => {
        tmpAnswers.push({ answer: e });
      });
      const response = await fetch("http://localhost:1234/createPoll", {
        method: "POST",
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question,
          answers: tmpAnswers
        })
      })
      const content = await response.json();

      // console.log(content);
    }
  }
  

  return (
    <div className="Create">
      <form className="Create__Form" onSubmit={handleSubmit}>
        <PollTitle question={(ev) => setQuestion(ev)} />
        <div className="Create__PollOptions">
          {Array.from(Array(pollAmount), (e, i) => (
            <PollOption key={i} update={(ev) => update(i, ev)} />
          ))}
          </div>
          <AddMoreOptionsButton
              pollAmount={pollAmount}
              setPollAmount={setPollAmount}
            />
        <PollSubmit/>
      
      </form>
      
    </div>
  );
}

export default Create;
