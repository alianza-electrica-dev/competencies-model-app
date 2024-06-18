/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from 'formik';
import { RadioButton } from 'primereact/radiobutton';

export const CustomRadioButton = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={`field mb-4 col-${props.col ? props.col : '12'}`}>
      <label className='text-black-alpha-90 font-medium'>{label}</label>
      <div className='radio-buttons'>
        {options.map((option, index) => (
          <div key={index} className='field-radiobutton'>
            <RadioButton
              inputId={`${props.name}_${option.value}`}
              name={props.name}
              value={option.value}
              checked={field.value === option.value}
              onChange={() => helpers.setValue(option.value)}
            />
            <label htmlFor={`${props.name}_${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {meta.touched && meta.error ? (
        <div className='font-medium text-red-500'>
          <ErrorMessage name={props.name} />
        </div>
      ) : null}
    </div>
  );
};
