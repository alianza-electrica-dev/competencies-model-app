export const Error = ({ errorMessage }) => {
  return (
    <div className='card h-full flex justify-content-center align-items-center'>
      <h2>
        Ha ocurrido un error favor de contactar al administrador
        <span>oscar.lopez@alianzaelectrica.com</span>
      </h2>
      <h4>{errorMessage}</h4>
    </div>
  );
};
