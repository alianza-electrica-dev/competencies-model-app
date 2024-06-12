import { ProgressSpinner } from 'primereact/progressspinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full align-items-center'>
      <ProgressSpinner />
    </div>
  );
};
