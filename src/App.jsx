import './App.css'
import { Item } from './item'
import { useSelector } from 'react-redux'
import { selectValue } from './store/item-slice'

function App() {

  /* const value = useSelector(state => state.value) */
  const value = useSelector(selectValue);

  return (
    <div className="main-block">
      <div className="center-block" style={{minHeight:'98vh',maxHeight:'98vh'}}>
        <a href="https://vite.dev" target="_blank">
          <img className="logo" alt="tea logo" />
        </a>
        <h1>Tea Time</h1>
        <div className="item">
          <Item></Item>
        </div>
        <div className="list">
          <div>
            <p>
              <span className="hour title">horário</span><span className="description title">descrição</span>
            </p>
            {value?.map( v => <p><span className="hour">{v[0]}</span><span className="description">{v[1]}</span></p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
