import "./index.scss";
import Element from "../Element";
import { useEffect, useState } from "react";

const elements = ["lizard", "paper", "rock", "scissors", "spock"];

function App({ pick, getStatus }) {
  const [botPick, setbotPick] = useState("");

  function setStatus() {
    switch (botPick) {
      case "lizard":
        if (pick === "spock" || pick === "paper") {
          getStatus("LOSE");
        } else if (pick === "rock" || pick === "scissors") {
          getStatus("WIN");
        } else {
          getStatus("TIE");
        }
        break;
      case "paper":
        if (pick === "spock" || pick === "rock") {
          getStatus("LOSE");
        } else if (pick === "lizard" || pick === "scissors") {
          getStatus("WIN");
        } else {
          getStatus("TIE");
        }
        break;
      case "rock":
        if (pick === "scissors" || pick === "lizard") {
          getStatus("LOSE");
        } else if (pick === "paper" || pick === "spock") {
          getStatus("WIN");
        } else {
          getStatus("TIE");
        }
        break;
      case "spock":
        if (pick === "scissors" || pick === "rock") {
          getStatus("LOSE");
        } else if (pick === "lizard" || pick === "paper") {
          getStatus("WIN");
        } else {
          getStatus("TIE");
        }
        break;
      case "scissors":
        if (pick === "paper" || pick === "lizard") {
          getStatus("LOSE");
        } else if (pick === "spock" || pick === "rock") {
          getStatus("WIN");
        } else {
          getStatus("TIE");
        }
        break;
    }
  }

  useEffect(setStatus, [botPick]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 5);

    const awaiter = async () => {
      setTimeout(() => {
        setbotPick(elements[random]);
      }, 1000);
    };
    awaiter();
  }, []);

  return (
    <section className="VsComponent">
      <div>
        <Element type={pick}></Element>
        <h2>YOU PICKED</h2>
      </div>
      <div>
        {!(botPick != "") ? (
          <div className="holder"></div>
        ) : (
          <Element type={botPick}></Element>
        )}

        <h2>THE HOUSE PICKED</h2>
      </div>
    </section>
  );
}

export default App;
