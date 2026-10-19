import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import type { Allat } from './types/types'
import AllatLista from './components/AllatLista';
import AllatVezerlo from './components/AllatVezerlo';

function App() {
  const [allatok, setAllatok] = useState<Allat[]>([
    {id: 1, nev: "Bodri", kor: 4},
    {id: 2, nev: "Cirmi", kor: 2},
    {id: 3, nev: "Morzsi", kor: 7},
  ]);
  function allatHozzadasa() {
    const ujAllat: Allat = {id: allatok.length+1, nev: "Luna", kor:1}
    setAllatok((allatok) => [...allatok, ujAllat])
  }
  function eletkorNovelese(id: number) {
    setAllatok(alap => alap.map(allat => allat.id == id? {...allat, kor: allat.kor+1} : allat));
  }

  function allatTorlese(id: number) {
    setAllatok(alap => alap.filter(allat => allat.id != id));
  }

  function osszesHozzadas() {
    setAllatok(allatok => allatok.map(allat => ({...allat, kor: allat.kor+1})))
  }
  return (
    <>
      <div className="container">
        <AllatLista
        allatok={allatok}
        eletkorNovelese={eletkorNovelese}
        allatTorlese={allatTorlese}
        />
        <AllatVezerlo
          allatHozzaadasa={allatHozzadasa}
          osszesHozzadas={osszesHozzadas}
        />
      </div>
    </>
  )
}

export default App
