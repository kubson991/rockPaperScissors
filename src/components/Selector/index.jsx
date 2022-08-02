import "./index.scss";
import Element from "../Element";

const elements = ["lizard", "paper", "rock", "scissors", "spock"];

function App({getValue}) {
  return (
    <div className="Selector">
      {elements.map((type,index) => (
        <div key={index} className={`${'element'+index} element`} onClick={(e)=>getValue(type)}>
          <Element type={type}  />
        </div>
      ))}
    </div>
  );
}

export default App;
