import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
function App() {

  const[presupuesto,setPresupuesto] =useState(0);
  const[isvalidPresupuesto , SetIsValidPresupuesto]=useState(false)

  const [modal, setModal]= useState(false)
  
  const handleNuevoGasto =() => {
    setModal(true)
  }

  return (
     <div>
       <Header
       presupuesto={presupuesto}
       setPresupuesto={setPresupuesto}
       isvalidPresupuesto={isvalidPresupuesto}
       SetIsValidPresupuesto={SetIsValidPresupuesto}
       />
       {isvalidPresupuesto &&(
           <div className="nuevo-gasto">
              <img
                src={IconoNuevoGasto}
                alt="icono nuevo gasto"
                onClick={handleNuevoGasto}
              />
          </div>
       ) }

      {modal && 
              <Modal
              setModal={setModal}
              />} 
     </div>     
  )
}

export default App
