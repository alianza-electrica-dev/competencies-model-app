/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from 'formik';
import { InputText } from 'primereact/inputtext';

export const CustomInputText = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className={`field mb-4 col-${props.col ? props.col : '12'}`}>
      <label
        htmlFor={props.id || props.name}
        className='text-black-alpha-90 font-medium'
      >
        {label}
      </label>
      <InputText className='w-full' {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component='p'
        className='m-0 mt-1 font-medium text-red-500'
      />
    </div>
  );
};
