import { useState } from "react";
import "./App.scss";
import Score from "./components/Score";
import Selector from "./components/Selector";
import Vs from "./components/Vs";

function App() {
  const [rules, setRules] = useState(false);
  const [pick, setPick] = useState("");
  const [status, setStatus] = useState("");
  const [score,setScore]=useState(0)

  function getPick(pick) {
    setPick(pick);
  }
  function getStatus(status) {
    setStatus(status);
    if (status === 'WIN') {
      setScore(score+1)
    }else if (status === 'LOSE') {
      setScore(0)
    }

  }
  function reset() {
    setStatus("")
    setPick("")
  }
  return (
    <div className="App">
      <Score score={score}></Score>
      {!(pick != "") ? (
        <Selector getValue={getPick}></Selector>
      ) : (
        <Vs pick={pick} getStatus={getStatus}></Vs>
      )}
      {status && (
        <div className="winnerContainer">
          <h1>YOU {status}</h1>
          <button className="RulesButton again" onClick={() => reset()}>
            PLAY AGAIN
          </button>
        </div>
      )}

      <button className="RulesButton" onClick={() => setRules(true)}>
        RULES
      </button>
      {rules && (
        <section className="rules">
          <div>
            <h1>RULES</h1>
            <span className="out" onClick={() => setRules(false)}></span>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
