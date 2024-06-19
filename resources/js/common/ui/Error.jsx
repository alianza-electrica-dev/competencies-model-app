import PropTypes from 'prop-types';

export const Error = ({ errorMessage }) => {
  console.log(errorMessage);
  return (
    <div className='flex justify-content-center items-center h-full align-items-center'>
      <span className='text-3xl text-orange-500'>
        Ha ocurrido un error favor de comunicarse con el departamento de TI
      </span>
    </div>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
};
