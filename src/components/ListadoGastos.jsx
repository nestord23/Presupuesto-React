import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
          gastos,
          setGestoEditar,
          eliminarGasto,
          filtro,
          gastosFiltrados

}) => {
  return (
    <div className="listado-gastos contenedor">
       
       
        {filtro? 
          (
            <>
             <h2>{gastosFiltrados.length ?'Gastos':'No Hay Gastos aun'}</h2>
              {  gastosFiltrados.map (gasto=> (
                <Gasto
                      key={gasto.id} 
                      gasto={gasto}
                      setGestoEditar={setGestoEditar}
                      eliminarGasto={eliminarGasto}
                />

            ))}
          </> 
          )
          :(
            <>
             <h2>{gastos.length ?'Gastos':'No Hay Gastos aun'}</h2>
                  {gastos.map (   gasto=> (
                  <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setGestoEditar={setGestoEditar}
                        eliminarGasto={eliminarGasto}
                      />

                  ))}
        </>
          )
        }
    </div>
  )
}

export default ListadoGastos