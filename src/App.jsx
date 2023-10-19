import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import { object } from 'prop-types'

function App() {

  const[presupuesto,setPresupuesto] =useState(
    Number(localStorage.getItem('presupuesto'))??0
    )
  const[isvalidPresupuesto , SetIsValidPresupuesto]=useState(false)

  const [modal, setModal]= useState(false)

  const [gastos ,setGastos]= useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')): []
  )

  const [animarModal, setanimarModal]= useState(false)

  const [gastoEditar ,setGestoEditar] = useState({})
  const [filtro,setFiltro] = useState('')
  const [gastosFiltrados,setGastosFiltrados] = useState([])

  
  useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
           setModal(true)

    setTimeout(() =>{
        setanimarModal(true)
    },500)

      }
  }, [gastoEditar])
  
  useEffect(() => {
    localStorage.setItem('presupuesto ',presupuesto ?? 0)
  }, [presupuesto])

   useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos)?? 0)
  }, [gastos])


  useEffect(() => {
    const presupuestoLS= Number(localStorage.getItem('presupuesto'))?? 0;

      if(presupuestoLS > 0)
      {
        SetIsValidPresupuesto(true)
      }
    }, [])

    useEffect(() => {
        if(filtro){
          //filtrar por categoria
          const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
          setGastosFiltrados(gastosFiltrados) 

        }
    }, [filtro])
    


  const handleNuevoGasto =() => {
    setModal(true)
    setGestoEditar({})

    setTimeout(() =>{
        setanimarModal(true)
    },500)
  }
   
  const guardarGasto = gasto => {

      if(gasto.id){
        //actualizar gastos
        const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto: gastoState)
        setGastos(gastosActualizados);
        setGestoEditar({})

      }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto])
      }

        setanimarModal(false)
        setTimeout(() => {
          setModal(false)
        },500);

    }

    const eliminarGasto = id => {
     const gastosActualizados = gastos.filter(gasto => gasto.id !== id );
     setGastos(gastosActualizados);
    }

  return (
     <div className={modal ? 'fijar': ''}>
       <Header
       setGastos={setGastos}
       gastos={gastos}
       presupuesto={presupuesto}
       setPresupuesto={setPresupuesto}
       isvalidPresupuesto={isvalidPresupuesto}
       SetIsValidPresupuesto={SetIsValidPresupuesto}
       />
            {isvalidPresupuesto &&(
              <>
                <main>
                      <Filtros
                          filtro={filtro}
                          setFiltro={setFiltro}
                      />
                            <ListadoGastos
                                gastos={gastos}
                                setGestoEditar={setGestoEditar}
                                eliminarGasto={eliminarGasto}
                                filtro={filtro}
                                gastosFiltrados={gastosFiltrados}
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
              setGestoEditar={setGestoEditar}
              />} 
     </div>     
  )
}

export default App
