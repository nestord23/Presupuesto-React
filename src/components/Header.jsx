import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    gastos,
    presupuesto,
    setPresupuesto,
    isvalidPresupuesto ,
     SetIsValidPresupuesto}) => {
      
  return (
    <header>
        <h1>Planifcador de Gastos</h1>

        {isvalidPresupuesto? (
          <ControlPresupuesto
            gastos={gastos}
            presupuesto={presupuesto}
          />
        ):(
             <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                SetIsValidPresupuesto={SetIsValidPresupuesto}

            /> 
        )}
           
    </header>
  )
}

export default Header