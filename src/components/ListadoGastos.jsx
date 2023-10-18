import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos,setGestoEditar}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ?'Gastos':'No Hay Gastos aun'}</h2>
        
        {gastos.map (   gasto=> (
            <Gasto
                   key={gasto.id} 
                   gasto={gasto}
                   setGestoEditar={setGestoEditar}
            />

        ))}
    </div>
  )
}

export default ListadoGastos