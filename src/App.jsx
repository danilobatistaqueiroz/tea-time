import './App.css'
import { Item } from './item'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectValues, edit, remove } from './store/item-slice'
//import { edit } from './store/edition-slice'

function App() {

  /* const value = useSelector(state => state.value) */
  const values = useSelector(selectValues);
  const dispatch = useDispatch();
  const [edition, setEdition] = useState(false);

  //TODO: ao clicar num item da tabela preencher o campo input de descricao
  //TODO: pesquisar como corrigir o erro:
  //Each child in a list should have a unique "key" prop.

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
              <span className="hour title">horário</span>
              <span className="description title">descrição</span>
              <span class="column-hidden title"></span>
            </p>
            {
              values?.map( v => {
                return (
                  <p>
                    <span className="hour">{v[0]}</span>
                    <span className="description" onClick={()=>setEdition((s)=>!s)}>{v[1]}</span>
                    {
                      edition
                      ?
                      <>
                        <button class="btn" onClick={()=>dispatch(edit([v[0],v[1]]))}><i class="fa fa-pencil"></i></button>
                        <button class="btn" onClick={()=>dispatch(remove([v[0],v[1]]))}><i class="fa fa-trash"></i></button>
                      </>
                      :
                      <>
                        <span class="column-hidden"></span>
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
