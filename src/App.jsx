import teaLogo from './assets/cup-of-tea.png'
import './App.css'
import { Counter } from './counter'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={teaLogo} className="logo" alt="tea logo" />
        </a>
      </div>
      <h1>History Book</h1>
      <div className="card">
        <Counter></Counter>
      </div>
    </>
  )
}

export default App
