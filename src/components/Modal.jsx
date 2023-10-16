import Cerrar  from '../img/cerrar.svg'

const Modal = ({setModal}) => {
   
    const OcultarModal = () => {
        setModal(false)
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
                <img 
                src={Cerrar}
                alt="cerrar Modal" 
                onClick={OcultarModal}
                />
        </div>
    </div>
  )
}

export default Modal