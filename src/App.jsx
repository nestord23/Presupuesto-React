import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import { object } from 'prop-types'

function App() {

  const[presupuesto,setPresupuesto] =useState(0)
  const[isvalidPresupuesto , SetIsValidPresupuesto]=useState(false)

  const [modal, setModal]= useState(false)
  const [gastos ,setGastos]= useState([])
  const [animarModal, setanimarModal]= useState(false)

  const [gastoEditar ,setGestoEditar] = useState({})
  
  useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
           setModal(true)

    setTimeout(() =>{
        setanimarModal(true)
    },500)

      }
  }, [gastoEditar])
  

  const handleNuevoGasto =() => {
    setModal(true)
    setGestoEditar({})

    setTimeout(() =>{
        setanimarModal(true)
    },500)
  }
   
  const guardarGasto = gasto => {
      gasto.id = generarId();
      gasto.fecha = Date.now();
       
      setGastos([...gastos,gasto])
        setanimarModal(false)
        setTimeout(() => {
          setModal(false)
        },500);

    }

  return (
     <div className={modal ? 'fijar': ''}>
       <Header
       gastos={gastos}
       presupuesto={presupuesto}
       setPresupuesto={setPresupuesto}
       isvalidPresupuesto={isvalidPresupuesto}
       SetIsValidPresupuesto={SetIsValidPresupuesto}
       />
       {isvalidPresupuesto &&(
        <>
        <main>
            <ListadoGastos
                gastos={gastos}
                setGestoEditar={setGestoEditar}
            />
        </main>
           <div className="nuevo-gasto">
              <img
                src={IconoNuevoGasto}
                alt="icono nuevo gasto"
                onClick={handleNuevoGasto}
              />
          </div>
        </>
       ) }

      {modal && 
              <Modal
              setModal={setModal}
              animarModal={animarModal}
              setanimarModal={setanimarModal}
              guardarGasto={guardarGasto}
              gastoEditar={gastoEditar}
              />} 
     </div>     
  )
}

export default App
