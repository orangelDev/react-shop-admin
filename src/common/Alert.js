import { XCircleIcon } from '@heroicons/react/24/solid'; //import del ícono XCircleIcon de HeroIcons

//Componente Alert
const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000); //El alert se cierra automátiamente después de los 9 segundos con la función autoClose
  }

  /*En return se encapsula con un fragment <> </> lo que se quiere mostrar con el alert
    Se hace la validación del alert con el operador && que cuando solo está activo
    se muestra el recuadro con el mensaje, es decir la segunda expresión*/
  return (
    <>
      {alert?.active && (
        <div x-data className="bg-indigo-100 p-5 w-full rounded mb-8">
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;