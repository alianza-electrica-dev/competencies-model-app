import { ProgressSpinner } from 'primereact/progressspinner';

export const Loading = () => {
  return (
    <div className='card h-full flex justify-content-center align-items-center'>
      <ProgressSpinner />
    </div>
  );
};
