import './App.css'
import { Item } from './item'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectValues, edit, remove } from './store/item-slice'

function App() {

  const values = useSelector(selectValues);
  const dispatch = useDispatch();
  const [edition, setEdition] = useState(false);

  return (
    <div className="main-block">
      <div className="center-block" style={{minHeight:'98vh',maxHeight:'98vh'}}>
        <a href="https://github.com/danilobatistaqueiroz" target="_blank">
          <img className="logo" alt="tea logo" />
        </a>
        <h1>Tea Time</h1>
        <div className="item">
          <Item></Item>
        </div>
        <div className="list">
          <div>
            <p>
              <span className="hour title">horário</span>
              <span className="description title">descrição</span>
              <span className="column-hidden title"></span>
            </p>
            {
              values?.map( v => {
                return (
                  <p key={v[0]}>
                    <span className="hour">{v[0]}</span>
                    <span className="description" onClick={()=>setEdition((s)=>!s)}>{v[1]}</span>
                    {
                      edition
                      ?
                      <>
                        <button className="btn" onClick={()=>dispatch(edit([v[0],v[1]]))}><i class="fa fa-pencil"></i></button>
                        <button className="btn" onClick={()=>dispatch(remove([v[0],v[1]]))}><i class="fa fa-trash"></i></button>
                      </>
                      :
                      <>
                        <span className="column-hidden"></span>
                      </>
                    }
                  </p>
                )
              } )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
