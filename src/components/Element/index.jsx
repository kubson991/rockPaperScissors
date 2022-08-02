import "./index.scss";
function App({type}) {
  return (
    <div className="ElementContainer">
      <div className={`${type} element`}>
        <div></div>
      </div>
    </div>
  );
}

export default App;
