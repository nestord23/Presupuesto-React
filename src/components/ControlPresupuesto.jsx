import {useState,useEffect} from 'react'
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({
    presupuesto,
    setGastos,
    gastos,
    setPresupuesto,
    SetIsValidPresupuesto
    }) => {

    const [porcentaje , setPorcentaje] = useState(10)
    const [disponible, setDisponible] = useState(0)
    const[gastado,setGastado]=useState(0)

    useEffect(() => {
      const totalGastado = gastos.reduce((total,gasto) => gasto.cantidad + total, 0);
      const totalDisponible = presupuesto - totalGastado;
      // calcular el porcentaje gastado   
      const nuevoPorcentaje = (((presupuesto - totalDisponible)/ presupuesto)*100).toFixed(0);

      setDisponible(totalDisponible)
      setGastado(totalGastado)
      setTimeout(() => {
        setPorcentaje(nuevoPorcentaje)
      }, 1500);
    }, [gastos])
  


    

    const formatearCantidad =(cantidad) =>{
    return cantidad.toLocaleString('en-US', {
    style:'currency',
    currency:'USD'
})
    }
const handleResetApp= () =>{
    const resultado = confirm('¿Deseas Reiniciar La App de Presupuesto y Gastos');
    if(resultado){
      setGastos([])
      setPresupuesto(0)
    SetIsValidPresupuesto(false)

    }
    }   
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor:'#FDFEFE',
                    trailColor:'#8E44AD',
                    textColor:'#FDFEFE',
                    backgroundColor:porcentaje > 100 ? 'red': '#8E44AD'
                    
                })} 
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
                background={true}
                backgroundPadding={true}
                counterClockwise={true}
            />
        </div>
            <div className="contenido-presupuesto">
                <button
                className="reset-app"
                type="button"
                onClick={handleResetApp}
                >
                    Resetear App
                </button>

                    <p>
                        <span>Presupuesto:</span>{formatearCantidad(presupuesto)}
                    </p>
                    <p className={`${disponible < 0 ? 'negativo': ''}`}>
                        <span>Disponible:</span>{formatearCantidad(disponible)}
                    </p>
                    <p>
                        <span>Gastado:</span>{formatearCantidad(gastado)}
                    </p>
            </div>
    </div>
  )
}
 
export default ControlPresupuesto