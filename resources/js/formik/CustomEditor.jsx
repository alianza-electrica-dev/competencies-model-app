/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from 'formik';
import { Editor } from 'primereact/editor';

export const CustomEditor = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <div className={`field mb-4 col-${props.col ? props.col : '12'}`}>
      <Editor
        {...field}
        {...props}
        style={{ width: '100%', height: '300px' }}
      />

      <ErrorMessage
        name={props.name}
        component='p'
        className='m-0 mt-1 font-medium text-red-500'
      />
    </div>
  );
};
