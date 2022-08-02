import './index.scss'

function App({score}) {

  return (
    <div className="Score">
      <section>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
        <p>LIZARD</p>
        <p>SPOCK</p>
      </section>
      <div>
        <h1>SCORE</h1>
        <span>{score}</span>
      </div>
    </div>
  )
}

export default App
